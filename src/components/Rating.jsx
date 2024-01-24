import starImage from '../assets/star.svg';

const Rating = () => {
  return (
    <div className="flex items-center space-x-1 mb-5">
      <img src={starImage} width="14" height="14" alt="star" />
      <img src={starImage} width="14" height="14" alt="star" />
      <img src={starImage} width="14" height="14" alt="star" />
      <img src={starImage} width="14" height="14" alt="star" />
    </div>
  );
};

export default Rating;
