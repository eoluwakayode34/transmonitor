import Image from "next/image";
import React from "react";
import { GrNotification } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <div className="h-[60px] text-[#647787] w-full justify-between  px-5 sm:px-10 shadow-md flex  items-center shadow-slate-100 bg-white z-10 absolute top-0 left-0 right-0">
      <div className="flex items-center gap-10">
        <Image
          src={"/appLogo.svg"}
          width={153}
          height={29}
          className=" w-[100px] sm:w-[153px]"
          alt="transmonitor logo"
        />

        <div className="hidden md:flex gap-2 relative  ">
          <input
            placeholder="Search... "
            className="text-xs pl-5 border-0 bg-transparent outline-none"
          />
          <AiOutlineSearch className="text-[#0E1D25] absolute" />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6  md:gap-8 lg:gap-10 xl:gap-14">
        <div className="gap-8 hidden md:flex">
          <div className="text-sm">Support</div>
          <div className="text-sm">FAQ</div>
        </div>

        <div className="relative">
          <div className="-top-1 -right-1 absolute w-[15px] h-[15px] flex text-[10px] rounded-full bg-blue-600 text-white items-center justify-center">
            8
          </div>

          <GrNotification className="w-5 h-5" />
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <div>
            <div className="text-xs text-right ">Hello</div>
            <div className="text-sm">Oluwaleke Ojo</div>
          </div>
          <Image
            src="/assets/images/avatar.png"
            width={36}
            height={36}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}
