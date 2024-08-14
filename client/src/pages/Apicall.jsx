import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    console.log("u",userCredential)
    const res = await axios.post("api/auth/login", userCredential);
    console.log("login",res)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    console.log("login",res)
  } catch (err) {
    console.log("error")
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};