import { Route, Routes } from "react-router-dom";
import { RoueURL } from "./RoueURL";
import HomePage from "../Pages/HomePage/HomePage";

const Navigation = () => {
    return (
        <Routes>
            <Route path={RoueURL.home} element={<HomePage />} />
        </Routes>
    )
}

export default Navigation;