'use client';

function Skills() {
  const certificates = [
    {
      title: "Python",
      description:
        "Certification in Python, showcasing proficiency in scripting, data manipulation, and foundational programming skills.",
      url: "https://drive.google.com/file/d/1fYjSnOwkxpbwqw-13j6P8NDVNaSeuq2w/view?usp=drive_link",
    },
    {
      title: "CSS",
      description:
        "Certified in CSS, skilled in responsive web design, and proficient in creating visually appealing layouts using modern styling techniques.",
      url: "https://drive.google.com/file/d/1as3XFhQG30J8TnlpuKFUog3DiwZ4EnvX/view?usp=drive_link",
    },
    {
      title: "JavaScript",
      description:
        "Certification in JavaScript, with expertise in building dynamic web applications and enhancing user experiences.",
      url: "https://drive.google.com/file/d/191qlQYRq1Qk5ZsCmtDSo55ndVDFsAeyA/view?usp=drive_link",
    },
    {
      title: "ReactJS",
      description:
        "Certified in ReactJS, focusing on building interactive, efficient, and reusable components for web applications.",
      url: "https://drive.google.com/file/d/1XiL1H0G3W_UpVFzYzb0Ibq4nvbVMB2XH/view?usp=drive_link",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-20 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-teal-300 pt-10">
          Certificates
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                {certificate.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {certificate.description}
              </p>
              {certificate.url && (
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4"
                >
                  <button className="px-4 py-2 text-sm font-semibold text-gray-900 bg-cyan-300 rounded-md shadow hover:bg-cyan-400 transition-all duration-300">
                    View Certificate
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Make sure to export the component as default
export default Skills;
