import React from "react";
import { Link } from "react-router-dom";

const HeaderButton = ({ goLink, title }) => {
  return (
    <div>
      <Link
        className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        to={goLink}
      >
        {title}
      </Link>
    </div>
  );
};

export default HeaderButton;
