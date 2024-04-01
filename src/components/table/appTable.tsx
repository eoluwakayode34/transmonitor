"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface IAppTable<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function AppTable<TData, TValue>({
  columns,
  data,
}: IAppTable<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

  return (
    <div className="shadow overflow-auto  ">
      <table className="min-w-full divide-y bg-white divide-gray-200">
        <thead className="bg-[#EAEEF0]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-[#7F8FA4] uppercase tracking-wider"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y text-[#7F8FA4] divide-gray-200">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="py-4">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex justify-end items-center p-8 gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          previous
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">previous</span>
          prev
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">next</span>
          nex
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Last</span>
          next{" "}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          className="border p-[.4rem] rounded text-sm w-[6rem] "
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/* <div>{table.getRowModel().rows.length} Rows</div> */}
      {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
    </div>
  );
}

// function Table({
// 	data,
// 	columns,
// }: {
// 	data;
// 	columns;
// }) {
// 	const table = useReactTable({
// 		data,
// 		columns,
// 		// Pipeline
// 		getCoreRowModel: getCoreRowModel(),
// 		getFilteredRowModel: getFilteredRowModel(),
// 		getPaginationRowModel: getPaginationRowModel(),
// 		//
// 		debugTable: true,
// 	});

// 	return (
// 		<div className="shadow overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg">
// 			<div className="h-2" />
// 			<table className="min-w-full divide-y divide-gray-200">
// 				<thead className="bg-gray-100">
// 					{table.getHeaderGroups().map((headerGroup) => (
// 						<tr key={headerGroup.id}>
// 							{headerGroup.headers.map((header) => {
// 								return (
// 									<th
// 										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// 										key={header.id}
// 										colSpan={header.colSpan}
// 									>
// 										{header.isPlaceholder ? null : (
// 											<div>
// 												{flexRender(
// 													header.column.columnDef.header,
// 													header.getContext(),
// 												)}
// 											</div>
// 										)}
// 									</th>
// 								);
// 							})}
// 						</tr>
// 					))}
// 				</thead>
// 				<tbody className="bg-white divide-y divide-gray-200">
// 					{table.getRowModel().rows.map((row) => {
// 						return (
// 							<tr key={row.id} className="py-4">
// 								{row.getVisibleCells().map((cell) => {
// 									return (
// 										<td key={cell.id} className="px-6 py-4 whitespace-nowrap">
// 											{flexRender(
// 												cell.column.columnDef.cell,
// 												cell.getContext(),
// 											)}
// 										</td>
// 									);
// 								})}
// 							</tr>
// 						);
// 					})}
// 				</tbody>
// 			</table>
// 			<div className="h-2" />
// 			<div className="flex justify-end items-center p-8 gap-2">
// 				<button
// 					className="border rounded p-1"
// 					onClick={() => table.setPageIndex(0)}
// 					disabled={!table.getCanPreviousPage()}
// 				>
// 					<span className="sr-only">first</span>
// 					<ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
// 				</button>
// 				<button
// 					className="border rounded p-1"
// 					onClick={() => table.previousPage()}
// 					disabled={!table.getCanPreviousPage()}
// 				>
// 					<span className="sr-only">previous</span>
// 					<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
// 				</button>
// 				<button
// 					className="border rounded p-1"
// 					onClick={() => table.nextPage()}
// 					disabled={!table.getCanNextPage()}
// 				>
// 					<span className="sr-only">next</span>
// 					<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
// 				</button>
// 				<button
// 					className="border rounded p-1"
// 					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
// 					disabled={!table.getCanNextPage()}
// 				>
// 					<span className="sr-only">Last</span>
// 					<ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
// 				</button>
// 				<span className="flex items-center gap-1">
// 					<div>Page</div>
// 					<strong>
// 						{table.getState().pagination.pageIndex + 1} of{' '}
// 						{table.getPageCount()}
// 					</strong>
// 				</span>
// 				<span className="flex items-center gap-1">
// 					| Go to page:
// 					<input
// 						type="number"
// 						defaultValue={table.getState().pagination.pageIndex + 1}
// 						onChange={(e) => {
// 							const page = e.target.value ? Number(e.target.value) - 1 : 0;
// 							table.setPageIndex(page);
// 						}}
// 						className="border p-1 rounded w-16"
// 					/>
// 				</span>
// 				<select
// 					className="border p-[.4rem] rounded text-sm w-[6rem] "
// 					value={table.getState().pagination.pageSize}
// 					onChange={(e) => {
// 						table.setPageSize(Number(e.target.value));
// 					}}
// 				>
// 					{[10, 20, 30, 40, 50].map((pageSize) => (
// 						<option key={pageSize} value={pageSize}>
// 							Show {pageSize}
// 						</option>
// 					))}
// 				</select>
// 			</div>
// 			{/* <div>{table.getRowModel().rows.length} Rows</div> */}
// 			{/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
// 		</div>
// 	);
// }
// function Filter({
// 	column,
// 	table,
// }: {
// 	column: Column<any, any>;
// 	table: ReactTable<any>;
// }) {
// 	const firstValue = table
// 		.getPreFilteredRowModel()
// 		.flatRows[0]?.getValue(column.id);

// 	const columnFilterValue = column.getFilterValue();

// 	return typeof firstValue === 'number' ? (
// 		<div className="flex  space-x-2">
// 			<input
// 				type="number"
// 				value={(columnFilterValue as [number, number])?.[0] ?? ''}
// 				onChange={(e) =>
// 					column.setFilterValue((old: [number, number]) => [
// 						e.target.value,
// 						old?.[1],
// 					])
// 				}
// 				placeholder={`Min`}
// 				className="w-24 border shadow rounded"
// 			/>
// 			<input
// 				type="number"
// 				value={(columnFilterValue as [number, number])?.[1] ?? ''}
// 				onChange={(e) =>
// 					column.setFilterValue((old: [number, number]) => [
// 						old?.[0],
// 						e.target.value,
// 					])
// 				}
// 				placeholder={`Max`}
// 				className="w-full border shadow rounded "
// 			/>
// 		</div>
// 	) : (
// 		<input
// 			type="text"
// 			value={(columnFilterValue ?? '') as string}
// 			onChange={(e) => column.setFilterValue(e.target.value)}
// 			placeholder={`Search...`}
// 			className="w-full  shadow rounded p-2 mb-[1rem] "
// 		/>
// 	);
// }

// {header.column.getCanFilter() ? (
//     <div>
//       <Filter column={header.column} table={table} />
//     </div>
//   ) : null}
