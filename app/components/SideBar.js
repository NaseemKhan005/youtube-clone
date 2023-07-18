import { categories } from "../utils/constats";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <div className="sidebar break-keep pr-2 py-2 sm:p-2 sm:w-56 sm:h-screen sm:fixed sm:top-0 sm:left-0 bg-white overflow-x-auto flex flex-row flex-nowrap sm:flex-col gap-2">
        <div className="mb-3">
          <Link href="/">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="logo"
              className="w-auto h-auto object-cover object-center"
            />
          </Link>
        </div>
        {categories.map((item, index) => (
          <>
            <Button
              key={index}
              onClick={() => setSelectedCategory(item.name)}
              className={`${
                item.name === selectedCategory
                  ? "bg-[#030303] hover:bg-[#030303] sm:hover:bg-primary sm:bg-primary text-white"
                  : "bg-neutral-100 hover:bg-secondary sm:bg-transparent text-black"
              }  sm:mr-0 capitalize cursor-pointer w-auto sm:px-2 py-2 break-keep sm:w-full sm:rounded rounded-lg flex items-center gap-1 sm:gap-2`}
            >
              <span className="hidden sm:block">{item.icon}</span>
              <span className="sm:mt-1 sm:mr-auto text-xs sm:text-sm md:text-base break-keep">
                {item.name}
              </span>
            </Button>
          </>
        ))}
      </div>
    </>
  );
};

export default SideBar;
