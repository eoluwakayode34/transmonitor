import Image from "next/image";
import React from "react";
import { sideBarData } from "./sidebarData";

export default function Sidebar() {
  return (
    <div className="w-[260px] bg-white h-full py-10 ">
      <div className="px-8">
        <button className="bg-[#27AE60] px-[27px] py-3 text-white rounded-[32px] ">
          GENERATE INVOICE
        </button>
      </div>

      {sideBarData.map((item, index) => (
        <div key={index} className="text-[11px] mt-8 text-[#647787]">
          {item?.title && <div className="pl-[27px]">{item?.title}</div>}
          <div>
            {item?.menuList?.map((item, index) => (
              <div
                key={index}
                className="flex pl-[27px] gap-4 py-3 hover:border-l hover:border-[#1875F0] hover:bg-[#E8F1FD]"
              >
                <Image
                  src={item?.image?.url}
                  width={item?.image?.width}
                  height={item?.image?.height}
                  alt={`${item?.title} img`}
                />
                <div className="">{item?.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
