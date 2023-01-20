import {
    createBrowserRouter
} from "react-router-dom";
import Authentification from "../pages/authentification/authentification";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Authentification />
    }
])

export default router;