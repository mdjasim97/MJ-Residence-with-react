import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/ContextProvider';

const Header = () => {

    const { logOut, user } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>

        {
            user && <>
                <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-200 my-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="font-bold lg:text-3xl">MJ Residence</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mr-2'>

                    </div>

                    {user ? <>
                        <img className='w-12 h-12 mr-4 border-r-slate-600 rounded-full' src={user.photoURL} alt="" title={user.displayName} />
                        <button onClick={handleLogOut} className="btn text-base text-white  bg-[#59C6D2]">LogOut</button>
                    </> : <Link to="/signin"><button to className="btn text-base text-white  bg-[#23BE0A] mr-4">SignIn</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;