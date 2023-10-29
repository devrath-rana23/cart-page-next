import Image from "next/image";
import React from "react";

const ImageComp = ({
  isNextImage = false,
  src,
  alt = "image",
  height = "100%",
  width = "100%",
}: any) => {
  return (
    <>
      {(() => {
        if (isNextImage) {
          return <Image src={src} alt={alt} style={{ height, width }} />;
        }
        return <img src={src} alt={alt} style={{ height, width }} />;
      })()}
    </>
  );
};

export default ImageComp;
