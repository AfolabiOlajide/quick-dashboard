import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GoChevronDown } from "react-icons/go";
import { FiLock } from "react-icons/fi";
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from "react-icons/ai";
import { BsPencil, BsPlusLg } from "react-icons/bs";

const Overview = ({ changeActiveState }) => {

    const onChangeActiveState = () => {
        changeActiveState();
    }

    return (
        <div className='mx-[1rem] md:mx-[2rem] my-[3rem]'>
            {/* head */}
            <div className="head flex justify-between items-center">
                <h2 className='text-[1.3rem] md:text-4xl font-bold text-gray-700'>Revenue</h2>
                <div className="profile flex justify-between items-center gap-7">
                    <div className="country text-[.7rem] md:text-lg flex items-center gap-2 md:gap-5 font-bold text-gray-700">Sweden <GoChevronDown /></div>
                    <div className="profile-details flex justify-between items-center gap-5">
                        <div className="img ">
                            <img className='object-cover h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] rounded-full' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="text-[.7rem] md:text-lg name flex items-center gap-2 md:gap-5 font-bold text-gray-700">Nicola Rich <GoChevronDown /></div>
                        <div className="menu block lg:hidden">
                            <GiHamburgerMenu className='cursor-pointer' onClick={onChangeActiveState} />
                        </div>
                    </div>
                </div>
            </div>
            {/* operating revenu */}
            <div className="my-1 shadow-md shadow-slate-200 p-4 rounded-md">
                <h2 className="text-gray-800 text-[1rem] md:text-xl font-bold mb-4">Operating Revenue:</h2>
                <div className="flex flex-col-reverse md:grid md:grid-cols-[80%_18%] gap-4">
                    {/* first */}
                    <div className="">
                        <div className="nav grid grid-cols-[10%_68%_10%] gap-[1.4rem] md:grid-cols-[6%_80%_6%] md:gap-[2.4rem] items-center my-[2rem]">
                            <div className="left shadow-md rounded-lg shadow-slate-300 p-3 md:p-5 text-[1rem] md:text-[1.3rem]"><AiOutlineArrowLeft /></div>
                            <div className="nav-links flex justify-between">
                                <div className="link">
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>2022</p>
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>Q1</p>
                                </div>
                                <div className="link">
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>2022</p>
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>Q2</p>
                                </div>
                                <div className="link">
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>2022</p>
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>Q3</p>
                                </div>
                                <div className="link">
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>2022</p>
                                    <p className='text-center font-bold text-[.7rem] md:text-sm'>Q4</p>
                                </div>
                            </div>
                            <div className="righ shadow-md rounded-lg shadow-slate-300 p-3 md:p-5 text-[1rem] md:text-[1.3rem]"><AiOutlineArrowRight /></div>
                        </div>
                        <div className="cards flex flex-col md:grid md:grid-cols-4 gap-3">
                            <div className="card">
                                <div className="card-details relative bg-green-600 text-white font-bold text-2xl rounded-md shadow-lg shadow-slate-200 p-2 pb-12 mb-2">
                                    <div className="icon absolute top-2 right-2 cursor-pointer text-sm"><FiLock /></div>
                                    <div className="title text-center mb-8">Actual</div>
                                    <div className="rate text-center mb-1">1,100,000</div>
                                    <div className="percent text-center flex justify-center items-center gap-2"><AiOutlineArrowUp /> 10%</div>
                                </div>
                                <div className="update text-slate-500 text-[1rem]">Last Updated by BP: 31/12/21</div>
                            </div>
                            <div className="card">
                                <div className="card-details relative font-bold text-2xl rounded-md shadow-lg shadow-slate-200 p-2 pb-12 mb-2">
                                    <div className="icon absolute top-2 right-2 cursor-pointer text-sm"><BsPencil /></div>
                                    <div className="title text-center mb-8">Actual</div>
                                    <div className="rate text-center mb-1">1,100,000</div>
                                    <div className="percent text-center text-green-500 flex justify-center items-center gap-2"><AiOutlineArrowUp /> 10%</div>
                                </div>
                                <div className="update text-slate-500 text-[1rem]">Last Updated by BP: 31/12/21</div>
                            </div>
                            <div className="card">
                                <div className="card-details relative font-bold text-2xl rounded-md shadow-lg shadow-slate-200 p-2 pb-12 mb-2">
                                    <div className="icon absolute top-2 right-2 cursor-pointer text-sm"><BsPencil /></div>
                                    <div className="title text-center mb-8">Actual</div>
                                    <div className="rate text-center mb-1">1,100,000</div>
                                    <div className="percent text-center text-green-500 flex justify-center items-center gap-2"><AiOutlineArrowUp /> 10%</div>
                                </div>
                                <div className="update text-slate-500 text-[1rem]">Last Updated by BP: 31/12/21</div>
                            </div>
                            <div className="card">
                                <div className="card-details flex items-center justify-center font-bold text-2xl rounded-md shadow-lg shadow-slate-200 py-[4rem] mb-2">
                                    <div className="flex flex-col items-center justify-center text-slate-400">
                                        <BsPlusLg />
                                        <p>Forecast</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className="">
                        <div className="total py-[3rem]">
                            <h2 className='text-4xl font-bold text-center'>Total</h2>
                        </div>
                        <div className="">
                            <div className="card-details relative bg-rose-500 text-white font-bold text-2xl rounded-md shadow-lg shadow-slate-200 py-12">
                                <div className="rate text-center mb-1">3,300,000</div>
                                <div className="percent text-center flex justify-center items-center gap-2"><AiOutlineArrowDown /> -17.5%</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* history */}
                <div className="mt-3">
                    <div className="head text-gray-800 text-[1rem] md:text-xl font-bold mb-4">Last Year</div>
                    <div className="lists grid grid-cols-3 md:grid-cols-5 gap-5">
                        <div className="item bg-gray-700 text-white font-bold p-3 text-center rounded-md">1,000,000</div>
                        <div className="item bg-gray-700 text-white font-bold p-3 text-center rounded-md">1,000,000</div>
                        <div className="item bg-gray-700 text-white font-bold p-3 text-center rounded-md">1,000,000</div>
                        <div className="item bg-gray-700 text-white font-bold p-3 text-center rounded-md">1,000,000</div>
                        <div className="item bg-gray-700 text-white font-bold p-3 text-center rounded-md">4,000,000</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Overview

// <GiHamburgerMenu className='cursor-pointer' onClick={onChangeActiveState} />