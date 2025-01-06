import axios from "axios";

// API URLs
const userAPIurl = import.meta.env.VITE_API_USER_API_URL;
const courseAPIurl = import.meta.env.VITE_API_COURSE_API_URL;
const enrollmentAPIurl = import.meta.env.VITE_API_ENROLLMENT_API_URL;

// User-related functions

// Register user function
export const registerUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(`${userAPIurl}/signup`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Login user function
export const loginUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(`${userAPIurl}/login`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch profile function
export const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.get(`${userAPIurl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

//Verify user function
export const verifyUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.post(`${userAPIurl}/verify`, { token });

    return response.data;
  } catch (error) {
    console.error("Error verifying user:", error);
    throw error;
  }
};

// Course-related functions
export const fetchCourses = async () => {
  try {
    const response = await axios.get(courseAPIurl);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Enrollment function
export const enrollUserInCourse = async (courseId) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    enrollmentAPIurl,
    {
      courseId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
