"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BiSearch } from "react-icons/bi";
import { Pagination } from "./pagination";
import { statusList } from "@/utils/data/statusListData";
import { useMemo, useState } from "react";
import { PAYMENT_COLUMN } from "./column";
import { useDebounce } from "use-debounce";
import { paymentsData } from "./makeData";
import { FilterByStatus } from "./statusFilter";

interface IAppTable<TData, TValue> {}

export default function AppTable<TData, TValue>({}: IAppTable<TData, TValue>) {
  const [selectStatus, setSelectStatus] = useState(statusList[0]);
  const [searchProduct, setSearchProduct] = useState("");

  const [searchProductValue] = useDebounce(searchProduct, 1000);

  const filteredData = useMemo(
    () =>
      paymentsData(100)
        .filter((item) => {
          if (selectStatus?.name?.toLowerCase() === "all") {
            return true;
          } else {
            return (
              item?.status?.toLowerCase() === selectStatus?.name?.toLowerCase()
            );
          }
        })
        .filter((item) =>
          item?.type?.toLowerCase()?.includes(searchProductValue)
        ),
    [selectStatus, searchProductValue]
  );
  const table = useReactTable({
    data: filteredData,
    columns: PAYMENT_COLUMN,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
  });

  return (
    <div className=" overflow-auto  ">
      <div className="flex items-baseline gap-4  flex-col sm:flex-row text-[13px] pb-5">
        <div className="flex gap-4 sm:gap-8  flex-col md:flex-row  flex-1">
          <div className="flex gap-2 items-baseline">
            <span className="capitalize">showing</span>
            <select
              className=" p-[.4rem] w rounded text-sm  bg-transparent text-blue-500 border-0 shadow-none outline-none "
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span>out of {table.getRowCount()} payments</span>
          </div>

          <div className=" w-full md:w-1/3 relative">
            <input
              value={searchProduct}
              onChange={(e) => setSearchProduct(e?.target?.value)}
              placeholder="Search payments"
              className="w-full px-4 pl-6 py-2 border-b border-b-neutral-600 bg-transparent outline-none "
            />
            <BiSearch className="absolute text-neutral-400  top-1/3 placeholder:font-light left-2" />
          </div>
        </div>

        <div className="flex xl:flex-1 text-[13px] items-center gap-5">
          <span>Show</span>
          <FilterByStatus
            selectStatus={selectStatus}
            setSelectStatus={setSelectStatus}
          />
        </div>
      </div>
      <table className="min-w-full divide-y bg-white divide-gray-200">
        <thead className="bg-[#EAEEF0]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-[#7F8FA4] uppercase tracking-wider"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y text-[#7F8FA4] divide-gray-200">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="py-4">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      {table.getRowCount() > 1 && (
        <div className="flex  items-center mt-5 pb-10 w-full justify-between  gap-2">
          <div>
            <span className="flex items-center text-[13px] gap-1">
              Showing {table.getState().pagination.pageIndex + 1} to{" "}
              {table.getPageCount()} of {table.getRowCount()} entries
            </span>
          </div>

          {table.getPageCount() > 1 && (
            <div className="text-[13px] flex items-center">
              <button
                className="border rounded p-1"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">previous</span>
                Previous
              </button>

              <Pagination
                currentPage={table.getState().pagination.pageIndex + 1}
                totalPages={table.getPageCount()}
                onPageChange={table.setPageIndex}
              />

              <button
                className="border rounded p-1"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">next</span>
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
