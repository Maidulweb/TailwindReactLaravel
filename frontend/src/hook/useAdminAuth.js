export default function useAdminAuth () {
   const auth = localStorage.getItem("admin_login_token");
   if (!auth) {
    return true;
   }else {
    return false;
   }
   
}
