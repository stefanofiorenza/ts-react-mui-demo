import React from "react";
import ErrorMessage from "./ErrorMessage";

const PageNotFound: React.FC = () => {
  return (
    <ErrorMessage message={"Die Seite konnte nicht gefunden werden!"}/>
  );
};

export default PageNotFound;