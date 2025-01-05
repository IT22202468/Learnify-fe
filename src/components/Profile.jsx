import { useEffect, useState } from "react";
import { fetchProfile } from "../services/api";
import Navbar from "./Navbar";

const Profile = () => {
  const [profile, setProfile] = useState(null);
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
      <div className="container flex flex-col px-4 py-8 mx-10 space-y-8 bg-white rounded-lg shadow-lg">
        {error && <p className="text-red-500">{error}</p>}
        {profile ? (
          <>
            <h1 className="mb-8 text-3xl font-bold text-primary-900 text-start">
              Welcome, {profile[0].Fullname}
            </h1>
            <h2 className="text-xl font-semibold text-primary-700">Your Courses:</h2>
            <div className="space-y-4">
              {profile.map((course, index) => (
                <div key={index} className="flex flex-row space-x-4">
                  {course.Thumbnail && (
                    <img
                      src={course.Thumbnail}
                      alt={course.CourseName}
                      className="object-cover w-32 h-32 mb-4 rounded-lg"
                    />
                  )}
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-bold text-primary-900">{course.CourseName}</h3>
                    <p className="text-gray-600">{course.Description}</p>
                    <p className="text-primary-700">Price: ${course.Price}</p>
                    <p className="text-primary-700">Duration: {course.Duration} hours</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Profile;