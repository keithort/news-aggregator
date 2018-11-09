import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 text-center p-2">
      &copy; 2018 - {new Date().getFullYear()} - Keith Ort. Data from{" "}
      <a href="https://newsapi.org">News API</a>
    </footer>
  );
};

export default Footer;
