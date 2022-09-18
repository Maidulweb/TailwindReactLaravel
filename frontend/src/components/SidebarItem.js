import { CgProfile } from "react-icons/cg";
import { MdLocationSearching } from "react-icons/md";
import { TbVirusSearch } from "react-icons/tb";
export const SidebarItem = [
  {
    title: "Profile",
    icon: <CgProfile />,
    subSidebar: [
      {
        name: "Login",
        link: "/login",
      },
      {
        name: "Register",
        link: "/register",
      },
      {
        name: "Profile",
        link: "/profile",
      },
    ],
  },
  {
    title: "Pages",
    icon: <TbVirusSearch />,
    subSidebar: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Service",
        link: "/service",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    title: "Extra",
    icon: <MdLocationSearching />,
    subSidebar: [
      {
        name: "Search",
        link: "/search",
      },
      {
        name: "Error",
        link: "/error",
      },
      {
        name: "Chart",
        link: "/chart",
      },
      {
        name: "Form",
        link: "/form",
      },
    ],
  },
];
