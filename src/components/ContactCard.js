import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  console.log(props.contact);
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
      <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
      {/* If you are using React Router v6, the Link component should look like this as above */}
  <div className="header">{name}</div>
  <div>{email}</div>
</Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      {/* <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}> */}
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;