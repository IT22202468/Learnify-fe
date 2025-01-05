import { useEffect, useState } from "react";
import { fetchProfile } from "../services/api";
import Navbar from "./Navbar";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
      } catch (err) {
        setError("Failed to load profile.");
        console.error(err);
      }
    };

    getProfile();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container flex flex-col max-w-4xl px-6 py-10 mx-auto bg-white shadow-2xl rounded-xl">
        {error && <p className="text-center text-red-500">{error}</p>}
        {profile.length > 0 ? (
          <>
            <h1 className="mb-8 text-4xl font-semibold text-center text-primary-900">
              Welcome, {profile[0].Fullname}
            </h1>
            <h2 className="mx-4 text-2xl font-semibold text-start text-primary-700">
              Your Courses
            </h2>
            <div className="mt-6 space-y-6">
              {profile.map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-lg shadow-sm md:flex-row md:space-x-6 bg-gray-50"
                >
                  {course.Thumbnail && (
                    <img
                      src={course.Thumbnail}
                      alt={course.CourseName}
                      className="object-cover w-full h-32 mb-4 rounded-md md:mb-0"
                    />
                  )}
                  <div className="flex flex-col space-y-3 md:w-2/3 text-start">
                    <h3 className="text-xl font-semibold text-primary-900">
                      {course.CourseName}
                    </h3>
                    <p className="text-sm text-gray-600">{course.Description}</p>
                    {course.Enrolled && (
                      <div className="flex flex-col md:flex-row md:space-x-6">
                        <button className="px-4 py-2 text-lg text-white transition rounded-md cursor-pointer bg-primary-600 hover:bg-primary-700">
                          View Course
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-xl font-semibold text-center text-primary-600">
            You don&apos;t have enrolled to any courses :,-)
          </p>
        )}
      </div>
    </>
  );
};

export default Profile;
