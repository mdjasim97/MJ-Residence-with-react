import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Component/Header/Header';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { FaGoogle, FaGithub, FaFacebook} from "react-icons/fa";

const SignInPage = () => {

    const { handleUserSignIn} = useContext(AuthContext)
    const navigate = useNavigate()

    // console.log(signInwithGoogle)


    const handleSignInUser = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")


        handleUserSignIn(email, password)
            .then(result => {
                const userSingIn = result.user
                console.log(userSingIn)
                navigate("/")

            })
            .catch(error => console.log(error))
    }

    // const handleSignInwithGoogle = () => {
    //     signInwithGoogle()
    //     .then(result=> console.log(result.user))
    //     .catch(error => console.log(error))
    // }

    return (
        <div>

            <Helmet><title>Login Page | MJ Residential</title></Helmet>

            <div className='bg-base-200 font-poppins py-10'>
                

                <div className='lg:min-h-[700px] flex flex-col lg:justify-center lg:items-center'>
                    <div className='bg-white lg:p-16 lg:rounded-2xl'>
                        <h1 className='text-4xl text-center lg:mx-36 lg:mb-12'>Login</h1>
                        <form onSubmit={handleSignInUser} className='space-y-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address </span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email address" className="input bg-base-200" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input bg-base-200" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>


                        <p className='text-center my-5'>Dont’t Have An  Account ? <Link to="/signup" className="text-blue-600 font-bold">Register</Link></p>
                        {/* {successfull && <p className='text-green-600 font-bold text-center'>{successfull}</p>}
                        {loginError && <p className='text-red-600 font-bold text-center'>{loginError}</p>} */}


                        <div className='bg-base-200 py-4'>

                            <h1 className='text-center mb-4 text-3xl font-semibold'>Login With</h1>
                            <div className='flex justify-center gap-5'>
                                <NavLink><FaGoogle className='text-5xl text-red-500'/></NavLink>
                                <NavLink><FaGithub className='text-5xl'/></NavLink>
                                <NavLink><FaFacebook className='text-5xl text-blue-600'/></NavLink>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SignInPage;