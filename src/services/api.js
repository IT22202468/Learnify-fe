import axios from 'axios';

const USER_API_URL = 'http://localhost:5000/api/users';
const COURSE_API_URL = 'http://localhost:5000/api/courses';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${USER_API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${USER_API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  // Course-related functions
export const fetchCourses = async () => {
  try {
    const response = await axios.get(COURSE_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};