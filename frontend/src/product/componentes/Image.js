import React from "react";
import "../../assets/css/product/AddProduct.css";
import ImageProductFive from "./ImageProductFive";
import ImageProductFour from "./ImageProductFour";
import ImageProductOne from "./ImageProductOne";
import ImageProductThree from "./ImageProductThree";
import ImageProductTwo from "./ImageProductTwo";

const Image = () => {
  return (
    <div>
      <div className="w-full">
        <ImageProductOne />
      </div>
      <div className="mt-4 flex justify-between items-center ">
        <div className="w-1/2 mr-2">
          <ImageProductTwo />
        </div>
        <div className="w-1/2 ml-2">
          <ImageProductThree />
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center ">
        <div className="w-1/2 mr-2">
          <ImageProductFour />
        </div>
        <div className="w-1/2 ml-2">
          <ImageProductFive />
        </div>
      </div>
    </div>
  );
};

export default Image;
