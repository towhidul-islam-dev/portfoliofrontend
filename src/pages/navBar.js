import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import "../style/userStyle.css";
import "../style/container.css";
import "../style/navbarStyle.css";
import Logo from "../assets/webexplainerLogo.svg";
import { FaBars, FaCross } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import { HiBars3CenterLeft } from "react-icons/hi";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const navBar = useRef(null);
  const [width, setWidth] = useState(0);
  const [mobIcon, setMobIcon] = useState(true);
  const currentUser = localStorage.getItem("user");

  // ! Change Icon of Mobile display:::
  const changeIcon = (e) => {
    e.preventDefault();
    setMobIcon(!mobIcon);
  };

  // !! Logout Button functionality:::
  const logoutUser = (e) => {
    e.preventDefault();
    logout();
  };

  useEffect(() => {
    const height = navBar.current.getBoundingClientRect().height;
    console.log(height);
  }, []);
  useEffect(() => {
    const calcSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", calcSize);

    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, [width]);

  return (
    <div className="main_nav" ref={navBar}>
      {/* <h2>{width}px</h2> */}
      <div
        className="nav_container  container"
        style={{ paddingBlock: "unset" }}
      >
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        {width <= 610 ? (
          <div className="mobile_link">
            <button className="mobile_btn">
              <li onClick={changeIcon} className="mobIcon">
                {mobIcon ? (
                  <FaBars className="bars" />
                ) : (
                  <GiCrossedBones className="cross" />
                )}
              </li>
            </button>
          </div>
        ) : (
          <nav className="desktop_nav">
            <ul className="nav_links">
              <li className="nav_list">
                <Link className="link" to="/">
                  Homepage
                </Link>
              </li>
              <li className="nav_list">
                <Link className="link" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav_list">
                <Link className="link" to="/allskills">
                  Skills
                </Link>
              </li>
              <div className="register">
                {currentUser ? (
                  <li className="nav_list">
                    <button
                      onClick={logoutUser}
                      className="link logout_btn desk_logout"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <div className="register_link">
                    <li className="nav_list">
                      <Link className="link" to="/signup">
                        signup
                      </Link>
                    </li>
                    <li className="nav_list">
                      <Link className="link" to="/login">
                        Login
                      </Link>
                    </li>
                    
                  </div>
                )}
              </div>
              
            </ul>
          </nav>
        )}
        <div
          className={mobIcon ? "mobile_nav" : "mobile_nav mobile_nav-active"}
        >
          <ul className="nav_links1">
            <li className="nav_list1">
              <Link className="link1" to="/">
                Homepage
              </Link>
            </li>
            <li className="nav_list1">
              <Link className="link1" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav_list">
                <Link className="link" to="/allskills">
                  Skills
                </Link>
              </li>
            <div>
              {currentUser ? (
                <li className="nav_list1">
                  <button onClick={logoutUser}>Logout</button>
                </li>
              ) : (
                <div>
                  <li className="nav_list1">
                    <Link className="link1" to="/signup">
                      signup
                    </Link>
                  </li>
                  <li className="nav_list1">
                    <Link className="link1" to="/login">
                      Login
                    </Link>
                  </li>
                </div>
              )}
            </div>
            
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
