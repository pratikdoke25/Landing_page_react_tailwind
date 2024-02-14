/* eslint-disable react/no-unescaped-entities */


function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-8">
        <h1 className="text-3xl font-bold text-gray-800">ABOUT FOUNDERX</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Start your founder's journey today!
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-gray-200 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Master a structured approach to building a tech venture
          </h3>
          <p className="text-gray-600">
            Learn the fundamentals of startup creation, from idea validation to
            product-market fit and fundraising.
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Get coached by India's top 1% founders, operators and investors
          </h3>
          <p className="text-gray-600">
            Gain insights and mentorship from experienced startup professionals who
            have built successful companies.
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Learn by doing: Work on actual startup ideas in a real-world startup team simulation
          </h3>
          <p className="text-gray-600">
            Apply your learnings to real-world challenges and collaborate with
            other aspiring founders to bring your ideas to life.
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Expand your network in the community of like-minded peers
          </h3>
          <p className="text-gray-600">
            Connect with other founders, investors, and mentors, and build
            lasting relationships that can support you on your entrepreneurial journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
