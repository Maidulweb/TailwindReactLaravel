import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import ".././assets/css/product/AddProduct.css";
import ProductInputImagebg from '.././assets/images/product/ProductInputImagebg.png';

const AddProduct = () => {
  const navigate = useNavigate();
  /* Image Preview State */
  const [image, setImage] = useState("");
  const [imageUpload, setImageUpload] = useState(false);
  const [image2, setImage2] = useState("");
  const [imageUpload2, setImageUpload2] = useState(false);
  const [image3, setImage3] = useState("");
  const [imageUpload3, setImageUpload3] = useState(false);
  const [image4, setImage4] = useState("");
  const [imageUpload4, setImageUpload4] = useState(false);
  const [image5, setImage5] = useState("");
  const [imageUpload5, setImageUpload5] = useState(false);

  /* Supplier State */
  const [supplier, setSupplier] = useState([]);
  /* Category State */
  const [category, setCategory] = useState([]);

  /* Product Input */
  const [product, setProduct] = useState('');
  /* Image Preview */

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
        setImageUpload(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
  /* Supplier Show */
  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchSupplier = async () => {
    await axios.get("/api/list_supplier").then((res) => {
      setSupplier(res.data);
    });
  };

  /* Category Show */
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    await axios.get("/api/list_category").then((res) => {
      setCategory(res.data);
    });
  };


  const handleProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const data = {
    image: product.image,
    image_two: product.image_two,
    image_three: product.image_three,
    image_four: product.image_four,
    image_five: product.image_five,
    title: product.title,
    slug: product.slug,
    supplier: product.supplier,
    category: product.category,
    description: product.description,
    price: product.price,
    discount_price: product.discount_price,
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
                htmlFor="image"
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
                      name="image"
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
                className="w-full rounded pl-3 py-2 placeholder-red-100::placeholder"
                type="text"
                placeholder="Add Product Title"
                name="title"
                value={product.title}
                onChange={handleProduct}
              />
            </div>
            <div className="mt-4">
              <input
                className="w-full rounded pl-3 py-2"
                type="text"
                placeholder="Add Tag ( Type and make comma to separate tages )"
                name="slug"
                value={product.slug}
                onChange={handleProduct}
              />
            </div>
            <div className="mt-4">
              {/* <label
                for="countries_multiple"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select an option
              </label> */}
              <select
                multiple=""
                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Choose Supplier</option>
                {supplier.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-4">
              {/* <label
                for="countries_multiple"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select an option
              </label> */}
              <select
                multiple=""
                id="countries_multiple"
                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Choose Category</option>
                {category.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-4">
              <textarea
                rows="3"
                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description"
                name="description"
                value={product.description}
                onChange={handleProduct}
              ></textarea>
            </div>
            <div className="mt-4">
              <input
                className="w-full rounded pl-3 py-2"
                type="number"
                placeholder="Add Price"
                name="price"
                value={product.price}
                onChange={handleProduct}
              />
            </div>
            <div className="mt-4">
              <input
                className="w-full rounded pl-3 py-2"
                type="number"
                placeholder="Add Discount Price"
                name="discount_price"
                value={product.discount_price}
                onChange={handleProduct}
              />
            </div>

            <div className="mt-4">
              <select
                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="status"
                value={product.status}
                onChange={handleProduct}
              >
                <option>Select Status</option>
                <option value="1">Active</option>
                <option value="0">Deactive</option>
              </select>
            </div>
          </div>
        </div>
        <button
          className="font-bold text-slate-50 uppercase border-blue-400 border-solid border bg-blue-600 w-full rounded pl-3 py-1 mt-5"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
