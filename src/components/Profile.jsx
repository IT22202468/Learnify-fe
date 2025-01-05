import { useEffect, useState } from 'react';
import { fetchProfile } from '../services/api';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
      } catch (err) {
        setError('Failed to load profile.');
        console.error(err);
      }
    };

    getProfile();
  }, []);

  return (
    <div className="profile-container">
      {error && <p className="text-red-500">{error}</p>}
      {profile ? (
        <>
          <h1 className='text-black'>Welcome, {profile[0].Fullname}</h1>
          <p className='text-black'>Email: {profile[0].Email}</p>
          
          <h2>Your Courses:</h2>
          {profile.map((course, index) => (
            <div key={index}>
              <h3>{course.CourseName}</h3>
              <p>{course.Description}</p>
              <p>Price: ${course.Price}</p>
              <p>Duration: {course.Duration}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
