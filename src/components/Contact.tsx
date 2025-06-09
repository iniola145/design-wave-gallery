
const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your vision to life? Get in touch and let's create something amazing together.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">@</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">hello@creativestudio.com</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">San Francisco, CA</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Start a Project
          </button>
          <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
            Schedule a Call
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400">
          <p>&copy; 2024 Creative Studio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
