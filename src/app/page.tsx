import TransactionCardList from "@/components/card/transactionCardList";
import TransactionChartAndSummary from "@/components/layout/chart/transactionChartAndSummary";
import AppTable from "@/components/table/appTable";

export default function Home() {
  return (
    <div className="w-full ">
      <TransactionCardList />

      <TransactionChartAndSummary />

      <div className=" mt-10 sm:mt-12 md:mt-16  w-full  flex flex-col gap-6">
        <h1>Payments</h1>

        <AppTable />
      </div>
    </div>
  );
}
