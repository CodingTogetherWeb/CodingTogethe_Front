import React from "react";
import "../../styles/Home/Project.css";

const projects = [
    { id: 1, name: "웹 애플리케이션 프로젝트 1", date: "2025년 5월 1일" },
    { id: 2, name: "웹 애플리케이션 프로젝트 2", date: "2025년 5월 2일" },
    { id: 3, name: "웹 애플리케이션 프로젝트 3", date: "2025년 5월 3일" },
    { id: 4, name: "웹 애플리케이션 프로젝트 4", date: "2025년 5월 4일" },
    { id: 5, name: "웹 애플리케이션 프로젝트 5", date: "2025년 5월 5일" }
];

const Project = () => {
    return (
        <div className="recent-projects">
            <h2>최근 작업한 프로젝트</h2>
            <div className="project-grid">
                <div className="project-card new-project">
                    <div className="new-project-content">
                        <span>+</span>
                        <p>새 프로젝트 만들기</p>
                        <p className="subtext">빈 프로젝트에서 시작하세요</p>
                    </div>
                </div>

                
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            {/* 코드 이미지 자리 (이미지는 예시로 background로 넣으세요) */}
                        </div>
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>마지막 수정: {project.date}</p>
                            <div className="project-meta">
                                <span>React</span>
                                <span>12 파일</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
