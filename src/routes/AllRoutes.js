import { Routes,Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { CreatePost,PageNotFound,HomePage } from "../pages";

const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path = "/" element={<HomePage/>}  />
            <Route path = "create" element={<ProtectedRoutes><CreatePost/></ProtectedRoutes>}  />
            <Route path = "*" element={<PageNotFound/>}  />
        </Routes>
    </main>
  )
}

export default AllRoutes
