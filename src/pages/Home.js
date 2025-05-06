import React from "react";
import Header from "../components/Home/Header";
import Project from "../components/Home/Project";
import Sidebar from "../components/Home/Sidebar";
import "../styles/Home/Home.css";

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <div className="home-content">
                <Sidebar />
                <Project />
            </div>
        </div>
    );
};

export default Home;
