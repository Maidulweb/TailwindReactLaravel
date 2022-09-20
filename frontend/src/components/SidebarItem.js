import { CgProfile } from "react-icons/cg";
import { MdLocationSearching } from "react-icons/md";
import { TbVirusSearch } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
export const SidebarItem = [
  {
    id: 0,
    title: "Profile",
    icon: <CgProfile />,
    sidbaricon: <IoIosArrowDown />,
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
    id: 1,
    title: "Pages",
    icon: <TbVirusSearch />,
    sidbaricon: <IoIosArrowDown />,
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
    id: 2,
    title: "Extra",
    icon: <MdLocationSearching />,
    sidbaricon: <IoIosArrowDown />,
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
