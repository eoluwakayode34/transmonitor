import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Button = ({ type }: { type: "left" | "right" }) => {
    return (
      <button className=" bg-gradient-to-t from-slate-200 to-white py-1 px-2 rounded-[4px] border-slate-200 border">
        {type === "left" ? (
          <MdKeyboardArrowLeft className="text-slate-400 w-4 h-4 font-black " />
        ) : (
          <MdKeyboardArrowRight className="text-slate-400 w-4 h-4 font-black " />
        )}
      </button>
    );
  };
  