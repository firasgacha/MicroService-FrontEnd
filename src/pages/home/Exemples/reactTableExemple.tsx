import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import GlobalFilter from "../../../components/GlobalFilter";
import ColumnFilter from "components/ColumnFilter";

export default function reactTableExemple() {
    const COLUMNS = [
        {
            Header: 'Id',
            Footer: 'Id',
            accessor: 'MedecinId',
            Filter: ColumnFilter
        },
        {
            Header: 'First Name',
            Footer: 'First Name',
            accessor: 'first_name',
            Filter: ColumnFilter
        },
        {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor: 'last_name',
            Filter: ColumnFilter
        },
        {
            Header: 'CIN',
            Footer: 'CIN',
            accessor: 'CIN',
            Filter: ColumnFilter
        },
        // {
        //     Header: 'Address',
        //     accessor: 'adresse'
        // },
        // {
        //     Header: 'City',
        //     accessor: 'ville'
        // },
        // {
        //     Header: 'Country',
        //     accessor: 'pays'
        // },
        // {
        //     Header: 'Zip Code',
        //     accessor: 'zipcode'
        // },
        {
            Header: 'Email',
            Footer: 'Email',
            accessor: 'email',
            Filter: ColumnFilter
        },
        // {
        //     Header: 'Birthday',
        //     accessor: 'Birthday'
        // }
        // {
        //     Header: 'Phone',
        //     accessor: 'telephone'
        // },
        // {
        //     Header: 'ProfileUrl',
        //     accessor: 'ProfileUrl'
        // },
        // {
        //     Header: 'ProfilePicture',
        //     accessor: 'ProfileImage'
        // }
    ]
    // const [DoctorList, setDoctorList] = useState([]);



    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);


    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, page, nextPage, previousPage, setPageSize, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, prepareRow, state, setGlobalFilter } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 10 }
    },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination);

    const { pageIndex, pageSize } = state;

    // const GetDoctorsData = () => {
    //     fetch('https://localhost:7058/api/Medecin',{
    //         method: 'GET',
    //         headers: {
    //             'accept': 'text/plain'
    //         }
    //     })
    //         .then(response => {
    //             const result = response;
    //             console.log('result', result);
    //         }).catch(err => { console.log(err) })
    // }

    const { globalFilter } = state;
    return (
        <>
            {/*table*/}
            <div className="py-5">
                {/* Table Menu */}
                <div className="flex flex-row items-center justify-between">
                    {/* show elements */}
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-50 py-2 px-2 xl:px-3 rounded text-gray-600 appearance-none bg-transparent">
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize} elements
                            </option>))}
                    </select>
                    {/* show elements */}
                    {/* Pagination */}
                    <div className="flex items-center py-3 lg:py-0 lg:px-6">
                        <p className="text-base text-gray-600">
                            Viewing {pageIndex + 1} - {pageIndex + 1} of {pageOptions.length}
                        </p>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <a className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </a>
                        </button>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                            <a className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer">
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
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </div>
                {/* Table Menu */}
                <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table {...getTableProps()} className="min-w-full bg-white">
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()} className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-base font-bold text-center bg-indigo-700 text-white pr-6 tracking-normal leading-4">
                                                {column.render('Header')}
                                                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                                                <div className="flex justify-center pt-1">{column.canFilter ? column.render('Filter') : null}</div>
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
                                            <tr {...row.getRowProps()} className="h-24 text-center border-gray-300 dark:border-gray-200 border-b">
                                                {row.cells.map(cell => (
                                                    <td {...cell.getCellProps()} className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
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
                            <tfoot>
                                {
                                    footerGroups.map(footerGroups => (
                                        <tr {...footerGroups.getFooterGroupProps()} className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                            {
                                                footerGroups.headers.map(column => (
                                                    <td {...column.getFooterGroupProps} className="text-base font-bold text-center bg-indigo-700 text-white pr-6 tracking-normal leading-4">
                                                        {column.render('Footer')}
                                                        <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                                                        <div className="flex justify-center pt-1">{column.canFilter ? column.render('Filter') : null}</div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            {/*table*/}
            {/* Table Menu */}
            <div className="flex flex-row items-center justify-between">
                {/* show elements */}
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-50 py-2 px-2 xl:px-3 rounded text-gray-600 appearance-none bg-transparent">
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize} elements
                        </option>))}
                </select>
                {/* show elements */}
                {/* Pagination */}
                <div className="flex items-center py-3 lg:py-0 lg:px-6">
                    <p className="text-base text-gray-600">
                        Viewing {pageIndex + 1} - {pageIndex + 1} of {pageOptions.length}
                    </p>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <a className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </a>
                    </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        <a className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer">
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
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            {/* Table Menu */}
        </>
    )
}
