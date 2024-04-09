import CardChart from "../charts/smallChart";

interface CardChartProps {
  title: string;
  value: string;
}

export default function TranactionCard({ title, value }: CardChartProps) {
  return (
    <div className="col-span-1">
      <div className="bg-white p-[18px] flex justify-between  container-border ">
        <div>
          <p className="text-xs text-brand-400">{title}</p>
          <h2>{value}</h2>
        </div>

        <CardChart />
      </div>
    </div>
  );
}
