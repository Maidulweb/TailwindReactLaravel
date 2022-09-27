import { CgProfile } from "react-icons/cg";
import { MdLocationSearching } from "react-icons/md";
import { TbVirusSearch } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
export const SidebarItem = [
  {
    title: "Supplier",
    icon: <CgProfile />,
    sidbaricon: <IoIosArrowDown />,
    subSidebar: [
      {
        name: "Add Supplier",
        link: "/add_supplier",
      },
      {
        name: "Supplier List",
        link: "/list_supplier",
      },
    ],
  },
  {
    title: "Category",
    icon: <CgProfile />,
    sidbaricon: <IoIosArrowDown />,
    subSidebar: [
      {
        name: "Add Category",
        link: "/add_category",
      },
      {
        name: "Category List",
        link: "/list_category",
      },
    ],
  },
  {
    title: "Product",
    icon: <CgProfile />,
    sidbaricon: <IoIosArrowDown />,
    subSidebar: [
      {
        name: "Add Product",
        link: "/add_product",
      },
      {
        name: "Product List",
        link: "/list_product",
      },
    ],
  },
  {
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
