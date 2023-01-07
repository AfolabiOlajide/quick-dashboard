import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

const Overview = ({ changeActiveState }) => {

    const onChangeActiveState = () => {
        changeActiveState();
    }

    return (
        <div className='mx-[2rem] my-[3rem]'>
            <div className="head"><GiHamburgerMenu className='cursor-pointer' onClick={onChangeActiveState} /></div>
        </div>
    )
}

export default Overview