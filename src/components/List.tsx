import React, { useContext, useCallback, ChangeEvent, useMemo } from "react";
import ImageContext from "./ImageContext";

interface ListProps {
  images: Array<string>;
}

function List(props: ListProps) {
  let { setImage } = useContext(ImageContext);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const image = String(e.target.value);
      setImage(image);
    },
    [setImage]
  );

  function MakeItem(img: string) {
    return (
      <option value={img} key={img}>
        {img.slice(4)}
      </option>
    );
  }

  let items = useMemo(() => props.images.map(MakeItem), [props.images]);

  return (
    <div className="List">
      <select onChange={handleChange}>{items}</select>
    </div>
  );
}

export default List;
