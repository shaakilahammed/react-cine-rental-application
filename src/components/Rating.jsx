import starImage from '../assets/star.svg';

const Rating = ({ value }) => {
  return (
    <div className="flex items-center space-x-1 mb-5">
      {Array(value)
        .fill(starImage)
        .map((item, index) => (
          <img key={index} src={item} width="14" height="14" alt="star" />
        ))}
    </div>
  );
};

export default Rating;
