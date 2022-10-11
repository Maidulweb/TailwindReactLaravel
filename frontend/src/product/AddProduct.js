import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/product/AddProduct.css";
import Image from "./componentes/Image";

const AddProduct = () => {
  const navigate = useNavigate();
  

  /* Supplier State */
  const [supplier, setSupplier] = useState([]);
  /* Category State */
  const [category, setCategory] = useState([]);

  /* Product Input */
  const [product, setProduct] = useState('');
  
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
            <Image />
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
