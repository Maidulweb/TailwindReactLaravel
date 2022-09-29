import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from './pages/Home'
import MasterLayout from "./pages/MasterLayout";
import Admin from "./admin/Admin";
import './assets/css/Base.css';
import AccessError from "./pages/AccessError";
import PrivateRoute from "./PrivateRoute";
import AddCategory from "./category/AddCategory";
import EditCategory from "./category/EditCategory";
import ListCategory from "./category/ListCategory";
import AddSupplier from "./supplier/AddSupplier";
import EditSupplier from "./supplier/EditSupplier";
import ListSupplier from "./supplier/ListSupplier";
import AddProduct from "./product/AddProduct";
import EditProduct from "./product/EditProduct";
import ListProduct from "./product/ListProduct";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const admin_login_token = localStorage.getItem("admin_login_token");
  config.headers.Authorization = admin_login_token
    ? `Bearer ${admin_login_token}`
    : "";
  return config;
});
axios.interceptors.request.use(function (config) {
  const admin_username_token = localStorage.getItem("admin_username_token");
  config.headers.Authorization = admin_username_token
    ? `Bearer ${admin_username_token}`
    : "";
  return config;
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MasterLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />

            <Route path="/add_supplier" element={<AddSupplier />} />
            <Route path="/edit_supplier/:id" element={<EditSupplier />} />
            <Route path="/list_supplier" element={<ListSupplier />} />

            <Route path="/add_category" element={<AddCategory />} />
            <Route path="/edit_category/:id" element={<EditCategory />} />
            <Route path="/list_category" element={<ListCategory />} />

            <Route path="/add_product" element={<AddProduct />} />
            <Route path="/edit_product" element={<EditProduct />} />
            <Route path="/list_product" element={<ListProduct />} />

          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/access_error" element={<AccessError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
