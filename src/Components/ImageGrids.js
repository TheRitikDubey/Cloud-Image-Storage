import React from "react";
import useFireStore from "./HOOKS/useFireStore";
function ImageGrids() {
  const { Docs } = useFireStore("images");
  console.log(Docs);
  return (
    <div className="img-grid">
      {Docs &&
        Docs.map((doc) => (
          <div className="img-wrap">
            <img src={doc.url} alt="Uploded pic" />
          </div>
        ))}
    </div>
  );
}

export default ImageGrids;
