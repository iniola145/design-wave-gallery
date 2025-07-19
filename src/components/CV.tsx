
const CV = () => {
  const handleDownloadCV = () => {
    console.log('Downloading CV...');
    // You can add actual CV download logic here
  };

  const handleViewPortfolio = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Professional Background
        </h2>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Lead Developer & Designer</h4>
                  <p className="text-purple-600">Creative Studio (2020 - Present)</p>
                  <p className="text-gray-600 text-sm">Leading web development and design projects for various clients</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Frontend Developer</h4>
                  <p className="text-pink-600">Tech Solutions Inc (2018 - 2020)</p>
                  <p className="text-gray-600 text-sm">Specialized in React and modern web technologies</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Graphic Designer</h4>
                  <p className="text-blue-600">Design Agency (2016 - 2018)</p>
                  <p className="text-gray-600 text-sm">Created brand identities and marketing materials</p>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Bachelor of Computer Science</h4>
                  <p className="text-green-600">University of Technology (2012 - 2016)</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Adobe Certified Expert</h4>
                  <p className="text-yellow-600">Creative Suite Certification (2017)</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-800">React Developer Certification</h4>
                  <p className="text-indigo-600">Advanced React Patterns (2019)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={handleViewPortfolio}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
