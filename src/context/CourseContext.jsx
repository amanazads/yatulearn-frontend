import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);   // ✅ all courses
  const [course, setCourse] = useState(null);   // ✅ single course
  const [mycourse, setMyCourse] = useState([]); // ✅ enrolled courses

  // 🔧 set default axios config once
  axios.defaults.withCredentials = true;

  // ✅ fetch all courses
  async function fetchCourses() {
    try {
      const { data } = await axios.get(`${server}/api/course/all`);
      setCourses(data.courses || []);
    } catch (error) {
      console.error("❌ Failed to fetch courses:", error.response?.data?.message || error.message);
      setCourses([]);
    }
  }

  // ✅ fetch single course detail
  async function fetchCourse(id) {
    if (!id) return;
    try {
      const { data } = await axios.get(`${server}/api/course/${id}`);
      setCourse(data.course || null);
    } catch (error) {
      console.error("❌ Failed to fetch course:", error.response?.data?.message || error.message);
      setCourse(null);
    }
  }

  // ✅ fetch my enrolled courses
  async function fetchMyCourse() {
    const token = localStorage.getItem("token");
    if (!token) {
      setMyCourse([]);
      return;
    }

    try {
      const { data } = await axios.get(`${server}/api/course/mycourse`, {
        headers: { token },
      });
      setMyCourse(data.courses || []);
    } catch (error) {
      console.error("❌ Failed to fetch my courses:", error.response?.data?.message || error.message);
      setMyCourse([]);
    }
  }

  useEffect(() => {
    fetchCourses();
    fetchMyCourse();
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        course,
        mycourse,
        fetchCourses,
        fetchCourse,
        fetchMyCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const CourseData = () => useContext(CourseContext);
