import {
    createBrowserRouter
} from "react-router-dom";
import Authentification from "../pages/authentification/authentification";
import ForgotPassword from "../pages/authentification/forgotPassword/forgotPassword";
import ResetPassword from "../pages/authentification/resetPassword/resetPassword";
import SignIn from "../pages/authentification/signIn/signIn";
import SignUp from "../pages/authentification/signUp/signUp";
import { Paths } from "./routes/path";

const router = createBrowserRouter([
    {
        path: Paths.AUTH,
        element: <Authentification />,
        children: [
            {
                path: Paths.SIGNIN,
                element: <SignIn />
            },
            {
                path: Paths.SIGNUP,
                element: <SignUp />
            },
            {
                path: Paths.FORGOTPASSWORD,
                element: <ForgotPassword />
            },
            {
                path: Paths.RESETPASSWORD,
                element: <ResetPassword />
            }
        ]
    }
])

export default router;