import React, { useEffect } from "react";
import useStorage from "./HOOKS/useStorage";
function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  useEffect(() => {
    if (progress === 100) {
      setFile(null);
    }
  });
  return <div className="progressbar" style={{ width: progress + "%" }}></div>;
}

export default ProgressBar;
