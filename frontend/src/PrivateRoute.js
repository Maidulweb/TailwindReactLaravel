import { Navigate } from "react-router-dom";
import useAdminAuth from "./hook/useAdminAuth";

export default function PrivateRoute ({ children }) {
  const auth = useAdminAuth();
  return !auth ? children : <Navigate to='/access_error' replace={true} />
}