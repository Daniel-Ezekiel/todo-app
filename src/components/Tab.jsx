/* eslint-disable react/prop-types */
const Tab = (props) => {
  return (
    <li
      className={`p-3 font-semibold ${
        props.name == "All" ? "border-b-3 border-b-blue text-blue" : ""
      } text-center hover:cursor-pointer hover:border-b-3 hover:border-b-blue hover:text-blue`}
      data-tabname={props.tabName}
      ref={props.tabRef}
      onClick={props.handleClick}
    >
      {props.name}
    </li>
  );
};

export default Tab;
