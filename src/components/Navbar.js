import React, { useEffect, useState } from "react";
// import { getProducts } from "../api/productRequest";
import { AiOutlineSearch } from "react-icons/ai";
import { products } from "../data/data";
import { BiSearch } from "react-icons/bi";
import { GrRefresh } from "react-icons/gr";

const Navbar = ({ setSearchValue }) => {
  const [value, setValue] = useState("");
  const [mappedProducts, setMappedProducts] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setSearchValue(searchTerm);
  };

  const [navState, setNavState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getProducts();
  //       const data = response.data;
  //       console.log(data);

  //       setMappedProducts(data.products);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50 pb-3 border-b-2 xsm:absolute xsm:top-2.5 xsm:left-0 xsm:pb-1 md:top-5 md:pb-2"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme xsm:h-[8.2vh]"
        }
      >
        <nav className="flex items-center justify-between page-container">
          <div className="flex justify-center items-center bg-white h-[40px] w-[40px] rounded-full cursor-pointer">
            <GrRefresh />
          </div>
          <div className="w-[300px] flex flex-col xsm:w-[200px]">
            <label className="flex flex-row">
              <AiOutlineSearch className="bg-[#f5f5f5] h-[40px] w-[25px] rounded-tl-2xl rounded-bl-2xl cursor-pointer" />
              <input
                type="text"
                name="name"
                className="outline-none bg-[#f5f5f5] h-[40px] w-[220px] rounded-tr-2xl rounded-br-2xl cursor-pointer xsm:w-[150px]"
                value={value}
                onChange={onChange}
                autoComplete="off"
              />
            </label>
            <div className="flex flex-col opacity-100 z-[200] blur-effect-theme rounded-2xl mt-2 w-[245px]">
              {products
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.product_name.toLowerCase();
                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.product_name)}
                    className="cursor-pointer my-1.5 ml-3 mr-3 flex flex-row items-center gap-3"
                    key={item.product_id}
                  >
                    <h2>{item.product_name}</h2>
                    <button className="rounded-2xl active:scale-90 transition-all duration-100 ease-in-out shadow-md bg-white text-black py-1 px-2 text-[16px] md:px-1 md:py-0.5">
                      <BiSearch />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
