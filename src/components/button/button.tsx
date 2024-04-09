import { Listbox } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

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

interface SelectedCalenderRange {
  id: number;
  name: string;
}

interface CalenderButtonProps {
  selectedCalenderRange: SelectedCalenderRange;
  setSelectedCalenderRange: Dispatch<SetStateAction<SelectedCalenderRange>>;
}

export const CalenderButton = ({
  setSelectedCalenderRange,
  selectedCalenderRange,
}: CalenderButtonProps) => {
  return (
    // <button className=" text-slate-400 text-xs  py-1 px-2 rounded-[4px] border-slate-200 border flex gap-3 items-center">
    //   <span>Jan - 1 Jun</span>

    //   <MdKeyboardArrowDown className=" w-4 h-4 font-black " />
    // </button>
    <Listbox value={selectedCalenderRange} onChange={setSelectedCalenderRange}>
      <div className="relative w-[138px]  text-[#414042] ">
        <Listbox.Button
          className={
            " w-full text-slate-400 text-xs  p-2 rounded-[4px] border-slate-200 border flex gap-3 justify-between items-center"
          }
        >
          <div className="flex flex-1 capitalize">
            {selectedCalenderRange.name}
          </div>
          <MdKeyboardArrowDown
            size={10}
            className="text-inherit ui-open:hidden"
          />
          <MdKeyboardArrowDown
            size={10}
            className="text-inherit ui-not-open:hidden"
          />
        </Listbox.Button>
        <Listbox.Options className="w-full text-xs absolute left-0 top-full shadow  rounded-bl-md rounded-br-md   ui-not-active:bg-white ">
          {calenderRangeList.map((status) => (
            <Listbox.Option
              className={"px-2.5 py-1.5 hover:bg-neutral-100 capitalize "}
              key={status.id}
              value={status}
            >
              {status.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export const calenderRangeList = [
  { id: 1, name: "1 Jan - 1 Jun" },
  { id: 2, name: "1 July - 1 Dec" },
];
