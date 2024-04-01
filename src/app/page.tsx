import OrderSummaryCard from "@/components/card/orderSummaryCard";
import TransactionCardList from "@/components/card/transactionCardList";
import TransactionVolumeChart from "@/components/charts/transactionVolumeChart";
import AppTable from "@/components/table/appTable";
import { PAYMENT_COLUMN } from "@/components/table/column";
import { paymentsData } from "@/components/table/makeData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  const orderSummaryData = [
    {
      title: "Pending Orders: ",
      vaue: 20,
      progress: "pending",
    },
    {
      title: "Reconcilled Orders:  ",
      progress: "paid",

      vaue: 80,
    },
    {
      title: "Total Orders:  ",
      vaue: 100,
      progress: "total",
    },
  ];
  const paymentSummmaryData = [
    {
      title: "Un-Reconcilled Payments: ",
      vaue: 20,
      progress: "pending",
    },
    {
      title: "Reconcilled Payments:  ",
      progress: "paid",

      vaue: 80,
    },
    {
      title: "Total Payments:  ",
      vaue: 100,
      progress: "total",
    },
  ];

  const Button = ({ type }: { type: "left" | "right" }) => {
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
  return (
    <div className="w-full  ">
      <TransactionCardList />

      <div className=" mt-[26px] grid gap-[2px] h-[329px] grid-cols-4">
        <div className="col-span-3 h-full flex flex-col justify-between  bg-white">
          <div className="px-10 py-5 flex justify-between">
            <h2 className="font-bold">Today: 5, Aug 2018</h2>

            <div className="flex gap-3">
              <Button type="left" />
              <Button type="right" />
            </div>
          </div>

          <TransactionVolumeChart />
        </div>
        <div className="col-span-1  h-full">
          <OrderSummaryCard title="Orders" orderSummary={orderSummaryData} />
          <OrderSummaryCard
            title="Payments"
            orderSummary={paymentSummmaryData}
          />
        </div>
      </div>

      <div className="mt-10 w-full  flex flex-col gap-6">
        <h1>Payments</h1>

        <AppTable columns={PAYMENT_COLUMN} data={paymentsData(100)} />
      </div>
    </div>
  );
}
