import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '.././assets/css/supplier/ListSupplier.css'

 const ListSupplier = () => {
 const [supplier, setSupplier] = useState([]);

 useEffect(() => {
   fetchProducts();
 }, []);

 const fetchProducts = async () => {
  await axios.get("/api/list_supplier").then((res ) => {
    setSupplier(res.data);
  });
 }
  const deleteSupplier = async (id) => {
    await axios
      .delete(`/api/delete_supplier/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          fetchProducts();
        } else {
          console.log("nothing");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h3 className="uppercase text-center pt-2 pb-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        List Supplier
      </h3>
      <div className="table w-full pl-10 pr-10 mt-5">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Supplier Name
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  ID
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Status
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Edit
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {supplier.map((item, index) => {
                return (
                  <tr key={index} className="bg-white dark:bg-gray-800">
                    <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-center">{item.id}</td>
                    <td
                      className={`py-4 px-6 text-center 
                        ${item.status === 1 ? "text-green-500" : "text-red-500"}
                      `}
                    >
                      {item.status === 1 ? "Active" : "Deactive"}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Link
                        to={`/edit_supplier/${item.id}`}
                        className="edit-button pt-1 pb-1 pl-3 pr-3 rounded"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteSupplier(item.id);
                        }}
                        className="delete-button pt-1 pb-1 pl-3 pr-3 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListSupplier;
