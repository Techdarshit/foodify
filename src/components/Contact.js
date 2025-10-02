const Contact = () => {
     return (<div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Have any questions or feedback? We'd love to hear from you!
        </p>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
     );
};

export default Contact;
