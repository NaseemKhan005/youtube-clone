"use client";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 lg:px-7 sm:mb-4">
        <div className="block sm:hidden">
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
        {/* search bar */}
        <div className="flex items-center ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="py-[.5rem] px-5 w-52 sm:w-80 lg:w-[500px] rounded-tl-full rounded-bl-full shadow-inner border border-neutral-300 outline-none focus:border focus:border-blue-900 "
          />
          <SearchOutlinedIcon className="text-[2.6rem] p-2 w-14 sm:w-16 rounded-tr-full rounded-br-full hover:bg-secondary bg-neutral-100 text-black border border-neutral-300 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
