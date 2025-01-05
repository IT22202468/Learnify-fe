import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCourses } from "../services/api";
import Navbar from "./Navbar";
import { enrollUserInCourse } from "../services/api";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const courses = await fetchCourses();
        const selectedCourse = courses.find(
          (course) => course.Id === parseInt(id)
        );
        setCourse(selectedCourse);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleEnroll = async () => {
    try {
      const result = await enrollUserInCourse(course.Id);

      if (result.status === 204) {
        return alert("You are already enrolled in this course");
      } else if (result.status === 201) {
        alert("User enrolled successfully");
      } 
      navigate("/profile");
    } catch (error) {
      // console.log(error.status);
      if (error.status === 403) {
        alert("Please login to enroll in a course");
        navigate("/login");
       }
      console.error("Error enrolling user:", error);
    }
  };

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <h1 className="mb-8 text-3xl font-bold text-primary-900 text-start">
        {course.Name}
      </h1>
      <div className="container flex flex-row px-4 py-8 mx-auto space-x-10">
        <img
          src={course.Thumbnail}
          alt={course.Name}
          className="object-cover w-full h-64 mb-6 rounded-lg"
        />
        <div className="flex flex-col space-y-4">
          <p className="mb-4 text-lg text-gray-600">{course.Description}</p>
          <p className="text-xl font-semibold text-primary-700">
            ${course.Price} - {course.Duration} hours
          </p>
          <button
            className="p-4 text-white rounded-md shadow-sm bg-primary-500 "
            onClick={handleEnroll}
          >
            Enroll now
          </button>
        </div>
      </div>
    </>
  );
};
export default CourseDetails;
