"use client";
import { Button } from "@/components/button/button";
import OrderSummaryCard from "@/components/card/orderSummaryCard";
import TransactionCardList from "@/components/card/transactionCardList";
import TransactionVolumeChart from "@/components/charts/transactionVolumeChart";
import AppTable from "@/components/table/appTable";
import { PAYMENT_COLUMN } from "@/components/table/column";
import { paymentsData } from "@/components/table/makeData";
import { statusList } from "@/utils/data/statusListData";
import {
  orderSummaryData,
  paymentSummmaryData,
} from "@/utils/data/transactionSummaryList";
import { useMemo, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [selectStatus, setSelectStatus] = useState(statusList[0]);
  const [searchProduct, setSearchProduct] = useState("");

  const [searchProductValue] = useDebounce(searchProduct, 1000);

  const filteredData = useMemo(
    () =>
      paymentsData(100).filter(
        (item) =>
          (!selectStatus ||
            item?.status?.toLowerCase() ===
              selectStatus?.name?.toLowerCase()) &&
          (!searchProductValue ||
            item.type.toLowerCase().includes(searchProductValue.toLowerCase()))
      ),
    [selectStatus, searchProductValue]
  );

  return (
    <div className="w-full ">
      <TransactionCardList />

      <div className=" mt-[26px] grid gap-[2px]  grid-cols-4">
        <div className="col-span-full xl:col-span-3 flex flex-col justify-between  bg-white">
          <div className="px-10 py-5 flex justify-between">
            <h2 className="font-bold">Today: 5, Aug 2018</h2>

            <div className="flex gap-3">
              <Button type="left" />
              <Button type="right" />
            </div>
          </div>

          <TransactionVolumeChart />
        </div>
        <div className="col-span-full xl:col-span-1  h-full">
          <OrderSummaryCard title="Orders" orderSummary={orderSummaryData} />
          <OrderSummaryCard
            title="Payments"
            orderSummary={paymentSummmaryData}
          />
        </div>
      </div>

      <div className=" mt-10 sm:mt-12 md:mt-16 xl:mt-20 w-full  flex flex-col gap-6">
        <h1>Payments</h1>

        <AppTable />
      </div>
    </div>
  );
}
