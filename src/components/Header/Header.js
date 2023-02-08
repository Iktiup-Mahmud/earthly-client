import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar
            fluid={true}
            // rounded={true}
            className='bg bg-[#D41345] h-20'
        >
            <Navbar.Brand
                to="/google.com"
            >
                <img
                    src="https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_99,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png"
                    className="mr-3 h-16 sm:h-16 lg:ml-10 md:ml-5"
                    alt="earthly logo"
                />
                <div className='text-left lg:ml-10 md:ml-5'>
                    <p className="self-center whitespace-nowrap text-3xl font-semibold text-white">
                        earthly
                    </p>
                    <span className='hidden lg:inline text-white'>
                        Sustainable products at affordable prices
                    </span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;