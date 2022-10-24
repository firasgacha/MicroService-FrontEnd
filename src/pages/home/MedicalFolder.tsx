import React, { useEffect, useMemo, useState, useRef } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useColumnOrder, useRowSelect } from "react-table";
import GlobalFilter from "../../components/GlobalFilter";
import ColumnFilter from "components/ColumnFilter";
import axios from "axios";
import Card from "components/card";

export default function MedicalFolder() {
    
    const COLUMNS = [
        {
             Header: 'Appointment Date',
            accessor: 'appointmentDate',
            Filter: ColumnFilter
        },
        {
            Header: 'patientId',
            accessor: 'patientId',
            Filter: ColumnFilter
        },
        {
            Header: 'agentId',
            accessor: 'agentId',
            Filter: ColumnFilter
        },
        {
            Header: 'doctorId',
            accessor: 'doctorId',
            Filter: ColumnFilter
        }
    ]
    const COLUMNSMedicalOrder = [
        {
            Header: 'Description',
            accessor: 'medicalOrderDescription',
            Filter: ColumnFilter
        },
        {
            Header: 'Date',
            accessor: 'medicalOrderDate',
            Filter: ColumnFilter
        },
        {
            Header: 'doctorId',
            accessor: 'doctorId',
            Filter: ColumnFilter
        },
        {
            Header: 'patientId',
            accessor: 'patientId',
            Filter: ColumnFilter
        },
        {
            Header: 'medications',
            accessor: 'medications',
            Filter: ColumnFilter,
        }
    ]
    const COLUMNSRadios = [
        {
            Header: 'Description',
            accessor: 'radioDescription',
            Filter: ColumnFilter
        },
        {
            Header: 'Date',
            accessor: 'created',
            Filter: ColumnFilter
        },
        {
            Header: 'doctorId',
            accessor: 'doctorId',
            Filter: ColumnFilter
        },
        {
            Header: 'patientId',
            accessor: 'patientId',
            Filter: ColumnFilter
        },
        {
            Header: 'agentId',
            accessor: 'agentId',
            Filter: ColumnFilter,
        }
    ]
    const COLUMNSScanners = [
        {
            Header: 'Description',
            accessor: 'description',
            Filter: ColumnFilter
        },
        {
            Header: 'Date',
            accessor: 'created',
            Filter: ColumnFilter
        },
        {
            Header: 'doctorId',
            accessor: 'doctorId',
            Filter: ColumnFilter
        },
        {
            Header: 'patientId',
            accessor: 'patientId',
            Filter: ColumnFilter
        },
        {
            Header: 'agentId',
            accessor: 'agentId',
            Filter: ColumnFilter,
        }
    ]
    const COLUMNSMedicaments = [
        {
            Header: 'Name',
            accessor: 'medicationName',
            Filter: ColumnFilter
        },
        {
            Header: 'Description',
            accessor: 'medicationDescription',
            Filter: ColumnFilter
        },
        {
            Header: 'Composition',
            accessor: 'medicationComposition',
            Filter: ColumnFilter
        },
        {
            Header: 'Effets',
            accessor: 'medicationEffets',
            Filter: ColumnFilter
        },
        {
            Header: 'Contraindications',
            accessor: 'medicationContraindication',
            Filter: ColumnFilter,
        },
        {
            Header: 'Price',
            accessor: 'medicationPrice',
            Filter: ColumnFilter,
        },
        {
            Header: 'Code',
            accessor: 'medicationCode',
            Filter: ColumnFilter,
        },
        {
            Header: 'Date Fabrication',
            accessor: 'dateFabrication',
            Filter: ColumnFilter,
        },
        {
            Header: 'Date Expiration',
            accessor: 'dateExpiration',
            Filter: ColumnFilter,
        }
    ]
    const [AppointmentListData, setAppointmentListData] = useState([]);
    const [ScannersListData, setScannersListData] = useState([]);
    const [RadiosListData, setRadiosListData] = useState([]);
    const [MedicalOrderListData, setMedicalOrderListData] = useState([]);




    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => AppointmentListData, [AppointmentListData]);

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
    
    const fetchDataMedicalOrder = async () => {
        await axios.get('MedicalOrder')
            .then((res) => {
                setMedicalOrderListData(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    const fetchDataRadio = async () => {
        await axios.get('Radio')
            .then((res) => {
                setRadiosListData(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    const fetchDataScanner = async () => {
        await axios.get('Scanner')
            .then((res) => {
                setScannersListData(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    const fetchData = async () => {
        await axios.get('Appointment')
            .then((res) => {
                setAppointmentListData(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchData();
        fetchDataMedicalOrder();
        fetchDataRadio();
        fetchDataScanner();
    },[]);
    return (
        // <>
        //     {/* Card code block start */}
        //     <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        //         <div className="bg-white  rounded shadow px-8 py-6 flex items-center">
        //             <div className="flex-col">
        //                 <div className="p-4 rounded">
        //                     <img src="src/assets/mri-machine2.svg" alt="machine2" className="h-[100px]" />
        //                 </div>
        //                 <p className="text-center">Scanners</p>
        //             </div>
        //             <div className="ml-6">
        //                 <h3 className="mb-1 leading-5 text-gray-800  font-bold text-2xl">{ScannersListData.length}</h3>
        //             </div>
        //         </div>
        //         <div className="bg-white rounded shadow px-8 py-6 flex items-center">
        //             <div className="flex-col">
        //                 <div className="p-4 rounded">
        //                     <img src="src/assets/redio.svg" alt="redio" className="h-[100px]" />
        //                 </div>
        //                 <p className="text-center">Radios</p>
        //             </div>
        //             <div className="ml-6">
        //                 <h3 className="mb-1 leading-5 text-gray-800  font-bold text-2xl">{RadiosListData.length}</h3>
        //             </div>
        //         </div>
        //         <div className="bg-white  rounded shadow px-8 py-6 flex items-center">
        //             <div className="flex-col">
        //                 <div className="p-4 rounded">
        //                     <img src="src/assets/md.jpg" alt="md" className="h-[120px]" />
        //                 </div>
        //                 <p className="text-center">Orders</p>
        //             </div>
        //             <div className="ml-6">
        //                 <h3 className="mb-1 leading-5 text-gray-800  font-bold text-2xl">{MedicalOrderListData.length}</h3>
        //             </div>
        //         </div>
        //         <div className="bg-white  rounded shadow px-8 py-6 flex items-center">
        //             <div className="flex-col">
        //                 <div className="p-4 rounded">
        //                     <img src="src/assets/calendar22.svg" alt="calendar22" className="h-[100px]" />
        //                 </div>
        //                 <p className="text-center">Appointments</p>
        //            </div>
        //             <div className="ml-6">
        //                 <h3 className="mb-1 leading-5 text-gray-800  font-bold text-2xl">{AppointmentListData.length}</h3>
        //             </div>
        //         </div>
                
                
        //     </div>
        //     {/* Card code block end */}

        //     {/* Appointment Table */}
        //     <div id="listOfAppointment">
        //         <div className="bg-white p-10 2xl:p-5">
        //             <div className="container mx-auto bg-white rounded">
        //                 {/* <div className="flex justify-between border-b border-gray-300 py-5 bg-white">
        //                     <div className="flex mx-auto xl:w-full xl:mx-0 items-center">
        //                         <svg onClick={() => fetchData()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3">
        //                             <path fillRule="evenodd" d="M12 5.25c-1.213 0-2.415.046-3.605.135a3.256 3.256 0 00-3.01 3.01c-.044.583-.077 1.17-.1 1.759L6.97 8.47a.75.75 0 011.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.752 1.751c.023-.65.06-1.296.108-1.939A4.756 4.756 0 018.282 3.89a49.423 49.423 0 017.436 0 4.756 4.756 0 014.392 4.392c.017.224.032.447.046.672a.75.75 0 01-1.497.092 48.187 48.187 0 00-.044-.651 3.256 3.256 0 00-3.01-3.01A47.926 47.926 0 0012 5.25zm6.97 6.22a.75.75 0 011.06 0l3 3a.75.75 0 11-1.06 1.06l-1.752-1.751a49.25 49.25 0 01-.108 1.939 4.756 4.756 0 01-4.392 4.392 49.412 49.412 0 01-7.436 0 4.756 4.756 0 01-4.392-4.392 49.112 49.112 0 01-.046-.672.75.75 0 111.497-.092c.013.217.028.434.044.651a3.256 3.256 0 003.01 3.01 47.951 47.951 0 007.21 0 3.256 3.256 0 003.01-3.01c.044-.583.077-1.17.1-1.759L17.03 15.53a.75.75 0 11-1.06-1.06l3-3z" clipRule="evenodd" />
        //                         </svg>
        //                     </div>
        //                 </div> */}
        //                 <div className="mx-auto">
        //                     <div className="mx-auto xl:mx-0">
        //                         {/* Table Menu */}
        //                         <div className="flex flex-row items-center justify-between mb-2 mt-2">
        //                             {/* show elements */}
        //                             <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
        //                                 {[3, 5, 10].map(pageSize => (
        //                                     <option key={pageSize} value={pageSize}>
        //                                         Show {pageSize} elements
        //                                     </option>))}
        //                             </select>
        //                             {/* show elements */}
        //                             {/* ColumnOrder */}
        //                             <select onChange={e => changeOrdre(e.target.value)}>
        //                                 <option defaultChecked key="default" value="default">Order By</option>
        //                                 <option key="Date" value="Date">Date</option>
        //                                 <option key="Doctor" value="Doctor">Doctor</option>
        //                                 <option key="Patient" value="Patient">Patient</option>
        //                                 <option key="Agent" value="Agent">Agent</option>
        //                             </select>
        //                             {/* ColumnOrder */}
        //                             <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        //                         </div>
        //                         {/*table*/}
        //                         <div>
        //                             <div className="mx-auto container bg-white shadow rounded">
        //                                 <div className="w-full overflow-y-auto">
        //                                     <table {...getTableProps()} className="min-w-full bg-white">
        //                                         <thead>
        //                                             {headerGroups.map(headerGroup => (
        //                                                 <tr {...headerGroup.getHeaderGroupProps()} className="w-full h-16 border-gray-300 border-b py-8">
        //                                                     {headerGroup.headers.map((column) => (
        //                                                         <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-base font-bold text-center bg-indigo-700 text-white pr-6 tracking-normal leading-4">
        //                                                             {column.render('Header')}
        //                                                             <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
        //                                                             {/* <div className="flex justify-center pt-1">{column.canFilter ? column.render('Filter') : null}</div> */}
        //                                                         </th>
        //                                                     ))}
        //                                                 </tr>
        //                                             ))}
        //                                         </thead>
        //                                         <tbody {...getTableBodyProps()}>
        //                                             {
        //                                                 page.map(row => {
        //                                                     prepareRow(row)
        //                                                     return (
        //                                                         <tr {...row.getRowProps()} className="h-24 text-center border-gray-300 border-b">
        //                                                             {row.cells.map(cell => (
        //                                                                 <td {...cell.getCellProps()} className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
        //                                                                     {
        //                                                                         cell.render('Cell')
        //                                                                     }
        //                                                                 </td>
        //                                                             ))}
        //                                                         </tr>
        //                                                     )
        //                                                 })
        //                                             }
        //                                         </tbody>
        //                                     </table>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/*table*/}


        //                         {/* Table Menu Footer*/}
        //                         <div className="flex flex-row items-center justify-between">
        //                             {/* Pagination */}
        //                             <div className="flex items-center py-3 lg:py-0 lg:px-6">
        //                                 <p className="text-base text-gray-600">
        //                                     Viewing {pageIndex + 1} - {pageIndex + 1} of {pageOptions.length}
        //                                 </p>
        //                                 <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        //                                     <a className="text-gray-600 ml-2 border-transparent border cursor-pointer rounded">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //                                             <path stroke="none" d="M0 0h24v24H0z" />
        //                                             <polyline points="15 6 9 12 15 18" />
        //                                         </svg>
        //                                     </a>
        //                                 </button>
        //                                 <button onClick={() => nextPage()} disabled={!canNextPage}>
        //                                     <a className="text-gray-600 border-transparent border rounded focus:outline-none cursor-pointer">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //                                             <path stroke="none" d="M0 0h24v24H0z" />
        //                                             <polyline points="9 6 15 12 9 18" />
        //                                         </svg>
        //                                     </a>
        //                                 </button>
        //                             </div>
        //                             {/* Pagination */}
        //                             {/* Go to page */}
        //                             <div className="flex flex-row items-center">
        //                                 <div>
        //                                     Go to page {' '}
        //                                 </div>
        //                                 <input type="number" value={pageIndex + 1}
        //                                     onChange={e => {
        //                                         const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
        //                                         gotoPage(pageNumber)
        //                                     }}
        //                                     className="ml-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal w-14 text-center h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
        //                             </div>
        //                             {/* Go to page */}
        //                             {/* Page number */}
        //                             <div>
        //                                 Page{' '}
        //                                 <strong>
        //                                     {pageIndex + 1} of {pageOptions.length}
        //                                 </strong>{' '}
        //                             </div>
        //                             {/* Page number */}
        //                         </div>
        //                         {/* Table Menu Footer */}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* Appointment Table */}

        //     {/* cards */}
        //     <div className="flex justify-around">
        //         <div className="min-w-[250px] max-w-[350px]">
        //             <Card COLUMNS={COLUMNSMedicaments} Data={[]} name={"My Medications"} image={"src/assets/med.jpg"} />
        //         </div>
        //         <div className="min-w-[250px] max-w-[350px]">
        //             <Card COLUMNS={COLUMNSScanners} Data={ScannersListData} name={"My Scanners"} image={"src/assets/scan.jpg"} />
        //         </div>
        //         <div className="min-w-[250px] max-w-[350px]">
        //             <Card COLUMNS={COLUMNSRadios} Data={RadiosListData} name={"My Radios"} image={"src/assets/rad.jpg"} />
        //         </div>
        //         <div className="min-w-[250px] max-w-[350px]">
        //             <Card COLUMNS={COLUMNSMedicalOrder} Data={MedicalOrderListData} name={"My Orders"} image={"src/assets/ored.jpg"} />
        //         </div>
        //     </div>
        //     {/* cards */}
        // </>
        <div>test</div>
    );
}