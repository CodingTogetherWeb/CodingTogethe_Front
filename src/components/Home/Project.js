import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Home/Project.css";

const Project = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");
    const [projects, setProjects] = useState([]);

    // 프로젝트 목록 불러오기
    const fetchProjects = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/v0/api/room/my-rooms", {
                headers: {
                    access: token,
                },
            });
            setProjects(response.data);
        } catch (error) {
            console.error("방 목록 불러오기 실패:", error);
        }
    };

    // 프로젝트 생성
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
            fetchProjects();
        } catch (error) {
            console.error("프로젝트 생성 실패:", error);
            alert("프로젝트 생성에 실패했습니다.");
        }
    };

    // 컴포넌트 로드시 방 목록 조회
    useEffect(() => {
        fetchProjects();
    }, []);

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
                            <h3>{project.title}</h3>
                            <p>
                                Last :{" "}
                                {new Date(project.modifiedAt).toLocaleString("ko-KR", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
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
