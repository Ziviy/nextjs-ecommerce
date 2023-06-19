import React from 'react'


const Navbar = () => {
    return (
        <nav>
            <div className='flex space-x-5 justify-between py-5'>
                <div className='left-side flex flex-row gap-5'>
                    <div>Avatar</div>
                    <div>Profile name</div>
                </div>
                <div className=''>Burger</div>
            </div>

        </nav>

    )
}

export default Navbar