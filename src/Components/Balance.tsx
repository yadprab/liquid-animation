import IMG from "../Images/Customer.png";
const Balance = () => {
  return (
    <div className="balance--wrapper">
      <div className="image--wrapper">
        <img src={IMG} alt="illus" />
      </div>
      <div className="bottom--wrapper">
        <h1>
          <span>WORK LIFE </span>
          BALANCE
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mollis
          nibh tempus, ultrices velit.
        </p>
      </div>
    </div>
  );
};
export { Balance };
