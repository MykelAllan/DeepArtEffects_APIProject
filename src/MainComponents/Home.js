import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  function tryMeHandler(e) {
    e.preventDefault();
    navigate("/tryme");
  }
  return (
    <>
      {/* Image Display */}
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            class="img-display"
            src={require("./Assets/Images/prev1.jpg")}
            alt="first"
          />
          <Carousel.Caption>
            <h1 class="img-text">Abstract Style</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            class="img-display"
            src={require("./Assets/Images/prev2.jpg")}
            alt="second"
          />
          <Carousel.Caption>
            <h1 class="img-text">Surrealism Style</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            class="img-display"
            src={require("./Assets/Images/prev3.jpg")}
            alt="third"
          />
          <Carousel.Caption>
            <h1 class="img-text">Eye Style</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Project Try Me */}
      <div class="container-proj">
        <div class="home-divider"></div>
        <div class="proj-title">
          <h3>Try Our Project</h3>
        </div>

        <div class="home-container-icon">
          <img
            class="proj-icon"
            src={require("./Assets/Images/deeparts.png")}
          />
          <div class="home-container-info">
            <div class="proj-title">
              <h3>Deep Art Effects</h3>{" "}
            </div>
            <div class="home-buttons">
              <button class="home-tryme" onClick={tryMeHandler}>
                Try Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
