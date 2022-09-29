import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import ".././assets/css/product/AddProduct.css";
import ProductInputImagebg from '.././assets/images/product/ProductInputImagebg.png';

const AddProduct = () => {
  const navigate = useNavigate();
  /* Image Preview */
  const [image, setImage] = useState('');
  const [imageUpload, setImageUpload] = useState(false);
  const [image2, setImage2] = useState('');
  const [imageUpload2, setImageUpload2] = useState(false);
  const [image3, setImage3] = useState("");
  const [imageUpload3, setImageUpload3] = useState(false);
   const [image4, setImage4] = useState("");
   const [imageUpload4, setImageUpload4] = useState(false);
  const [image5, setImage5] = useState("");
  const [imageUpload5, setImageUpload5] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    status: "",
  });
  /* Image Preview */

 const handleImage = (e) => {
        if(e.target.files && e.target.files[0]) {

          let reader = new FileReader();

          reader.onload = (e) => {

           setImage(e.target.result)
           setImageUpload(true);
          }
          
          reader.readAsDataURL(e.target.files[0])
        }
  } 

   const handleImage2 = (e) => {
     if (e.target.files && e.target.files[0]) {
       let reader = new FileReader();

       reader.onload = (e) => {
         setImage2(e.target.result);
         setImageUpload2(true);
       };

       reader.readAsDataURL(e.target.files[0]);
     }
   }; 
   
    const handleImage3 = (e) => {
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();

        reader.onload = (e) => {
          setImage3(e.target.result);
          setImageUpload3(true);
        };

        reader.readAsDataURL(e.target.files[0]);
      }
    }; 
     const handleImage4 = (e) => {
       if (e.target.files && e.target.files[0]) {
         let reader = new FileReader();

         reader.onload = (e) => {
           setImage4(e.target.result);
           setImageUpload4(true);
         };

         reader.readAsDataURL(e.target.files[0]);
       }
     }; 
      const handleImage5 = (e) => {
        if (e.target.files && e.target.files[0]) {
          let reader = new FileReader();

          reader.onload = (e) => {
            setImage5(e.target.result);
            setImageUpload5(true);
          };

          reader.readAsDataURL(e.target.files[0]);
        }
      }; 
  const handleRemoveImage = () => {
    setImage("");
    setImageUpload(false);
  };
  const handleRemoveImage2 = () => {
    setImage2("");
    setImageUpload2(false);
  };
  const handleRemoveImage3 = () => {
     setImage3("");
     setImageUpload3(false);
   };
  const handleRemoveImage4 = () => {
      setImage4("");
      setImageUpload4(false);
    };
  const handleRemoveImage5 = () => {
       setImage5("");
       setImageUpload5(false);
     };

  const handleProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const data = {
    name: product.name,
    status: product.status,
  };

  const submitProduct = (e) => {
    e.preventDefault();
    axios.post("/api/add_product", data).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        navigate("/list_product");
      } else {
        console.log("Not created");
      }
    });
  };
  return (
    <div>
      <form className="bg-slate-200 m-5 p-5 mt-5" onSubmit={submitProduct}>
        <div className="flex">
          <div className="w-1/3">
            <div className="w-full">
              <label
                style={{ backgroundImage: `url(${ProductInputImagebg})` }}
                className="input-image-bg bg-cover bg-no-repeat bg-center h-60 rounded  w-full m-auto mx-0 flex justify-center flex-col items-center relative"
                htmlFor="image_one"
              >
                {!imageUpload ? (
                  <>
                    <span className="add-image-color text-xl text-orange-600 font-bold p-1 shadow rounded">
                      + Add Image
                    </span>
                    <input
                      className="opacity-0 absolute top-0 bottom-0 left-0 right-0  cursor-pointer"
                      multiple
                      type="file"
                      name="image_one"
                      accept=".jpg, .png"
                      onChange={handleImage}
                    />
                  </>
                ) : (
                  <>
                    <div className="relative overflow-hidden w-full h-full">
                      <div className="w-full h-full flex items-center">
                        <img
                          className="max-w-full max-h-full m-0 mx-auto"
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="absolute right-0 top-0">
                        <button
                          className="remove-shadow"
                          type="button"
                          onClick={handleRemoveImage}
                        >
                          <MdOutlineClose className="text-red-600" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </label>
            </div>
            <div className="mt-4 flex justify-between items-center ">
              <div className="w-1/2 mr-2">
                <label
                  style={{ backgroundImage: `url(${ProductInputImagebg})` }}
                  className="input-image-bg bg-cover bg-no-repeat bg-center h-24 rounded  w-full m-auto mx-0 flex justify-center flex-col items-center relative"
                  htmlFor="image_two"
                >
                  {!imageUpload2 ? (
                    <>
                      <span className="add-image-color text-sm text-orange-600 font-bold p-1 shadow rounded">
                        + Add Image
                      </span>
                      <input
                        className="opacity-0 absolute top-0 bottom-0 left-0 right-0  cursor-pointer"
                        type="file"
                        name="image_two"
                        accept=".jpg, .png"
                        onChange={handleImage2}
                      />
                    </>
                  ) : (
                    <>
                      <div className="relative overflow-hidden w-full h-full">
                        <div className="w-full h-full flex items-center">
                          <img
                            className="max-w-full max-h-full m-0 mx-auto"
                            src={image2}
                            alt=""
                          />
                        </div>
                        <div className="absolute right-0 top-0">
                          <button
                            className="remove-shadow"
                            type="button"
                            onClick={handleRemoveImage2}
                          >
                            <MdOutlineClose className="text-red-600" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </label>
              </div>
              <div className="w-1/2 ml-2">
                <label
                  style={{ backgroundImage: `url(${ProductInputImagebg})` }}
                  className="input-image-bg bg-cover bg-no-repeat bg-center h-24 rounded  w-full m-auto mx-0 flex justify-center flex-col items-center relative"
                  htmlFor="image_three"
                >
                  {!imageUpload3 ? (
                    <>
                      <span className="add-image-color text-sm text-orange-600 font-bold p-1 shadow rounded">
                        + Add Image
                      </span>
                      <input
                        className="opacity-0 absolute top-0 bottom-0 left-0 right-0  cursor-pointer"
                        type="file"
                        name="image_three"
                        accept=".jpg, .png"
                        onChange={handleImage3}
                      />
                    </>
                  ) : (
                    <>
                      <div className="relative overflow-hidden w-full h-full">
                        <div className="w-full h-full flex items-center">
                          <img
                            className="max-w-full max-h-full m-0 mx-auto"
                            src={image3}
                            alt=""
                          />
                        </div>
                        <div className="absolute right-0 top-0">
                          <button
                            className="remove-shadow"
                            type="button"
                            onClick={handleRemoveImage3}
                          >
                            <MdOutlineClose className="text-red-600" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </label>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center ">
              <div className="w-1/2 mr-2">
                <label
                  style={{ backgroundImage: `url(${ProductInputImagebg})` }}
                  className="input-image-bg bg-cover bg-no-repeat bg-center h-24 rounded  w-full m-auto mx-0 flex justify-center flex-col items-center relative"
                  htmlFor="image_four"
                >
                  {!imageUpload4 ? (
                    <>
                      <span className="add-image-color text-sm text-orange-600 font-bold p-1 shadow rounded">
                        + Add Image
                      </span>
                      <input
                        className="opacity-0 absolute top-0 bottom-0 left-0 right-0  cursor-pointer"
                        type="file"
                        name="image_four"
                        accept=".jpg, .png"
                        onChange={handleImage4}
                      />
                    </>
                  ) : (
                    <>
                      <div className="relative overflow-hidden w-full h-full">
                        <div className="w-full h-full flex items-center">
                          <img
                            className="max-w-full max-h-full m-0 mx-auto"
                            src={image4}
                            alt=""
                          />
                        </div>
                        <div className="absolute right-0 top-0">
                          <button
                            className="remove-shadow"
                            type="button"
                            onClick={handleRemoveImage4}
                          >
                            <MdOutlineClose className="text-red-600" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </label>
              </div>
              <div className="w-1/2 ml-2">
                <label
                  style={{ backgroundImage: `url(${ProductInputImagebg})` }}
                  className="input-image-bg bg-cover bg-no-repeat bg-center h-24 rounded  w-full m-auto mx-0 flex justify-center flex-col items-center relative"
                  htmlFor="image_five"
                >
                  {!imageUpload5 ? (
                    <>
                      <span className="add-image-color text-sm text-orange-600 font-bold p-1 shadow rounded">
                        + Add Image
                      </span>
                      <input
                        className="opacity-0 absolute top-0 bottom-0 left-0 right-0  cursor-pointer"
                        type="file"
                        name="image_five"
                        accept=".jpg, .png"
                        onChange={handleImage5}
                      />
                    </>
                  ) : (
                    <>
                      <div className="relative overflow-hidden w-full h-full">
                        <div className="w-full h-full flex items-center">
                          <img
                            className="max-w-full max-h-full m-0 mx-auto"
                            src={image5}
                            alt=""
                          />
                        </div>
                        <div className="absolute right-0 top-0">
                          <button
                            className="remove-shadow"
                            type="button"
                            onClick={handleRemoveImage5}
                          >
                            <MdOutlineClose className="text-red-600" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="w-2/3 ml-5">
            <div className="">
              <input
                className="w-full rounded pl-3 py-2"
                type="text"
                placeholder="Add Product"
                name="name"
                value={product.name}
                onChange={handleProduct}
              />
            </div>
            <div className="mt-4">
              <select
                className="w-full rounded px-3 py-2"
                name="status"
                value={product.status}
                onChange={handleProduct}
              >
                <option>Please Select</option>
                <option value="1">Active</option>
                <option value="0">Deactive</option>
              </select>
            </div>
          </div>
        </div>
        <button
          className="font-bold uppercase border-slate-400 border-solid border bg-slate-300 w-full rounded pl-3 py-1 mt-5"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
