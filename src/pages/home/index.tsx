import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

// SVG
import SVGA from "assets/a.svg";
import CompasSVG from "assets/compas.svg";
import UserSVG from "assets/user.svg";
import GridSVG from "assets/grid.svg";
import SearchSVG from "assets/search.svg";
import BellSvg from "assets/bell.svg";
import PuzzleSvg from "assets/puzzle.svg";
import MessagesSvg from "assets/messages.svg";
import LogoutSvg from "assets/logout.svg";
import PointerSvg from "assets/pointer.svg";
import ChevronSvg from "assets/chevron.svg";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const location = useLocation();
  const [pageName, setPageName] = useState("");
  const [role, setRole] = useState(String);

  useEffect(() => {
    const temp = location.pathname.slice(1).replace(/([A-Z])/g, " $1");
    setPageName(location.pathname.charAt(1).toUpperCase() + temp.slice(1));
    // if (localStorage.getItem('role').substring(1, localStorage.getItem('role').length - 1)) { setRole(localStorage.getItem('role').substring(1, localStorage.getItem('role').length - 1)) }
  }, [location]);

  return (
    <div
      className="w-full min-h-screen h-fit bg-gray-200"
      style={{ overflow: show ? "clip" : "" }}
    >
      <div className="flex flex-no-wrap">
        <div className=" fixed w-64 h-screen top-16 shadow bg-gray-100 hidden lg:block">
          <div className="h-16 w-full flex items-center px-8">
            <Link to={"/"}>
              <img
                width={40}
                src="https://assets.change.org/photos/9/zh/sb/VqzhSBEEHpTMbDK-800x800-noPad.jpg?1560371548"
                alt="logo"
                className="mt-6"
              />
              <p className="text-center text-base font-extrabold">
                ChangeEveryWhere
              </p>
            </Link>
          </div>
          <ul aria-orientation="vertical" className=" py-6">
            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                  />
                </svg>
                <Link to={"Dossier"}>
                  <span className="ml-2">Dossier</span>
                </Link>
              </div>
            </li>
            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <Link to={"Collisions"}>
                  <span className="ml-2">Collisions</span>
                </Link>
              </div>
            </li>
            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <Link to={"constat"}>
                  <span className="ml-2">Constat</span>
              </div>
            </li>
            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <Link to={"Devis"}>
                  <span className="ml-2">Devis</span>
                </Link>
              </div>
            </li>
            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <Link to={"contacts"}>
                  <span className="ml-2">Rembourssement</span>
                </Link>
              </div>
            </li>
            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <Link to={"contacts"}>
                  <span className="ml-2">Reclamation</span>
                </Link>
              </div>
            </li>
            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <Link to={"contacts"}>
                  <span className="ml-2">Reparation</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "w-full h-full fixed z-40  transform  translate-x-0 "
              : "   w-full h-full absolute z-40  transform -translate-x-full"
          }
          id="mobile-nav"
        >
          <div
            className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
            onClick={() => setShow(!show)}
          />
          <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <div className="flex items-center justify-between px-8">
                  <div className="h-16 w-full flex items-center">
                    <SVGA />
                  </div>
                  <div
                    id="closeSideBar"
                    className="flex items-center justify-center h-10 w-10"
                    onClick={() => setShow(!show)}
                  ></div>
                </div>
                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <div>
                      <GridSVG />
                    </div>
                    <Link to={"medical-folder"}>
                      <span className="ml-2">Medical Folder</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <PuzzleSvg />
                    <Link to={"doctors"}>
                      <span className="ml-2">List of doctors</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <CompasSVG />
                    <Link to={"patients"}>
                      <span className="ml-2">List of patients</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                      />
                    </svg>
                    <Link to={"appointment"}>
                      <span className="ml-2">List of Appointments</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                    <Link to={"agents"}>
                      <span className="ml-2">List of Agents</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                    <Link to={"hospitals"}>
                      <span className="ml-2">List of Hospitals</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                      />
                    </svg>
                    <Link to={"medications"}>
                      <span className="ml-2">List of Medicaments</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                      />
                    </svg>
                    <Link to={"departements"}>
                      <span className="ml-2">List of Departements</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <Link to={"medical-orders"}>
                      <span className="ml-2">List of Medical_Orders</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>

                    <Link to={"radios"}>
                      <span className="ml-2">List of Radios</span>
                    </Link>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                      />
                    </svg>
                    <Link to={"scanners"}>
                      <span className="ml-2">List of Scanners</span>
                    </Link>
                  </div>
                </li>
              </div>
              {/* New Section */}
              <div className="w-full">
                <div className="flex justify-center mb-4 w-full px-6">
                  <div className="relative w-full">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <SearchSVG />
                    </div>
                    <input
                      className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="border-t border-gray-300">
                  <div className="w-full flex items-center justify-between px-6 pt-1">
                    <div className="flex items-center">
                      <img
                        alt="profile-pic"
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                        className="w-8 h-8 rounded-md"
                      />
                      <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">
                        {/* Jane Doe */}
                      </p>
                    </div>
                    <ul className="flex">
                      <li className="cursor-pointer text-white pt-5 pb-3">
                        <MessagesSvg />
                      </li>
                      <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                        <BellSvg />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        {/* Sidebar ends */}
        <div className="w-full">
          {/* Navigation starts */}
          <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow fixed w-full z-10">
            <div className="hidden lg:flex w-full pr-6">
              <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                <div className="relative w-full">
                  <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                    <SearchSVG />
                  </div>
                  <input
                    className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="w-full hidden lg:flex">
                <div className="w-full flex items-center justify-end">
                  <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                    <Link to={"/profile"} className="flex items-center">
                      <UserSVG />
                      <span className="text-sm ml-2">My Profile</span>
                    </Link>
                  </li>
                  <li className="flex w-full text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                    <div className="flex items-center">
                      <LogoutSvg />
                      <span className="text-sm ml-2">Sign out</span>
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div
              className="text-gray-600 mr-8 visible lg:hidden relative"
              onClick={() => setShow(!show)}
            >
              {show ? " " : <PointerSvg />}
            </div>
          </nav>
          {/* Navigation ends */}
          {/* Remove class [ h-64 ] when adding a card block */}
          {/* MAIN */}
          <div
            className="relative top-16 lg:ml-64 mx-auto container bg-gray-200 lg:max-w-[calc(100%-17rem)] w-screen min-h-[calc(100vh-5rem)]"
            style={{ overflow: show ? "hidden" : "visible" }}
          >
            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
            {/* Place your content here */}
            <div className="pt-5 lg:pl-10 mb-24">
              <div className="bg-white p-10 2xl:p-5">
                <div className="container mx-auto bg-white rounded">
                  <div className="xl:w-full border-b border-gray-300 py-5 bg-white">
                    <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                      <p className="text-lg text-gray-800 font-bold">
                        {pageName}
                      </p>
                      <div className="ml-2 cursor-pointer text-gray-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={16}
                          height={16}
                        >
                          <path
                            className="heroicon-ui"
                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto">
                    {/*Content*/}
                    <Outlet />
                    {/*Content*/}
                  </div>
                </div>
              </div>
            </div>
            {/*Footer*/}
            <footer className="text-center sticky top-full footer p-4 justify-center text-base-content">
              <p>Copyright © 2022 - All right reserved by ArchiMEDOnline</p>
            </footer>
            {/*Footer*/}
          </div>
        </div>
      </div>
    </div>
  );
}
