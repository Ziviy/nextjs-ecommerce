"use client";

import React from 'react';
import { useState } from 'react';



const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    return (
        <nav className='NAVBAR bg-mainColor mb-5'>
            <div className='flex space-x-5 justify-between py-5'>
                <div className='left-side flex flex-row gap-5'>
                    <div>Avatar</div>
                    <div>Profile name</div>
                </div>
                <div className='BURGER' onClick={changeNav}>
                    <div className="HAMBURGER-ICON space-y-2 hover:scale-110">
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                    </div>
                    <div className="hidden space-x-8 lg:flex">
                        <a href="#">Menu 1</a>
                        <a href="#">Menu 2</a>
                        <a href="#">Menu 3</a>
                        <a href="#">Menu 4</a>
                    </div>
                </div>
            </div>

        </nav>

    )

    function changeNav() {
        isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
        console.log("Hello world");
    }
}




export default Navbar