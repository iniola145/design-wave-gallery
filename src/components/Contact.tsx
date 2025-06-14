import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    userEmail: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendAnEmail = () => {
    setShowModal(true);
    setSubmitStatus('');
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ userEmail: '', message: '' });
    setSubmitStatus('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userEmail || !formData.message) {
      setSubmitStatus('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.userEmail)) {
      setSubmitStatus('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('');

    try {

      const emailData = {
        to_email: 'iniola145@gmail.com',
        from_email: formData.userEmail,
        message: formData.message,
        subject: `New Contact Form Message from ${formData.userEmail}`
      };

      // In handleSubmit function:
      await emailjs.send(
        'service_tlrlefs',
        'template_m356zav',
        {
          to_email: 'iniola145@gmail.com',
          from_email: formData.userEmail,
          message: formData.message,
          reply_to: formData.userEmail
        },
        'Ttleyyy0oQAl3ImDB'
      );

      // Simulate API call for demo
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('Message sent successfully!');
      setTimeout(() => {
        closeModal();
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </p>

          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">@</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@creativestudio.com</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={sendAnEmail}
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              Send an Email
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400">
            <p>&copy; 2025 Creative Studio. All rights reserved.</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Send Message</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="userEmail" className="block text-gray-300 mb-2 font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`mb-4 p-3 rounded-lg text-center ${submitStatus.includes('success')
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white'
                  }`}>
                  {submitStatus}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;