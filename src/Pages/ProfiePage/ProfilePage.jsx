import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const ProfilePage = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const { user} = useContext(AuthContext)


    const handleUpdateProfile = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email")

        // UserProfileUpdate(email, password)

        updateProfile(user, { displayName: name, photoURL: photo, email : email })
            .then(() => {
                console.log(user)
                navigate(location?.state ? location.state : "/updateprofile")
            }).catch(error => console.log(error))

    }


    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:my-10'>
                <div>
                    <h1 className='text-3xl lg:text-4xl font-bold text-center  my-2 my-5'>User Profile</h1>
                    <div className='lg:bg-slate-200 lg:h-24 lg:rounded-full lg:w-full'>
                        <div className='flex justify-center lg:justify-start'>
                            <img className='rounded-full h-24 w-24' src={user.photoURL} alt="" />
                        </div>
                        <div className='p-4'>
                            <p className='font-bold text-2xl my-2'>Name : {user.displayName} </p>
                            <p>Email : {user.email} </p>
                            <p className='mr-36'>Photo URL : {user.photoURL}</p>
                        </div>
                    </div>
                </div>



                <div className='m-2'>
                    <h1 className='text-4xl my-5 font-bold text-center'>Update Profile</h1>

                    <form onSubmit={handleUpdateProfile} className='space-y-4 border-2 p-4 rounded-2xl'>

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




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;