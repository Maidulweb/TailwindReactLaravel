import React from 'react';

const ImageInput = ({name, onchange}) => {
    return (
      <div>
        <span className="add-image-color text-sm text-orange-600 font-bold p-1 shadow rounded">
          + Add Image
        </span>
        <input
          className="opacity-0 absolute top-0 bottom-0 left-0 right-0  cursor-pointer"
          type="file"
          accept=".jpg, .png"
        />
      </div>
    );
};

export default ImageInput;