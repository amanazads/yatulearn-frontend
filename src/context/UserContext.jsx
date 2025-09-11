import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  axios.defaults.withCredentials = true;

  async function registerUser(formData) {
    return await axios.post(`${server}/api/user/register`, formData);
  }

  async function verifyUser(otpData) {
    return await axios.post(`${server}/api/user/verify`, otpData);
  }

  async function loginUser(credentials) {
    const { data } = await axios.post(`${server}/api/user/login`, credentials);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    return data;
  }

  async function fetchProfile() {
    const token = localStorage.getItem("token");
    if (!token) return setUser(null);

    try {
      const { data } = await axios.get(`${server}/api/user/me`, {
        headers: { token },
      });
      setUser(data.user);
    } catch (err) {
      console.error("Profile fetch failed:", err.response?.data?.message);
      setUser(null);
    }
  }

  async function forgotPassword(email) {
    return await axios.post(`${server}/api/user/forgot`, { email });
  }

  async function resetPassword(payload) {
    return await axios.post(`${server}/api/user/reset`, payload);
  }

  async function addProgress(progressData) {
    const token = localStorage.getItem("token");
    return await axios.post(`${server}/api/user/progress`, progressData, {
      headers: { token },
    });
  }

  async function getProgress() {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`${server}/api/user/progress`, {
      headers: { token },
    });
    return data.progress;
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        registerUser,
        verifyUser,
        loginUser,
        fetchProfile,
        forgotPassword,
        resetPassword,
        addProgress,
        getProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
