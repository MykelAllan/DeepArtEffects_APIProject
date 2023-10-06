import React, { useState, useEffect, useRef } from "react";
import Styles from "./SubComponents/styles";

export default function TryMe() {
  const [processedImage, setProcessedImage] = useState(null);
  const [modifiedImages, setModifiedImages] = useState([]);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showStyles, setShowStyles] = useState(false);

  const onFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProcessedImage(reader.result);
        // console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = async () => {
    if (!processedImage) {
      alert("Please select an image");
      return;
    }
    setShowStyles(true);
  };

  const showFullScreen = (image) => {
    window.open(image, "_blank");
  };

  useEffect(() => {
    const resultTitle = document.getElementById("result-title");
    if (modifiedImages.length > 0) {
      resultTitle.classList.add("hide");
    } else {
      resultTitle.classList.remove("hide");
    }
  }, [modifiedImages]);

  return (
    <div class="try-me-wrapper">
      <div class="try-me proj-title">
        <h3>Deep Art Effects</h3>
      </div>
      <div class="result-container">
        <div class="result-image-container">
          {modifiedImages.length > 0
            ? modifiedImages.map((image, index) => (
                <img
                  key={index}
                  className="result-img"
                  src={image}
                  alt={`Preview ${index}`}
                  onClick={() => showFullScreen(image)}
                />
              ))
            : ""}
        </div>
        <div id="result-title" class="result-title">
          ARTWORK
        </div>
      </div>
      <div class="try-me-container">
        <div className="SelectImage-container">
          <div className="SelectImage-preview">
            {processedImage ? (
              <img
                className="SelectImage-image"
                src={processedImage}
                alt="Preview"
              />
            ) : (
              <div className="SelectImage-placeholder">Select an image</div>
            )}

            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={onFileSelected}
            />
          </div>
        </div>

        <label htmlFor="image-input" class="SelectImage-button select-image ">
          Select Image
        </label>
        <div class="home-divider"></div>
        <button class="try-me-btn submit-image" onClick={submitHandler}>
          Submit
        </button>
      </div>
      <div class="styles-container">
        {showStyles ? (
          <Styles
            processedImage={processedImage}
            modifiedImages={modifiedImages}
            setModifiedImages={setModifiedImages}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
