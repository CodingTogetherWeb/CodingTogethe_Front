import React from "react";
import "../../styles/Home/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>사이드바</h2>
            <div className="sidebar-section">
                <h3>내 팀</h3>
                <ul>
                    <li>개발팀 1</li>
                    <li>개발팀 2</li>
                    <li>개발팀 3</li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>즐겨찾기</h3>
                <ul>
                    <li>즐겨찾는 프로젝트 1</li>
                    <li>즐겨찾는 프로젝트 2</li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>최근</h3>
                <ul>
                    <li>최근 프로젝트 1</li>
                    <li>최근 프로젝트 2</li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>추가 메뉴</h3>
                <ul>
                    <li>내 프로젝트</li>
                    <li>초대받은 항목</li>
                    <li>팀 관리</li>
                    <li>공지사항</li>
                    <li>내 설정</li>
                    <li>활동 로그</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
