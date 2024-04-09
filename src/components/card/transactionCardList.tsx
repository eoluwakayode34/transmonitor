import { transactionSummaryList } from "@/utils/data/transactionSummaryList";
import TranactionCard from "./transactionCard";

export default function TransactionCardList() {
  return (
    <div className="w-full grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
      {transactionSummaryList.map((item, index) => (
        <TranactionCard key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
}
