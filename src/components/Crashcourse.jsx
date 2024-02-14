const CrashCourse = () => {
  return (
    <div className="container mx-auto w-screen bg-violet-700 text-center p-10 border border-white">
      <div className="flex flex-col items-center justify-center py-5 border border-x-white">
        <h2 className="text-3xl font-bold mb-5">Crash Course Launch Offer (Save INR 1799)</h2>
        <hr />
        <p className="text-xl flex items-center justify-center">
          ₹499 <span className="text-gray-500 line-through">₹1999</span>
        </p>
        <p className="text-sm mt-3">Learn the toolkit of the professionals in just 3 hours</p>
        <p className="text-sm mt-3">Enjoy the discounted price of ₹299</p>
        <a href="#" className="bg-yellow-300 text-white px-4 py-2 rounded mt-4 inline-block">
          Register Now
        </a>
        <p className="text-sm mt-3">The launch offer expires soon, grab your seat NOW!</p>
      </div>
    </div>
  );
};

export default CrashCourse;
