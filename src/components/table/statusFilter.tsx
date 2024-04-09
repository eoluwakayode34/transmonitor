import { statusList } from "@/utils/data/statusListData";
import { Listbox } from "@headlessui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function FilterByStatus({ selectStatus, setSelectStatus }: any) {
  return (
    <Listbox value={selectStatus} onChange={setSelectStatus}>
      <div className="relative w-[150px]  text-[#414042] ">
        <Listbox.Button
          className={
            "w-full p-2 pr-3 border rounded-sm flex justify-between items-center"
          }
        >
          <div className="flex flex-1 capitalize">{selectStatus.name}</div>
          <FaChevronDown size={10} className="text-blue-600 ui-open:hidden" />
          <FaChevronUp size={10} className="text-blue-600 ui-not-open:hidden" />
        </Listbox.Button>
        <Listbox.Options className="w-full absolute left-0 top-full shadow  rounded-bl-md rounded-br-md   ui-not-active:bg-white ">
          {statusList.map((status) => (
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
}
