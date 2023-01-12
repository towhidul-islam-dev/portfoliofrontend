import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "../style/signup.css";
import Footer from "./Footer";
import FooterCopyright from "./footercopyright";

const Login = () => {
  const { login, isLoading, error } = useLogin();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(input.email, input.password);
    setInput({ email: "", password: "" });
  };
  return (
    <>
      <div className="signup_container">
        <section className="form_container">
          <form action="" onSubmit={handleSubmit}>
            <h2 className="form_title">Sing in</h2>
            <div className="input_area">
              <label for="email">Email :</label>
              <input
                type="email"
                className="email"
                name="email"
                value={input.email}
                placeholder="enter email"
                onChange={handleChange}
              />
            </div>
            <div className="input_area">
              <label for="password">Password :</label>
              <input
                type="password"
                className="password"
                name="password"
                value={input.password}
                placeholder="enter password"
                onChange={handleChange}
              />
            </div>
            <div className="form_btn-container">
              <button
                disabled={isLoading}
                className="btn formBtn"
                type="submit"
                onClick={handleSubmit}
              >
                sign in
              </button>
            </div>
            <p className="signup_text">
              Don't have any account ?
              <span>
                <li className="nav_list1">
                  <Link className="link1" to="/signup">
                    sign up
                  </Link>
                </li>
                {/* <a target="_blank" href="./login.html">
                  sign up
                </a> */}
              </span>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        </section>
        <Footer />
        <FooterCopyright />
      </div>
    </>
  );
};

export default Login;
