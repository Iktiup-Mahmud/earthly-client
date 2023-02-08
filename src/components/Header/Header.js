import { Badge, Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar
            fluid={true}
            // rounded={true}
            className='bg bg-[#D41345] h-24 align-middle'
        >
            <Navbar.Brand>
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
            <Navbar.Collapse className='mr-10'>
                <NavLink to='/home' className='text-white flex items-center'>Home</NavLink>
                <NavLink to='/shop' className='text-white flex items-center'>Shop</NavLink>

                <Link to='/login'>
                    <Button
                        outline={true}
                        gradientDuoTone="redToYellow"
                        pill={true} className='text-white flex items-center'

                    >
                        Login
                    </Button>
                </Link>

                <div className='text-white flex items-center relative'>
                    <p color="warning" className='absolute bottom-7 left-4'>
                        1
                    </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>

                <div>

                </div>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;