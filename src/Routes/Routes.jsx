import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import Root from "../Component/Root/Root";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import ProfilePage from "../Pages/ProfiePage/ProfilePage";

const route = createBrowserRouter([
    {
    path: "/",
    element : <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
        {
            path : "/",
            element : <HomePage></HomePage>
        },

        {
            path : "/signin",
            element : <SignInPage></SignInPage>
        },

        {
            path : "/signup",
            element : <SignUpPage></SignUpPage>
        },

        {
            path : "/details/:id",
            element :<PrivateRoutes><DetailsPage></DetailsPage></PrivateRoutes> ,
            loader : ()=> fetch("estate.json")
        },
        {
            path : "/updateprofile",
            element : <PrivateRoutes><ProfilePage></ProfilePage></PrivateRoutes>
        }
    ]
}
])

export default route