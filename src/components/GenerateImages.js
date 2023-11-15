import React, { useState } from "react";
import classes from "./GenerateImages.module.css";
import { getImagesFromOpenAi } from "../openai/configuration";

const GenerateImages = () => {
  const [img, setImg] = useState("");
  const generateImgHandler = async () => {
    const image = await getImagesFromOpenAi();
    console.log("image: ", image);
    setImg(image);
  };

  return (
    <>
      <button
        className={classes.button}
        role="button"
        onClick={generateImgHandler}
      >
        Generate Image
      </button>
      <div style={{ marginTop: "20px" }}>
        <img src={img} />
      </div>
    </>
  );
};

export default GenerateImages;
