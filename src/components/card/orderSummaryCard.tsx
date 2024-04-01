type OrderSummaryCardProps = {
  title: string;
  orderSummary: any[];
};

export default function OrderSummaryCard({
  title,
  orderSummary,
}: OrderSummaryCardProps) {
  return (
    <div className="text-sm p-6 container-border bg-white">
      <h3 className="font-bold">{title}</h3>

      <div className="w-full my-[14px] bg-yellow-400 rounded-full h-1 mb-4 ">
        <div
          className="bg-green-600 h-1 rounded-full"
          style={{
            width: "80%",
          }}
        ></div>
      </div>

      <div className=" flex flex-col gap-3  ">
        {orderSummary.map((item, index) => (
          <div className="flex gap-1 " key={index}>
            <div>{item.title}</div>
            <div
              className={`font-bold ${
                item.progress === "total"
                  ? "text-blue-700"
                  : item.progress === "pending"
                  ? "text-yellow-400"
                  : "text-green-500"
              }`}
            >
              {item.vaue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
