import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 text-center py-4 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} Foodify. All rights reserved. || Designed By: Darshit
      </p>
    </footer>
  );
};

export default Footer;

