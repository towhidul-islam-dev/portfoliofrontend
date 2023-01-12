import React from "react";
import "../style/userStyle.css";

const UserData = ({
  _id,
  firstName,
  lastName,
  userName,
  email,
  user,
  setUser,
}) => {
  const remove = async (_id) => {
    console.log("Remove Button");
    console.log(_id);
    const res = await fetch(`http://localhost:3000/api/user/${_id}`);
    const data = await res.json();
    console.log(data);
    console.log(user);
    if (!res.ok) {
      // setError(data.error);
      // setIsLoading(false);
      console.log(res.error);
    }
    if (res.ok) {
      setUser(data);
    }
  };
  return (
    <div className="userData">
      <div key={_id} className="">
        <p>
          {firstName} {lastName}
        </p>
        <h4>{userName}</h4>
        <p>{email}</p>
        <div>
          <button className="userBtn" onClick={() => remove(_id)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserData;
