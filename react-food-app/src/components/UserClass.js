import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location, contact } = this.props;
    return (
      <div>
        <h2>Name : {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {contact} </h2>
      </div>
    );
  }
}
export default UserClass;
