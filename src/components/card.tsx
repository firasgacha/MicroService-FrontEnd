import React, { useEffect, useMemo, useState, useRef } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useColumnOrder, useRowSelect } from "react-table";
import GlobalFilter from "components/GlobalFilter";

interface props {
    id: number;
    name: string;
    description: string;
    image: string;
    COLUMNS: [];
    Data: [];
}

export default function MedicalFolder(props: props) {

    const [showModal, setshowModal] = useState(false);

    const columns = useMemo(() => props.COLUMNS, []);
    const data = useMemo(() => props.Data, [props.Data]);

    const { allColumns, selectedFlatRows, getToggleHideAllColumnsProps, getTableProps, getTableBodyProps, headerGroups, footerGroups, page, nextPage, previousPage, setPageSize, setColumnOrder, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, prepareRow, state, setGlobalFilter } =
        useTable({
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 }
        },
            useColumnOrder,
            useFilters,
            useGlobalFilter,
            useSortBy,
            usePagination,
            useRowSelect
        );

    const { pageIndex, pageSize } = state;

    const { globalFilter } = state;
    const changeOrdre = (v: String) => {
        switch (v) {
            case "Date": {
                setColumnOrder(['appointmentDate', 'doctorId', 'patientId', 'agentId']);
                break;
            }
            case "Doctor": {
                setColumnOrder(['doctorId', 'appointmentDate', 'patientId', 'agentId']);
                break;
            }
            case "Patient": {
                setColumnOrder(['patientId', 'appointmentDate', 'doctorId', 'agentId']);
                break;
            }
            case "Agent": {
                setColumnOrder(['agentId', 'appointmentDate', 'doctorId', 'patientId']);
                break;
            }
            case "default": {
                setColumnOrder(['appointmentDate', 'doctorId', 'patientId', 'agentId']);
                break;
            }
            default: {
                break;
            }
        }
    }
    return (
        <>
            <div
                className="cursor-pointer rounded overflow-hidden shadow-lg m-5 hover:scale-110"
            >
                <img
                    className="w-[300px] h-[200px]"
                    src={props.image}
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{props.name}</div>
                    <p className="text-gray-700 text-base text-center">{props.description}</p>
                </div>
                <div className="pb-2 flex justify-around">
                    <button onClick={() => setshowModal(!showModal)} className="bg-blue-100 rounded-full px-3 py-1 text-l font-semibold text-gray-700 mr-2 mb-2">
                        See more
                    </button>
                </div>
            </div>

            {showModal && (
                < div id="Add" className="z-100 fixed w-full flex justify-center inset-0">
                    <div className="w-full h-full bg-gray-500 bg-opacity-75 transition-opacity z-0 absolute inset-0" />
                    <div className="mx-auto container">
                        <div className="flex items-center justify-center h-full w-full">
                            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-auto md:w-auto lg:w-auto 2xl:w-3/5">
                                <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                    <p className="text-base font-semibold">{props.name}</p>
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setshowModal(!showModal)} width={20} height={20} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <form>
                                        <div id="list">
                                            <div className="bg-white p-10 2xl:p-5">
                                                <div className="container mx-auto bg-white rounded">
                                                    <div className="mx-auto">
                                                        <div className="mx-auto xl:mx-0">
                                                            {/* Table Menu */}
                                                            <div className="flex flex-row items-center justify-between mb-2 mt-2">
                                                                {/* show elements */}
                                                                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                                                                    {[3, 5, 10].map(pageSize => (
                                                                        <option key={pageSize} value={pageSize}>
                                                                            Show {pageSize} elements
                                                                        </option>))}
                                                                </select>
                                                                {/* show elements */}
                                                                {/* ColumnOrder */}
                                                                <select onChange={e => changeOrdre(e.target.value)}>
                                                                    <option defaultChecked key="default" value="default">Order By</option>
                                                                    <option key="Date" value="Date">Date</option>
                                                                    <option key="Doctor" value="Doctor">Doctor</option>
                                                                    <option key="Patient" value="Patient">Patient</option>
                                                                    <option key="Agent" value="Agent">Agent</option>
                                                                </select>
                                                                {/* ColumnOrder */}
                                                                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                                                            </div>
                                                            {/*table*/}
                                                            <div>
                                                                <div className="mx-auto container bg-white shadow rounded">
                                                                    <div className="w-full overflow-y-auto">
                                                                        <table {...getTableProps()} className="min-w-full bg-white">
                                                                            <thead>
                                                                                {headerGroups.map(headerGroup => (
                                                                                    <tr {...headerGroup.getHeaderGroupProps()} className="w-full h-16 border-gray-300 border-b py-8">
                                                                                        {headerGroup.headers.map((column) => (
                                                                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-base font-bold text-center bg-indigo-700 text-white pr-6 tracking-normal leading-4">
                                                                                                {column.render('Header')}
                                                                                                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                                                                                                {/* <div className="flex justify-center pt-1">{column.canFilter ? column.render('Filter') : null}</div> */}
                                                                                            </th>
                                                                                        ))}
                                                                                    </tr>
                                                                                ))}
                                                                            </thead>
                                                                            <tbody {...getTableBodyProps()}>
                                                                                {
                                                                                    page.map(row => {
                                                                                        prepareRow(row)
                                                                                        return (
                                                                                            <tr {...row.getRowProps()} className="h-24 text-center border-gray-300 border-b">
                                                                                                {row.cells.map(cell => (
                                                                                                    <td {...cell.getCellProps()} className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                                                                                        {
                                                                                                            cell.render('Cell')
                                                                                                        }
                                                                                                    </td>
                                                                                                ))}
                                                                                            </tr>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*table*/}


                                                            {/* Table Menu Footer*/}
                                                            <div className="flex flex-row items-center justify-between">
                                                                {/* Pagination */}
                                                                <div className="flex items-center py-3 lg:py-0 lg:px-6">
                                                                    <p className="text-base text-gray-600">
                                                                        Viewing {pageIndex + 1} - {pageIndex + 1} of {pageOptions.length}
                                                                    </p>
                                                                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                                                        <a className="text-gray-600 ml-2 border-transparent border cursor-pointer rounded">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                                <polyline points="15 6 9 12 15 18" />
                                                                            </svg>
                                                                        </a>
                                                                    </button>
                                                                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                                                                        <a className="text-gray-600 border-transparent border rounded focus:outline-none cursor-pointer">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                                <polyline points="9 6 15 12 9 18" />
                                                                            </svg>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                                {/* Pagination */}
                                                                {/* Go to page */}
                                                                <div className="flex flex-row items-center">
                                                                    <div>
                                                                        Go to page {' '}
                                                                    </div>
                                                                    <input type="number" value={pageIndex + 1}
                                                                        onChange={e => {
                                                                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                                                            gotoPage(pageNumber)
                                                                        }}
                                                                        className="ml-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal w-14 text-center h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                                                                </div>
                                                                {/* Go to page */}
                                                                {/* Page number */}
                                                                <div>
                                                                    Page{' '}
                                                                    <strong>
                                                                        {pageIndex + 1} of {pageOptions.length}
                                                                    </strong>{' '}
                                                                </div>
                                                                {/* Page number */}
                                                            </div>
                                                            {/* Table Menu Footer */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}