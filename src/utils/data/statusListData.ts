import { PaymentStatus } from "@/components/table/makeData";

type StatusListType = {
    id: number;
    name: PaymentStatus | "All";
  };
  
  export const statusList: StatusListType[] = [
    { id: 1, name: "All",  },
    { id: 2, name: "reconciled" },
    { id: 3, name: "un-renconciled", },
    { id: 4, name: "settled" , },
    { id: 5, name: "unsettled" },
  ];