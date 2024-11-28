import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

const SignInPage = () => {
  const {
    handleUserSignIn,
    signInwithGoogle,
    signInwithGithub,
    signInwithFacebook,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(" ");

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    handleUserSignIn(email, password)
      .then((result) => {
        const userSingIn = result.user;
        console.log(userSingIn);
        alert("User SignIn successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrorMessage(error);
        
      });
  };

  const handleSignInwithGoogle = () => {
    signInwithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("User SignIn successfull.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => alert(error, "Somethin is Worng... try later"));
  };

  const handleSignInwithGithub = () => {
    signInwithGithub()
      .then((result) => {
        console.log(result.user);
        alert("User SignIn successfull.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        alert(error, "Somethin is Worng... try later");
      });
  };

  const handleSignInWithFacebook = () => {
    signInwithFacebook()
      .then((result) => {
        console.log(result.user);
        alert("User SignIn successfull.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="lg:my-20 m-2">
      <Helmet>
        <title>Login Page | MJ Residential</title>
      </Helmet>

      <div className="bg-base-200 font-poppins py-10">
        <div className="lg:min-h-[700px] flex flex-col lg:justify-center lg:items-center">
          <div className="bg-white lg:p-16 lg:rounded-2xl">
            <h1 className="text-4xl text-center lg:mx-36 lg:mb-12">Login</h1>
            <form onSubmit={handleSignInUser} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input bg-base-200"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input bg-base-200 w-full "
                    required
                  />

                  <span
                    onClick={handlePasswordShow}
                    className="absolute top-4 right-4"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

                <p className="text-red-600">{errorMessage}</p>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#23BE0A] text-white">Login</button>
              </div>
            </form>

            <p className="text-center my-5">
              Dont’t Have An Account ?{" "}
              <Link to="/signup" className="text-blue-600 font-bold">
                Register
              </Link>
            </p>

            <h1 className="text-center mb-4 text-3xl font-semibold">
              Login With
            </h1>
            <div className="flex justify-center gap-2">
              <button
                onClick={handleSignInwithGoogle}
                className="btn bg-[#23BE0A] text-white font-bold text-xl"
              >
                <FaGoogle /> Google
              </button>
              <button
                onClick={handleSignInwithGithub}
                className="btn bg-[#474747] text-white font-bold text-xl"
              >
                <FaGithub /> Github
              </button>
              <button
                onClick={handleSignInWithFacebook}
                className="btn bg-[#3a72c7] text-white font-bold text-xl"
              >
                <FaFacebook /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
