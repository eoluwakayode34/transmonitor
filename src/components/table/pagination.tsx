import { cn } from "@/utils/cn";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber - 1)}
          className={cn(
            "border   px-2.5 py-1",
            pageNumber === currentPage && "bg-blue-500 text-white"
          )}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
