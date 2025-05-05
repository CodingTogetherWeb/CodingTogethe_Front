import React, { useState } from "react";
import "../styles/Login/Login.css";

const Login = () => {
  const [username, setname] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const validateEmail = (username) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { username: "", password: "" };

    if (!username) {
      newErrors.username = "이메일을 입력해주세요";
    } else if (!validateEmail(username)) {
      newErrors.username = "유효한 이메일 주소를 입력해주세요";
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요";
    }

    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      try {
        setLoading(true);
        console.log("보내는 데이터:", JSON.stringify({ username, password }));
        const response = await fetch("http://localhost:8080/v0/api/jwt/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        window.location.href = "/";
        alert("환영합니다.");
      } catch (error) {
        console.error("로그인 실패:", error);
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="text-center">
          <h2 className="title">로그인</h2>
          <p className="subtitle">서비스 이용을 위해 로그인해주세요</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">이메일</label>
            <input
              id="login-email"
              type="email"
              value={username}
              onChange={(e) => setname(e.target.value)}
              className={errors.username ? "input error" : "input"}
              placeholder="이메일을 입력해주세요"
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="login-password">비밀번호</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "input error" : "input"}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.password && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <div className="text-center">
          <p className="footer-text">
            계정이 없으신가요? <span className="link">회원가입</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
