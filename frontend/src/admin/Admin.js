import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Admin.css'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

const navigate = useNavigate();  
const [login, setLogin] = useState({
  email : '',
  password : '',
});

const handleLogin = (e) => {
  setLogin({...login, [e.target.name] : e.target.value})
}
const data =  {
  'email' : login.email,
  'password' : login.password,
}
const loginSubmit = (e) => {
  e.preventDefault();
  
 axios.get("/sanctum/csrf-cookie").then((response) => {
  axios.post('/api/login', data)
       .then(res=>{
        if(res.data.status === 200) {
          localStorage.setItem("admin_login_token", res.data.admin_login_token);
          localStorage.setItem(
            "admin_username_token",
            res.data.admin_username_token
          );
          navigate('/');
          console.log(res.data.success);
        }else if (res.data.status === 201) {
          console.log(res.data.warning)
        }else {
          console.log('Not Connected!!!!');
        }

  })
       
 });

}

    return (
      <div className="main-form flex items-center justify-center">
        <div className="sub-form w-2/4 p-10 rounded-xl">
          <h3 className="text-center pb-2 admin-login-header">ADMIN LOGIN</h3>
          <hr className='mb-8' />
          <form onSubmit={loginSubmit}>
            <div className="mt-4">
              <input className="rounded pl-3 pt-1 pb-1" type="text" placeholder='Email' name='email'  value={login.email} onChange={handleLogin} />
            </div>
            <div className="mt-4">
              <input className="rounded pl-3 pt-1 pb-1" type="password" placeholder='Password' name='password' value={login.password}  onChange={handleLogin} />
            </div>
            <button type='submit' className="rounded mt-5 pt-1 pb-1">LOGIN</button>
          </form>
        </div>
      </div>
    );
};

export default Admin;