import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/userProfile">User Profile</NavLink>
          </li>
          <li>
            <NavLink to="/updateProfile">Update Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-[#a02385] text-white py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link className="font-bold lg:text-3xl">
            Living<span className="text-[#36e3f7]">Luxe</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex opacity-100">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2"></div>

          {user ? (
            <>
              <img
                className="w-12 h-12 mr-4 border-r-slate-600 rounded-full"
                src={user.photoURL}
                alt=""
                title={user.displayName}
              />
              <button
                onClick={handleLogOut}
                className="btn text-xl font-semibold px-5  bg-[#36e3f7]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium bg-[#a02385]  border-2 rounded-md  hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-[#36e3f7] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
