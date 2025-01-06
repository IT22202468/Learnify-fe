import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { fetchCourses } from "../services/api";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    getCourses();
  }, []);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-primary-900 text-start">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.Id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
