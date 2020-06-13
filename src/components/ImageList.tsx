import React, { useState, useEffect } from "react";
import Image from "./Image";
import List from "./List";
import ImageContext from "./ImageContext";

const imageArray = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
];

function ImageList() {
  const [image, setImage] = useState(imageArray[0]);

  useEffect(() => {
    const paragraph: HTMLElement | null = document.getElementById(
      "ImageHeader"
    );
    if (paragraph) {
      let randomHue = Math.random() * 360;
      let randomColor = `hsl(${randomHue}, 100%, 50%)`;
      paragraph.style.color = randomColor;
    }
  });

  return (
    <div>
      <p id="ImageHeader">Choose an image:</p>
      <ImageContext.Provider value={{ image, setImage }}>
        <List images={imageArray} />
        <Image src={image} alt="Widoczek" />
      </ImageContext.Provider>
    </div>
  );
}

export default ImageList;
