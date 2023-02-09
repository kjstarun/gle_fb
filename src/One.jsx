import { useContext, useEffect } from "react";
import { userProfileContext } from "./Context/userProfileContext.jsx";
import { useNavigate } from "react-router-dom";

const One = () => {
  const navigate = useNavigate();
  const { isAuthDone, userProfile } = useContext(userProfileContext);

  useEffect(() => {
    if (!isAuthDone) {
      alert("Click ok to redirect to Login page");
      navigate("/");
    }
  }, []);

  console.log("@A", userProfile);

  return (
    <>
      <h1>User Details</h1>
      <img src={userProfile.photoURL}></img>
      <p>{userProfile.displayName}</p>
      <p>{userProfile.email}</p>
      {console.log(isAuthDone)}
    </>
  );
};
export default One;
