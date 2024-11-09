import React from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import PropTypes from "prop-types";

const DataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "TransactionId", accessor: "transactionId" },
      {
        Header: "Amount",
        accessor: "transactionAmount",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Type",
        accessor: "type",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { globalFilter, pageIndex } = state;

  return (
    <div>
      <input
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        style={{
          padding: "10px",
          marginBottom: "1rem",
          backgroundColor: "white",
          color: "black",
          fontFamily: "Axiforma",
          fontSize: "14px",
        }}
      />
      <table
        {...getTableProps()}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid white",
          marginBottom: "1rem",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps()}
                  style={{
                    border: "1px solid white",
                    fontFamily: "Axiforma Bold",
                    textAlign: "left",
                    borderBottom: "1px solid white",
                    padding: "8px",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                style={{ borderBottom: "1px solid white", padding: "8px" }}
              >
                {row.cells.map((cell) => (
                  <td
                    key={cell.id}
                    {...cell.getCellProps()}
                    style={{
                      fontFamily: "Axiforma",
                      fontSize: "12px",
                      textAlign: "left",
                      borderBottom: "1px solid white",
                      padding: "8px",
                      border: "1px solid white",
                      color:
                        cell.column.id === "status" && cell.value === "success"
                          ? "green"
                          : cell.column.id === "status" &&
                            cell.value === "failed"
                          ? "red"
                          : "white",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {/* ... existing render code for table */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageCount}
            </strong>
          </span>
          <div>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              style={{ backgroundColor: "white", color: "black", marginRight:"3px" }}
            >
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              style={{ backgroundColor: "white", color: "black" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.string.isRequired,
      transactionAmount: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataTable;
