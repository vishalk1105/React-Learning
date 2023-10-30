import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Default Name",
        location: "Default Location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vishalk1105");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
  }
  render() {
    const { name, location, contact } = this.state.userInfo;

    return (
      <div>
        <h2>Name : {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {contact} </h2>
        <UserContext.Consumer>
          {(data) => <h2>{data.logginUser}</h2>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default UserClass;
