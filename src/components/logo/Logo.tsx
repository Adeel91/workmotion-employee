import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card } from "react-bootstrap";

const Logo: React.FC = (): JSX.Element => {
  return (
    <RouterLink data-cy="logo" to="/admin/dashboard">
      <Card.Img
        src="https://workmotion.com/wp-content/uploads/2021/12/logo-workmotion.svg"
        alt="Card image"
      />
    </RouterLink>
  );
};

export default Logo;
