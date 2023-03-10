import React, { useState } from "react";
import "./carousel.css";

function Carousel(props) {
  console.log(props);
  const images = [props.img1, props.img2, props.img3, props.img4];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const selectNewImage = (index = Number, images = String, next = true) => {
    // shorthand
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    // if (next) {
    //   if(condition) {
    //     return selectedIndex + 1
    //   } else {
    //     return 0
    //   }
    // }
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
    console.log(condition);
  };
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className="carousel">
      <img
        className="img-carousel"
        src={`/imgs/${selectedImage}`}
        alt="Imagen Vivienda"
      />
      <div className="container-button-carousel">
        <button className="button-carousel" onClick={previous}> {"<"} </button>
        <button className="button-carousel" onClick={next}> {">"} </button>
      </div>
    </div>
  );
}

export default Carousel;
