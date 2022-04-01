import { useState, useEffect } from "react";
import { db } from "../FireBase/Fire";
function useFireStore(collection) {
  const [Docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy("createAt", "desc")
      .onSnapshot((snapshot) => {
        let arr = [];
        snapshot.forEach((it) => {
          arr.push({ ...it.data(), id: it.id });
        });
        setDocs(arr);
      });
    return () => unsub();
  }, [collection]);
  return { Docs };
}

export default useFireStore;
