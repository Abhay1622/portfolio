'use client';

const Experiences = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 lg:px-16 pt-40">

      {/* Experience Section */}
      <div className="mb-10">
        <h2 className="text-4xl font-semibold mb-4 text-teal-300 border-b-2 border-teal-600 pb-2">Experience</h2>

        {/* GeoGo Infotech Experience Card */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl transition-colors duration-300 hover:bg-gray-800 mb-6">
          <div className="relative pb-2 mb-6 border-b border-gray-700">
            <h3 className="text-3xl font-semibold mb-1">GeoGo Infotech</h3>
            <p className="text-gray-400 italic">Software Developer | Aug 2024 - Present</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Currently leading the management of the ChikuCab project, a key initiative within the company. Responsible for implementing all changes, updates, and modifications while ensuring alignment with evolving requirements. Utilizing technical expertise and innovative ideas to drive continuous improvement and success of the project.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>Technologies: HTML, CSS, JavaScript, PHP</p>
              <p>IDE: VS Code</p>
            </div>
            <div className="text-teal-300 hover:text-teal-100 transition duration-300">
              <a href="https://chikucab.com/" className="underline">View Projects</a>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Section */}
      <div>
        <h2 className="text-4xl font-semibold mb-4 text-teal-300 border-b-2 border-teal-600 pb-2">Internship</h2>

        {/* Treue Technology Internship Card */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl transition-colors duration-300 hover:bg-gray-800 mb-6">
          <div className="relative pb-2 mb-6 border-b border-gray-700">
            <h3 className="text-3xl font-semibold mb-1">Treue Technology</h3>
            <p className="text-gray-400 italic">Web Developer Intern | Sept 2023 - Oct 2023</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Completed an online web development internship, mastering HTML, CSS, JavaScript, and ReactJS through hands-on projects and expert mentorship. Developed practical skills ready for real-world application in professional settings.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>Technologies: HTML, CSS, JavaScript, ReactJS</p>
              <p>IDE: VS Code</p>
            </div>
            <div className="text-teal-300 hover:text-teal-100 transition duration-300">
              <a href="https://github.com/AnkitSoni03" className="underline">View Projects</a>
            </div>
          </div>
        </div>
      </div>

      {/* View Experience Later Option */}

      <div className="mt-6 text-left">
        <div className="text-black ">.
        </div>
      </div>
    </div>
  );
};

export default Experiences;
