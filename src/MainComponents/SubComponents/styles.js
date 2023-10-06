import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

// API CREDENTIALS
/* 
API Key: FIlfDzN64Havb0s9UJE5w1dwE8hAUWr62erEXXzX
Access Key: AKIA3XE3HF7SV644Y2V5
Secret Key: 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
//////////////////////////
API Key: VFg3u0apsp609mxLWLld08hjnKJOi50q1i88ATZJ
Access Key: AKIA3XE3HF7SRLJTLO4S
Secret Key: 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
*/

export default function Styles(props) {
  const [styles, setStyles] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [running, setRunning] = useState(false);
  const imageContainerRef = useRef(null);

  const API_KEY = "FIlfDzN64Havb0s9UJE5w1dwE8hAUWr62erEXXzX";
  const selectBtn = document.getElementById("button-select");
  const styleCards = Array.from(document.getElementsByClassName("styles-card"));
  const loadingTxtlbl = document.getElementById("loading-result");
  
  useEffect(() => {
    // console.log("image data: ", props.processedImage);
    Axios.get("https://api.deeparteffects.com/v1/noauth/styles", {
      headers: {
        "x-api-key": API_KEY
      }
    })
      .then((response) => {
        console.log(response.data);
        setStyles(response.data);
      })
      .catch((error) => console.error(error));
  }, [props.processedImage]);

  if (!styles) {
    return <div class="style-text">Loading styles...</div>;
  }

  //Uploading Image 3
  const handleSelectClick = () => {
    //disables select btn
    selectBtn.classList.add("disabled");

    //unselect style
    styleCards.forEach((cards) => {
      cards.classList.remove("active");
    });

    if (!running) {
      setRunning(true);
      loadingTxtlbl.textContent = "Generating Image...";
      //outputs the style id
      console.log("Style Chosen: ", [selectedStyle.title], selectedStyle.id);
      //     alert(`Style Chosen: ${selectedStyle.title}
      // ID: ${selectedStyle.id}`);

      const requestData = {
        styleId: selectedStyle.id,
        imageBase64Encoded: props.processedImage.split(",")[1],
        imageSize: "1080",
        optimizeForPrint: true,
        useOriginalColors: false
      };

      console.log("Uploading Image");
      //uploading image
      Axios.post(
        "https://api.deeparteffects.com/v1/noauth/upload",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
           
          }
        }
      )
        .then((response) => {
          const submissionId = response.data.submissionId;
          // setSubmissionId(submissionId);
          getSubmissionResult(submissionId);
          console.log("Successfully Uploaded");
        })
        .catch((error) => console.error(error));

      // Make the API request to get the result 2
      console.log("Getting Result");
      const getSubmissionResult = async (submissionId) => {
        const response = await Axios.get(
          `https://api.deeparteffects.com/v1/noauth/result?submissionId=${submissionId}`,
          {
            headers: {
              "x-api-key": API_KEY
            }
          }
        );
        const result = response.data;

        // Check if the submission is finished and retrieve the URL
        if (result.status === "finished") {
          console.log("Successfully Got Result");
          const artworkUrl = result.url;
          loadingTxtlbl.textContent = "Choose a Style";
          console.log(`Artwork URL: ${artworkUrl}`);
          props.setModifiedImages([...props.modifiedImages, artworkUrl]);
          setRunning(false);
          // You can use the URL to download the artwork
        } else {
          console.log(`Submission is still ${result.status}`);
          loadingTxtlbl.textContent = "Generating Image...";
          setTimeout(() => {
            getSubmissionResult(submissionId);
          }, 2000);
        }
      };
    } else {
      loadingTxtlbl.textContent = "Not Ready";
      setTimeout(() => {
        loadingTxtlbl.textContent = "Generating Image...";
      }, 1000);
    }
  };

  //select button 1
  const handleImageClick = (style) => {
    setSelectedStyle(style);

    if (selectBtn) {
      if (selectBtn.classList.contains("disabled")) {
        selectBtn.classList.remove("disabled");
      }
    }
  };

  const handleScroll = (event) => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="App" onWheel={handleScroll}>
      <h3 id="loading-result" class="style-text">
        {" "}
        Choose a Style{" "}
      </h3>
      <div id="button-select" class="button-selectStyle disabled">
        <button className="selectStyle" onClick={handleSelectClick}>
          Select
        </button>
      </div>
      <div className="image-container" ref={imageContainerRef}>
        {styles.styles.map((style, index) => (
          <div
            key={index}
            className={`styles-card ${
              selectedStyle && selectedStyle.id === style.id ? "active" : ""
            }`}
            onClick={() => handleImageClick(style)}
          >
            <img className="styles-images" src={style.url} alt={style.title} />
            <p className="styles-title">{style.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
