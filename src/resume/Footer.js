// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 p-4 bg-gray-800 text-white text-center">
      <p>© 2024 Your Name. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/sairutwika" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/elluru-sai-rutwika-868729253/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition duration-300"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-sm">© 2024 Rutwika ❤️All rights reserved</p>
    </footer>
  );
};

export default Footer;
