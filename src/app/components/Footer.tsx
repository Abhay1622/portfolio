import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t-2 border-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold text-gray-200">Ankit Soni</h2>
            <p className="text-gray-400">Building digital experiences with creativity and code.</p>
            <div className="flex space-x-4 mt-4">
              {/* LinkedIn Icon */}
              <Link href="https://www.linkedin.com/in/ankit-soni-98107b243/" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.6c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm12.5 11.6h-3v-5.5c0-1.378-.039-3.152-1.917-3.152-1.918 0-2.212 1.5-2.212 3.052v5.6h-3v-10h2.877v1.367h.041c.4-.75 1.377-1.541 2.835-1.541 3.031 0 3.589 1.994 3.589 4.586v5.588z"/>
                </svg>
              </Link>

              {/* GitHub Icon */}
              <Link href="https://github.com/AnkitSoni03" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.244c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.774.419-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.623-5.475 5.921.43.372.814 1.102.814 2.221v3.293c0 .322.218.694.824.576 4.765-1.589 8.198-6.084 8.198-11.382 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>

              {/* Facebook Icon */}
              <Link href="https://www.facebook.com/profile.php?id=100009636765395&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.656-4.788 1.325 0 2.465.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.714-1.795 1.76v2.308h3.588l-.467 3.622h-3.121v9.294h6.116c.732 0 1.325-.593 1.325-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Section: Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400">Reach out to me:</p>
            <p className="font-semibold text-gray-200">sethankit027@gmail.com</p>
            <p className="font-semibold text-gray-200">+91 7348383868</p>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Ankit Soni. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
