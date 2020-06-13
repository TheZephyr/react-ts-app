import React, { useState } from "react";
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

  return (
    <div>
      <span>Choose an image:</span>
      <ImageContext.Provider value={{ image, setImage }}>
        <List images={imageArray} />
        <Image src={image} alt="Widoczek" />
      </ImageContext.Provider>
    </div>
  );
}

export default ImageList;
