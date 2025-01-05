import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/courses/${course.Id}`);
      };

    return (
        <div className="p-4 bg-white border rounded-lg shadow-lg cursor-pointer"
        onClick={handleCardClick}>
            <img
                src={course.Thumbnail}
                alt={course.Name}
                className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="mt-4">
                <h2 className="text-xl font-bold text-black">{course.Name}</h2>
                <p className="mt-2 text-gray-600">{course.Description}</p>
                <p className="mt-4 font-semibold text-primary-700">
                    ${course.Price} - {course.Duration} hours
                </p>
            </div>
        </div>
    );
};
CourseCard.propTypes = {
    course: PropTypes.shape({
        Thumbnail: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Price: PropTypes.number.isRequired,
        Duration: PropTypes.number.isRequired,
        Id: PropTypes.string.isRequired,
    }).isRequired,
};

export default CourseCard;
