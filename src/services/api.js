import axios from 'axios';

const USER_API_URL = 'http://localhost:5000/api/users';
const COURSE_API_URL = 'http://localhost:5000/api/courses';
const ENROLLMENT_API_URL = 'http://localhost:5000/api/enrollments';



export const registerUser = async (userData) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${USER_API_URL}/signup`, userData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (userData) => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await axios.post(`${USER_API_URL}/login`, userData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
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

// Fetch profile function
export const fetchProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const response = await axios.get(`${USER_API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

// Enrollment function
export const enrollUserInCourse = async (courseId) => {
  const token = localStorage.getItem('token');  
  
  const response = await axios.post(ENROLLMENT_API_URL, {
      courseId,
    }, {
      "headers": {
        "Authorization": `Bearer ${token}`,
      },
    });

    return response;
};

//Verify user function
export const verifyUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const response = await axios.post(`${USER_API_URL}/verify`, { token });
    
    return response.data;
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
};