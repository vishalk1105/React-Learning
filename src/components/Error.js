import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>OPPS!!!</h1>
      <h2>Something Went Wrong</h2>
      <h3>{err.data}</h3>
    </div>
  );
};
export default Error;
