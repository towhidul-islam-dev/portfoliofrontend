import { useEffect, useState } from "react";
// import "../style/signupStyle.css";
import { Link } from "react-router-dom";
import "../style/signup.css";
import "../style/footer.css";

import Footer from "./Footer";
import FooterCopyright from "./footercopyright";
import UserData from "./userData";
const registerUrl = "http://localhost:3001/api/user/register";
const userUrl = "http://localhost:3001/api/user";
const Signup = () => {
  const [existingUser, setExistingUser] = useState([]);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form");
    if (
      input.firstName &&
      input.lastName &&
      input.userName &&
      input.email &&
      input.password
    ) {
      const id = new Date().getTime().toString();
      const newUser = { ...input };
      setUser([...user, newUser]);
      const response = await fetch(registerUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: input.firstName,
          lastName: input.lastName,
          userName: input.userName,
          email: input.email,
          password: input.password,
        }),
      });

      const resData = await response.json();

      // ! Checking wheather the response is ok or not:::
      if (!response.ok) {
        setError(resData.error);
        setIsLoading(false);
        throw Error("Something wrong with the request");
      }
      if (response.ok) {
        // ? Saving the user to the  DB >>>
        localStorage.setItem("user", JSON.stringify(resData));
        setExistingUser(resData);
      }
    }
    setInput({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
  };
  const showAllUser = async () => {
    const res = await fetch(userUrl);
    const dataOfUser = await res.json();
    // return setExistingUser(dataOfUser);
    return setUser(dataOfUser);
  };

  // ! Remove Item from the DB>>>
  const remove = async (_id) => {
    console.log("Remove Button");
    console.log(_id);
    const res = await fetch(`http://localhost:3000/api/user/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      setError(data.error);
      setIsLoading(false);
      console.log("something wrong with the request");
    }
    if (res.ok) {
      console.log(`Workout deleted successfully  ${data}`);
    }
  };

  useEffect(() => {
    showAllUser();
    console.log(user);
  }, []);

  return (
    <div class="signup_container">
      <section class="form_container">
        <form action="" onSubmit={handleSubmit}>
          <h2 class="form_title">Sing up</h2>
          <div class="input_area">
            <label for="First Name">First Name :</label>
            <input
              type="text"
              name="firstName"
              class="firstName"
              value={input.firstName}
              placeholder="enter first name"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="Last Name">Last Name :</label>
            <input
              type="text"
              class="lastName"
              name="lastName"
              value={input.lastName}
              placeholder="enter last name"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="user Name">User Name :</label>
            <input
              type="text"
              class="userName"
              name="userName"
              value={input.userName}
              placeholder="enter user name"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="email">Email :</label>
            <input
              type="email"
              class="email"
              name="email"
              value={input.email}
              placeholder="enter email"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="password">Password :</label>
            <input
              type="password"
              class="password"
              name="password"
              value={input.password}
              placeholder="enter password"
              onChange={handleChange}
            />
          </div>
          <div class="form_btn-container">
            <button class="btn formBtn" type="submit" onClick={handleSubmit}>
              sign up
            </button>
          </div>
          <p class="signup_text">
            Already have an account ?
            <span>
              <li className="nav_list1">
                <Link className="link1" to="/login">
                  Login
                </Link>
              </li>
              {/* <a target="_blank" href="./login.html">
                login
              </a> */}
            </span>
          </p>
        </form>
      </section>
      <Footer />
      <FooterCopyright />
    </div>
  );
};

export default Signup;
