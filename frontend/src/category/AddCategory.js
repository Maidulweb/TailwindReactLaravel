import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ".././assets/css/category/AddCategory.css";

const AddCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    name: "",
    slug: "",
  });

  const handleCategory = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const data = {
    name: category.name,
    slug: category.slug,
  };

  const submitCategory = (e) => {
    e.preventDefault();
    axios.post("/api/add_category", data).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        navigate("/list_category");
      } else {
        console.log("Not created");
      }
    });
  };
  return (
    <div>
      <h3 className="uppercase text-center pt-2 pb-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        Add Category
      </h3>
      <form
        className="bg-slate-200 w-2/4 p-10 mt-5 mx-auto"
        onSubmit={submitCategory}
      >
        <div className="">
          <input
            className="w-full rounded pl-3 py-2"
            type="text"
            placeholder="Add Category"
            name="name"
            value={category.name}
            onChange={handleCategory}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full rounded pl-3 py-2"
            type="text"
            placeholder="Add Category"
            name="slug"
            value={category.slug}
            onChange={handleCategory}
          />
        </div>
        <button
          className="font-bold uppercase border-slate-400 border-solid border bg-slate-300 w-full rounded pl-3 py-1 mt-5"
          type="submit"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
