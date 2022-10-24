import React, { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
import ImageBalise from "../home/ImageBalise";

export default function Profile() {
    const [agentId, setagentId] = useState();
    const [roleAgent, setRoleAgent] = useState(String);


    const [DoctorId, setDoctorId] = useState();
    const [specialty, setSpecialty] = useState(String);
    const [headofDepartment, setHeadofDepartment] = useState(false);



    //Comons
    const [fisrtName, setFisrtName] = useState(String);
    const [lastName, setLastName] = useState(String);
    const [gender, setGender] = useState(String);
    const [birthday, setBirthday] = useState(String);
    const [cin, setCIN] = useState(0);
    const [adress, setAdress] = useState(String);
    const [city, setCity] = useState(String);
    const [country, setCountry] = useState(String);
    const [postalCode, setPostalCode] = useState(0);
    const [phone, setPhone] = useState(String);
    const [pwd, setPwd] = useState(String);
    const [PublicId, setPublicId] = useState("Empty");

    //response login 
    const [email, setEmail] = useState(String);
    const [role, setRole] = useState(String);

    const fetchUser = async (r: string, i: number) => {
        await axios.get(`${r}/${i}`)
            .then((res) => {
                setFisrtName(res.data.fisrtName);
                setLastName(res.data.lastName);
                setGender(res.data.gender);
                setBirthday(res.data.birthday);
                setCIN(res.data.cin);
                setAdress(res.data.address);
                setCity(res.data.city);
                setCountry(res.data.country);
                setPostalCode(res.data.postalCode);
                setPhone(res.data.phone);
                setPublicId(res.data.imageUrl);
                setEmail(res.data.email);
                if (role == "Doctor") {
                    setDoctorId(res.data.id),
                    setSpecialty(res.data.specialty);
                    setHeadofDepartment(res.data.headofDepartment);
                    setdepartmentId(res.data.departmentFk);
                }
                if (role == "Agent") {
                    setagentId(res.data.id);
                    setRoleAgent(res.data.role);
                }
                if (role == "Patient") {
                    setagentId(res.data.id);
                }

            }).catch((err) => {
                console.log(err);
            })
    }
    
    useEffect(() => {
        fetchUser(localStorage.getItem('role').substring(1, localStorage.getItem('role').length - 1), localStorage.getItem('userId'));
        setRole(localStorage.getItem('role').substring(1, localStorage.getItem('role').length - 1));
    }, [])
    return (
        <div>
            <div className="bg-white  p-10 2xl:p-5">
                <div className="flex-row items-center justify-center mb-4">
                    <div className="flex justify-center items-center">
                        {PublicId == "Empty" ?
                            <img src="src/assets/upload.svg" alt="upload" className="h-[100px] w-[100px]" />
                            :
                            <div className="max-h-auto max-w-[120px] mb-2"><ImageBalise image={PublicId} /></div>
                        }
                    </div>
                </div>
                <div className="container mx-auto bg-white  mt-10 rounded px-4">
                    <div className="xl:w-full border-b border-gray-300  py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800  font-bold">Personal Information</p>
                            <div className="ml-2 cursor-pointer text-gray-600 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                        <form>
                            <div className="flex items-center space-x-9 mt-2">
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{fisrtName}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{lastName}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{gender}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{birthday}</h2>
                            </div>
                            <div className="flex text-center items-center space-x-9 mt-8">
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{cin}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{phone}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{email}</h2>
                            </div>
                            <div className="flex text-center items-center space-x-9 mt-8">
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{adress}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{postalCode}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{city}</h2>
                                <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">{country}</h2>
                            </div>
                            {role == "Doctor" && (
                                <div className="flex text-center items-center space-x-9 mt-8">
                                    <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">Speciality :  {specialty}</h2>
                                    <h2 className="w-1/2 text-center focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">Head of department :  {headofDepartment ? "Yes" : "No"}</h2>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};