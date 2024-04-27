import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Component/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {

    const { handleUserRegister } = useContext(AuthContext)
    const navigate = useNavigate()


    const [errorMessage, setErrorMessage] = useState(" ")
    const [successfull, setSuccessfull] = useState(" ")
    const [terms, setTerms] = useState(false)
    const [showPassword, setShowPassword] = useState(false)




    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        const Accepted = e.target.terms.checked
        // console.log(name, email, photo, password)

        setErrorMessage(" ")


        if (!Accepted) {
            setErrorMessage("Please accept terms and condition");
            return
        }


        if (password.length < 6) {
            setErrorMessage("Must be at least 6 character password");
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage("Must be at least 1 character Uppercase in password");
            return
        }

        else if (!/[a-z]/.test(password)) {
            setErrorMessage("Must be at least 1 character lowercase in password");
            return
        }


        handleUserRegister(email, password)
            .then(result => {
                const userProfile = result.user
                // console.log(userProfile)
                setSuccessfull("Profile Create Successfull.")
                toast("Profiel Create Successfull.")
                navigate("/signin")

                updateProfile(result.user, { displayName: name, photoURL: photo })
                    .then(() => {
                        // console.log(result.user)
                    })
            })
            .catch((error) => {
                // console.log(error.message)
                setErrorMessage(error.message)
            })
    }


    const handlePasswordShow = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='bg-base-200 p-2'>
            <Helmet><title>SignUp Page | MJ Residential </title></Helmet>
            <ToastContainer/>


            <div className='flex flex-col lg:justify-center lg:items-center lg:py-16'>
                <div className='bg-white p-4 lg:p-16 rounded-2xl'>
                    <h1 className='text-4xl text-center lg:mx-36 mt-5 '> Register </h1>
                    <form onSubmit={handleRegister} className='space-y-4'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your Name" className="input bg-base-200" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL </span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input bg-base-200" required />
                        </div>

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
                            <div className='relative'>
                                <input type={showPassword? "text" : "password"} name='password' placeholder="Enter your password" className="input bg-base-200 w-full" required />
                                <span className='absolute right-3 top-4'>
                                    {showPassword ? <FaEyeSlash onClick={handlePasswordShow} /> : <FaEye onClick={handlePasswordShow} />}
                                </span>
                            </div>
                        </div>


                        <div className="flex">
                            <input type="checkbox" name='terms' className='mr-2' />

                            <span className="label-text">Please accept our <Link className='text-blue-500'>terms and condition</Link> </span>

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-[#23BE0A] text-white">Register</button>
                        </div>
                    </form>
                    <p className='text-center my-5'>Already have An Account ? <Link to="/signin" className="text-blue-600 font-bold">Login</Link></p>

                    {errorMessage && <p className='text-red-600 font-bold text-center'>{errorMessage}</p>}
                    {/* {successfull && <p className='text-green-600 font-bold text-center'>{successfull}</p>} */}
                </div>


            </div>
        </div>
    );
};

export default SignUpPage;