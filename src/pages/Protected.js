import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("로그인이 필요한 서비스입니다.")
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default Protected;