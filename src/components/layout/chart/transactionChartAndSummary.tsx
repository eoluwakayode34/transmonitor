"use client";
import {
  Button,
  CalenderButton,
  calenderRangeList,
} from "@/components/button/button";
import OrderSummaryCard from "@/components/card/orderSummaryCard";
import TransactionVolumeChart from "@/components/charts/transactionVolumeChart";
import {
  orderSummaryData,
  paymentSummmaryData,
} from "@/utils/data/transactionSummaryList";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";

export default function TransactionChartAndSummary() {
  const [selectedCalenderRange, setSelectedCalenderRange] = useState(
    calenderRangeList[0]
  );

  return (
    <div className=" mt-[26px] grid gap-[2px]  grid-cols-4">
      <div className="col-span-full xl:col-span-3 flex flex-col justify-between  bg-white">
        <div className="px-10 py-5 flex justify-between">
          <h2 className="font-bold">Today: {formatDate()}</h2>

          <div className="flex gap-5 items-center">
            <CalenderButton
              selectedCalenderRange={selectedCalenderRange}
              setSelectedCalenderRange={setSelectedCalenderRange}
            />

            <div className="flex gap-3">
              <Button type="left" />
              <Button type="right" />
            </div>
          </div>
        </div>

        <TransactionVolumeChart />
      </div>
      <div className="col-span-full xl:col-span-1  h-full">
        <OrderSummaryCard title="Orders" orderSummary={orderSummaryData} />
        <OrderSummaryCard title="Payments" orderSummary={paymentSummmaryData} />
      </div>
    </div>
  );
}
