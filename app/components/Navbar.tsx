"use client";

import React from 'react';
import { useState } from 'react';



const Navbar = () => {

    function changeNav() {
        isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
    }

    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    return (
        <nav className='NAVBAR bg-mainColor lg:mb-5 md:mb-3'>
            <div className='CONTAINER flex space-x-5 justify-between lg:py-5 md:py-2'>
                <div className='left-side flex flex-row gap-5 justify-center items-center'>
                        <span className="material-icons" style={{ fontSize: 48, color: "#f1d4ff"}}>
                            account_circle
                        </span>
                    <div style={{color: "#f1d4ff"}}>Profile name</div>
                </div>
                <div className='flex flex-row items-center'>
                    {isNavOpen && <div className="hidden space-x-8 lg:flex mr-5">
                        <a href="#" className="text-backgroundColor">Menu 1</a>
                        <a href="#" className="text-backgroundColor">Menu 2</a>
                        <a href="#" className="text-backgroundColor">Menu 3</a>
                        <a href="#" className="text-backgroundColor">Menu 4</a>
                    </div>}
                    <div className='BURGER space-y-2 hover:scale-110 my-auto items-center' onClick={changeNav}>
                        <div className="w-8 h-1 bg-backgroundColor"></div>
                        <div className="w-8 h-1 bg-backgroundColor"></div>
                        <div className="w-8 h-1 bg-backgroundColor"></div>
                    </div>
                </div>

            </div>
        </nav>

    )


}




export default Navbar