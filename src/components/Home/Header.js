import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Home/Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// base64 디코딩 유틸
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = token ? parseJwt(token) : null;

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="header">
            <div className="header-container">
                {/* 왼쪽 로고 */}
                <Link to="/">
                    <div className="header-logo">
                        <img src="/images/logo.png" alt="CodingTogether" className="logo-image" />
                    </div>
                </Link>

                {/* 가운데 검색창 */}
                <div className="header-search">
                    <div className="search-box">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            className="search-input"
                            type="search"
                            placeholder="프로젝트 또는 팀 검색..."
                        />
                    </div>
                </div>

                {/* 오른쪽 버튼들 */}
                <div className="header-buttons">
                    {token ? (
                        <>
                            <span className="username">안녕하세요, {user?.username || "회원"}님</span>
                            <button className="btn btn-logout" onClick={handleLogout}>
                                로그아웃
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn btn-login">로그인</button>
                            </Link>
                            <Link to="/join">
                                <button className="btn btn-signup">회원가입</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
