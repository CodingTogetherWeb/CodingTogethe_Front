import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Header.css";

//npm install --save @fortawesome/fontawesome-free
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
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
                    <button className="btn btn-login">로그인</button>
                    <button className="btn btn-signup">회원가입</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
