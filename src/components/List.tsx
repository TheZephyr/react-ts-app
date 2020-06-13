import React, { useContext } from "react";
import ImageContext from "./ImageContext";

interface ListProps {
  images: Array<string>;
}

function List(props: ListProps) {
  let { image, setImage } = useContext(ImageContext);

  function handleChange(e: any) {
    setImage((image = e.target.value));
    console.log(image);
  }

  function MakeItem(img: string) {
    return <option value={img}>{img.slice(4)}</option>;
  }

  return (
    <div className="List">
      <select onChange={handleChange}>{props.images.map(MakeItem)}</select>
    </div>
  );
}

export default List;
