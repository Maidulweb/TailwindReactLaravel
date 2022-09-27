import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState({
    name: "",
    slug: "",
  });
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get(`/api/edit_category/${id}`).then((res) => {
      setCategory(res.data);
    });
  };

  const handleCategory = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const data = {
    name: category.name,
    slug: category.slug,
  };

  const editCategory = (e) => {
    e.preventDefault();
    axios.put(`/api/edit_category/${id}`, data).then((res) => {
      setCategory(res.data);
      navigate("/list_category");
    });
  };
  return (
    <div>
      <h3 className="uppercase text-center pt-2 pb-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        Edit Category
      </h3>
      <form
        className="bg-slate-200 w-2/4 p-10 mt-5 mx-auto"
        onSubmit={editCategory}
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
            placeholder="Add Slug"
            name="slug"
            value={category.slug}
            onChange={handleCategory}
          />
        </div>
        <button
          className="font-bold uppercase border-slate-400 border-solid border bg-slate-300 w-full rounded pl-3 py-1 mt-5"
          type="submit"
        >
          Edit Category
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
