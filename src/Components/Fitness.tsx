import IMG from "../Images/Health.png";
const Fitness = () => {
  return (
    <div className="Fitness--wrapper">
      <div className="image--wrapper">
        <img src={IMG} alt="illus" />
      </div>
      <div className="bottom--wrapper">
        <h1>
          <span>WORK LIFE </span>
          Fitness
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mollis
          nibh tempus, ultrices velit.
        </p>
      </div>
    </div>
  );
};
export { Fitness };
