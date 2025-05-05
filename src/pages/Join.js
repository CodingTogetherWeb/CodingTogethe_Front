import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Join/Join.css";

const Join = () => {
    const [UserEmail, setEmail] = useState("");
    const [UserName, setName] = useState("");
    const [UserPassword, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/v0/api/jwt/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userEmail: UserEmail,
                    userName: UserName,
                    userPassword: UserPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || "회원가입이 완료되었습니다!");
                window.location.href = "/";
            } else {
                alert("회원가입 실패: " + (data.message || "알 수 없는 오류"));
            }
        } catch (error) {
            alert("네트워크 오류 발생");
        }
    };

    const handleGoogleLogin = () => {
        console.log("구글 로그인 클릭");
    };

    const handleKakaoLogin = () => {
        console.log("카카오 로그인 클릭");
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>회원가입</h2>
                <p>서비스 이용을 위한 회원가입을 진행해주세요</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>이메일</label>
                        <input
                            type="email"
                            value={UserEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="이메일을 입력해주세요"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>이름</label>
                        <input
                            type="text"
                            value={UserName}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="이름을 입력해주세요"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            value={UserPassword}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력해주세요"
                            required
                        />
                    </div>

                    <button type="submit" className="signup-button">
                        가입하기
                    </button>
                </form>

                <div className="sns-buttons">
                    <button className="google-button" onClick={handleGoogleLogin}>
                        Google로 가입하기
                    </button>
                    <button className="kakao-button" onClick={handleKakaoLogin}>
                        Kakao로 가입하기
                    </button>
                </div>

                <p className="login-link">
                    이미 계정이 있으신가요? <Link to="/login">로그인</Link>
                </p>
            </div>
        </div>
    );
};

export default Join;
