import React, { useEffect, useState } from "react";
import { database } from "./FireBase/Fire";
import { storage } from "./FireBase/Fire";
import ProgressBar from "./ProgressBar";
function Main() {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const type = ["image/png", "image/jpeg", "image/jpg"];
  const Upload = () => {
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };
  const ChangeHandle = (e) => {
    let selected = e.target.files[0];
    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile("");
      setError("Please select an image file (png, jpeg, jpg)");
    }
  };
  return (
    <div>
      <div className="inuput">
        <label htmlFor="file">File: </label>
        <input type="file" accept="image/*" onChange={ChangeHandle} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="file">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
        <button>Upload</button>
      </div>
    </div>
  );
}

export default Main;
