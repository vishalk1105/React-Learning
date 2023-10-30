import React, { createContext } from "react";

const UserContext = createContext({
  logginUser: "Default User",
});

export default UserContext;
