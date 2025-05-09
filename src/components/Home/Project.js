import React, { useState } from "react";
import axios from "axios";
import "../../styles/Home/Project.css";

const projects = [
    { id: 1, name: "웹 애플리케이션 프로젝트 1", date: "2025년 5월 1일" },
    { id: 2, name: "웹 애플리케이션 프로젝트 2", date: "2025년 5월 2일" },
    { id: 3, name: "웹 애플리케이션 프로젝트 3", date: "2025년 5월 3일" },
    { id: 4, name: "웹 애플리케이션 프로젝트 4", date: "2025년 5월 4일" },
    { id: 5, name: "웹 애플리케이션 프로젝트 5", date: "2025년 5월 5일" },
];

const Project = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");

    const handleCreateProject = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "http://localhost:8080/v0/api/room/create",
                { title: projectTitle },
                {
                    headers: {
                        access: token,
                        "Content-Type": "application/json",
                    },
                }
            );
            alert("프로젝트가 생성되었습니다!");
            setIsDialogOpen(false);
            setProjectTitle("");
            // 여기서 새로고침 or 프로젝트 목록 갱신 로직 넣으면 됨
        } catch (error) {
            console.error("프로젝트 생성 실패:", error);
            alert("프로젝트 생성에 실패했습니다.");
        }
    };

    return (
        <div className="recent-projects">
            <h2>최근 작업한 프로젝트</h2>
            <div className="project-grid">
                <div className="project-card new-project" onClick={() => setIsDialogOpen(true)}>
                    <div className="new-project-content">
                        <span>+</span>
                        <p>새 프로젝트 만들기</p>
                        <p className="subtext">빈 프로젝트에서 시작하세요</p>
                    </div>
                </div>

                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">{/* 이미지 배경 예시로 처리 가능 */}</div>
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

            {isDialogOpen && (
                <div className="dialog-overlay">
                    <div className="dialog">
                        <h3>새 프로젝트 만들기</h3>
                        <input
                            type="text"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            placeholder="프로젝트 제목을 입력하세요"
                        />
                        <div className="dialog-buttons">
                            <button onClick={handleCreateProject}>만들기</button>
                            <button onClick={() => setIsDialogOpen(false)}>취소</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
