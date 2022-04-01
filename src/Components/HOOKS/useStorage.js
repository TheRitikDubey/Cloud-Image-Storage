import React, { useEffect, useState } from "react";
import { storage, db, timestamp } from "../FireBase/Fire";
import { auth } from "../Fireauth";
//import { db } from "../Fire";
function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    //ref
    //console.log(user);
    const ref = storage.ref(file.name);
    const collectionRef = db.collection("images");
    //upload
    ref.put(file).on(
      "state_changed",
      (snapshot) => {
        //progress
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error
        setError(error);
      },
      async () => {
        //complete
        await ref.getDownloadURL().then((url) => {
          setUrl(url);
          const createAt = timestamp();
          collectionRef.add({ url, createAt });
          alert("Image Uploaded");
        });
      }
    );
  }, [file]);
  return { progress, error, url };
}

export default useStorage;
