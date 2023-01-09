import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GoChevronDown } from "react-icons/go";

const Overview = ({ changeActiveState }) => {

    const onChangeActiveState = () => {
        changeActiveState();
    }

    return (
        <div className='mx-[1rem] md:mx-[2rem] my-[3rem]'>
            <div className="head flex justify-between items-center">
                <h2 className='text-[1.3rem] md:text-4xl font-bold text-gray-700'>Revenue</h2>
                <div className="profile flex justify-between items-center gap-7">
                    <div className="country text-[.7rem] md:text-lg flex items-center gap-2 md:gap-5 font-bold text-gray-700">Sweden <GoChevronDown /></div>
                    <div className="profile-details flex justify-between items-center gap-5">
                        <div className="img ">
                            <img className='object-cover h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] rounded-full' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="text-[.7rem] md:text-lg name flex items-center gap-2 md:gap-5 font-bold text-gray-700">Nicola Rich <GoChevronDown /></div>
                        <div className="menu block md:hidden">
                            <GiHamburgerMenu className='cursor-pointer' onClick={onChangeActiveState} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview

// <GiHamburgerMenu className='cursor-pointer' onClick={onChangeActiveState} />