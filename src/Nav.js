import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { TbArrowsRightLeft } from "react-icons/tb";
import { RiWalletFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";


const Nav = () => {
    return (
        <div className='bg-slate-200 fixed top-0 left-0 bottom-0 w-[50vw] md:relative md:w-[100%]'>
            <div className="head p-12">
                <h2 className='text-2xl text-gray-800 font-bold'>Business Plan</h2>
            </div>
            <div className="menu-list">
                <div className="menu pl-[3rem] p-3 hover:pl-[4.5rem] transition-all duration-700 ease-in-out cursor-pointer border-l-[.3rem] text-gray-900 border-gray-800">
                    <h3 className='flex gap-6 items-center text-[1.3rem]'><AiFillHome /> Overview</h3>
                </div>
                <div className="menu pl-[3rem] p-3 text-slate-600 hover:pl-[4.5rem] transition-all duration-700 ease-in-out cursor-pointer">
                    <h3 className='flex gap-6 items-center text-[1.3rem]'><TiArrowBack /> Revenue</h3>
                </div>
                <div className="menu pl-[3rem] p-3 text-slate-600 hover:pl-[4.5rem] transition-all duration-700 ease-in-out cursor-pointer">
                    <h3 className='flex gap-6 items-center text-[1.3rem]'><TbArrowsRightLeft /> Costs</h3>
                </div>
                <div className="menu pl-[3rem] p-3 text-slate-600 hover:pl-[4.5rem] transition-all duration-700 ease-in-out cursor-pointer">
                    <h3 className='flex gap-6 items-center text-[1.3rem]'><RiWalletFill /> Services</h3>
                </div>
                <div className="menu pl-[3rem] p-3 text-slate-600 hover:pl-[4.5rem] transition-all duration-700 ease-in-out cursor-pointer">
                    <h3 className='flex gap-6 items-center text-[1.3rem]'><FaChartLine /> New Sales</h3>
                </div>
                <div className="menu pl-[3rem] p-3 text-slate-600 hover:pl-[4.5rem] transition-all duration-700 ease-in-out cursor-pointer">
                    <h3 className='flex gap-6 items-center text-[1.3rem]'><IoIosNotifications /> Notifications</h3>
                </div>
            </div>
        </div>
    )
}

export default Nav