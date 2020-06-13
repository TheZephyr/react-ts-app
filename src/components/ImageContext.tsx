import { createContext } from "react";

const ImageContext = createContext({
  image: "img/img1.jpg",
  setImage: (image: string) => {}
});

export default ImageContext;
