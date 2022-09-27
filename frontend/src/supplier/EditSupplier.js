import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditSupplier = () => {
  const navigate = useNavigate();
     const {id} = useParams()
 const [supplier, setSupplier] = useState({
   name: "",
   status: "",
 });
   useEffect(() => {
     fetchProducts();
   }, []);

   

   const fetchProducts = async () => {
    
     await axios.get(`/api/edit_supplier/${id}`).then((res) => {
       setSupplier(res.data);
     });
   };

 

  const handleSupplier = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const data = {
    name: supplier.name,
    status: supplier.status,
  };

  const editSupplier = (e) => {
    e.preventDefault();
    axios.put(`/api/edit_supplier/${id}`, data).then((res) => {
        setSupplier(res.data);
        navigate("/list_supplier");
    });
  };
  return (
    <div>
      <h3 className="uppercase text-center pt-2 pb-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        Edit Supplier
      </h3>
      <form
        className="bg-slate-200 w-2/4 p-10 mt-5 mx-auto"
        onSubmit={editSupplier}
      >
        <div className="">
          <input
            className="w-full rounded pl-3 py-2"
            type="text"
            placeholder="Add Supplier"
            name="name"
            value={supplier.name}
            onChange={handleSupplier}
          />
        </div>
        <div className="mt-4">
          <select
            className="w-full rounded px-3 py-2"
            name="status"
            value={supplier.status}
            onChange={handleSupplier}
          >
            <option value="1">Active</option>
            <option value="0">Deactive</option>
          </select>
        </div>
        <button
          className="font-bold uppercase border-slate-400 border-solid border bg-slate-300 w-full rounded pl-3 py-1 mt-5"
          type="submit"
        >
          Edit Supplier
        </button>
      </form>
    </div>
  );
};

export default EditSupplier;
