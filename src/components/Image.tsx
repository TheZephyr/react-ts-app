import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
}

function Image(props: ImageProps) {
  return (
    <div>
      <img src={props.src} alt={props.alt}></img>
    </div>
  );
}

export default Image;
