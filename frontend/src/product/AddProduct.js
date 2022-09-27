import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ".././assets/css/product/AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    status: "",
  });

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
            <div className="flex items-center bg-red-600 h-80 rounded">
              <input className="w-52 m-auto" type="file" />
            </div>
            <div className="mt-4 flex justify-between items-center ">
              <div className="w-1/2 h-36 mr-2 flex items-center bg-red-600 rounded">
                <input className="m-auto w-20" type="file" />
              </div>
              <div className="w-1/2 h-36 ml-2 flex items-center bg-red-600 rounded">
                <input className="m-auto w-20" type="file" />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center ">
              <div className="w-1/2 h-36 mr-2 flex items-center bg-red-600 rounded">
                <input className="m-auto w-20" type="file" />
              </div>
              <div className="w-1/2 h-36 ml-2 flex items-center bg-red-600 rounded">
                <input className="m-auto w-20" type="file" />
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
