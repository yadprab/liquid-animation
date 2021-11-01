import IMG from "../Images/Hiring.png";
const Social = () => {
  return (
    <div className="social--wrapper">
      <div className="image--wrapper">
        <img src={IMG} alt="illus" />
      </div>
      <div className="bottom--wrapper">
        <h1>
          <span>IMPROVE</span>
          SOCIAL
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mollis
          nibh tempus, ultrices velit.
        </p>
      </div>
    </div>
  );
};
export { Social };
