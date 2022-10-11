import React from 'react';
import withImageInput from './HOC/withImageInput';
import ProductInputImagebg from "../../assets/images/product/ProductInputImagebg.png";
import { MdOutlineClose } from "react-icons/md";
import '../../assets/css/product/AddProduct.css';

const ImageProductOne = ({result, handleInput, removeImage}) => {
    return (
      <div>
        <label
          style={{ backgroundImage: `url(${ProductInputImagebg})` }}
          className="input-image-bg bg-cover bg-no-repeat bg-center h-60 rounded  w-full m-auto mx-0 flex justify-center flex-col items-center relative"
          htmlFor="image_one"
        >
          {!result ? (
            <>
              <span className="add-image-color text-xl text-orange-600 font-bold p-1 shadow rounded">
                + Add Image
              </span>
              <input
                className="opacity-0 absolute top-0 bottom-0 left-0 right-0  cursor-pointer"
                name="image_one"
                type="file"
                accept=".jpg, .png"
                onChange={handleInput}
              />
            </>
          ) : (
            <>
              <div className="relative overflow-hidden w-full h-full">
                <div className="w-full h-full flex items-center">
                  <img
                    className="max-w-full max-h-full m-0 mx-auto"
                    src={result}
                    alt="Nai"
                  />
                </div>
                <div className="absolute right-0 top-0">
                  <button
                    className="remove-shadow"
                    type="button"
                    onClick={removeImage}
                  >
                    <MdOutlineClose className="text-red-600" />
                  </button>
                </div>
              </div>
            </>
          )}
        </label>
      </div>
    );
};

export default withImageInput(ImageProductOne);