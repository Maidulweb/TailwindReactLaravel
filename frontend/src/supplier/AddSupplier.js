import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '.././assets/css/supplier/AddSupplier.css'

const AddSupplier = () => {
    const navigate = useNavigate();
    const [supplier, setSupplier] = useState({
        'name' : '',
        'status' : '',
    })

    const handleSupplier = (e) => {
        setSupplier({...supplier, [e.target.name] : e.target.value})
    }

    const data = {
        'name' : supplier.name,
        'status' : supplier.status,
    }
    
    const submitSupplier = (e) => {
        e.preventDefault();
            axios.post('/api/add_supplier', data)
                 .then( res => {
                  console.log(res)
                    if(res.data.status === 200) {
                        navigate('/list_supplier')
                    }else {
                        console.log('Not created')
                    }
                 })
        
    }
    return (
      <div>
        <h3 className="uppercase text-center pt-2 pb-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          Add Supplier
        </h3>
          <form
            className="bg-slate-200 w-2/4 p-10 mt-5 mx-auto"
            onSubmit={submitSupplier}
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
                <option>Please Select</option>
                <option value="1">Active</option>
                <option value="0">Deactive</option>
              </select>
            </div>
            <button
              className="font-bold uppercase border-slate-400 border-solid border bg-slate-300 w-full rounded pl-3 py-1 mt-5"
              type="submit"
            >
              Add Supplier
            </button>
          </form>
      </div>
    );
};

export default AddSupplier;