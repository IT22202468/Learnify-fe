import CourseList from "../components/CourseList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-24"></div>
      <CourseList />
    </>
  );
};

export default Home;
