"use client";
import { createColumnHelper } from "@tanstack/react-table";
import { ReactNode } from "react";
import { Payment } from "./makeData";
import { MdKeyboardArrowDown } from "react-icons/md";

const paymentColumnHelper = createColumnHelper<Payment>();

interface ITableHeaderData {
  children: ReactNode;
}

function TableHeaderData({ children }: ITableHeaderData) {
  return <span className="capitalize font-normal text-sm ">{children}</span>;
}

export const PAYMENT_COLUMN = [
  paymentColumnHelper.accessor("type", {
    id: "type",
    cell: (info) =>
      info.getValue() ? (
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-2 bg-[#7F8FA4] text-white text-xs">
            AW
          </div>
          <span className="text-brand-100">{info.getValue()}</span>
        </div>
      ) : null,
    header: () => <TableHeaderData>Item type</TableHeaderData>,
    footer: (props) => props.column.id,
  }),
  paymentColumnHelper.accessor("price", {
    id: "price",
    cell: (info) =>
      info.getValue() ? (
        <span className="lowercase">
          ${Number(info.getValue()).toLocaleString()}
        </span>
      ) : null,
    header: () => <TableHeaderData>Price</TableHeaderData>,
    footer: (props) => props.column.id,
  }),
  paymentColumnHelper.accessor("transactionNo", {
    id: "transactionNo",
    cell: (info) =>
      info.getValue() ? (
        <span className="lowercase">{info.getValue()}</span>
      ) : null,
    header: () => <TableHeaderData>Transaction No</TableHeaderData>,
    footer: (props) => props.column.id,
  }),

  paymentColumnHelper.accessor("time", {
    id: "time",
    cell: (info) =>
      info.getValue() ? (
        <span className="capitalize">{info.getValue()}</span>
      ) : null,
    header: () => <TableHeaderData>Time</TableHeaderData>,
    footer: (props) => props.column.id,
  }),

  paymentColumnHelper.accessor("status", {
    id: "status",
    cell: (info) =>
      info.getValue() ? (
        <div className="flex items-center gap-4 pr-5">
          <div className="flex flex-1 gap-2 items-center py-2  px-3 rounded-[32px] border-slate-200 border-[1px] ">
            <div
              className={` w-[9px] h-[9px] rounded-full ${
                info.getValue().toLowerCase() === "reconciled"
                  ? "bg-[#17BF5F] "
                  : info.getValue().toLowerCase() === "un-reconciled"
                  ? "bg-[#DB890F]"
                  : "bg-slate-400"
              }`}
            />
            <span
              className={`capitalize ${
                info.getValue().toLowerCase() === "reconciled"
                  ? "text-[#17BF5F] "
                  : info.getValue().toLowerCase() === "un-reconciled"
                  ? "text-[#DB890F]"
                  : "text-slate-400"
              }`}
            >
              {info.getValue()}
            </span>
          </div>

          <MdKeyboardArrowDown className="text-slate-200 w-6 h-6 " />
        </div>
      ) : null,
    header: () => <TableHeaderData>status</TableHeaderData>,
    footer: (props) => props.column.id,
  }),
];
