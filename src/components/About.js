import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <UserClass
        name={"Vishal Class"}
        location={"Mumbai"}
        contact={"vishal@gmail.com"}
      />
    </div>
  );
};
export default About;
