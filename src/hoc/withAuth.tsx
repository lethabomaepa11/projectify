import React from "react";
import getUserObject from "../utils/getUserObject";
import { Navigate } from "react-router-dom";

type RequiredRole = "student" | "tutor" | "auth";

const withAuth = (
  WrapperComponent: React.ComponentType,
  requiredRole?: RequiredRole,
) => {
  return (props: any) => {
    const user = getUserObject();

    if (!user && requiredRole !== "auth") {
      return <Navigate to="/login" />;
    }
    if (requiredRole == "auth" && user) {
      //iwhen the user is logged in but tries to access the auth pages
      return <Navigate to={user.isTutor ? "/tutor" : "/projects"} />;
    }
    if (requiredRole && requiredRole === "tutor" && !user.isTutor) {
      //students should not access tutor pages
      return <Navigate to="/projects" />;
    } else if (requiredRole && requiredRole === "student" && user.isTutor) {
      //tutors should not access student pages
      return <Navigate to="/tutor" />;
    }
    return <WrapperComponent {...props} />;
  };
};

export default withAuth;
