import { useState, useEffect } from 'react';

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-0 mx-4 sm:w-32  md:w-80 transition-transform duration-500 ${showForm ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
      <div className="bg-white p-4 md:p-6 shadow-lg rounded-t-lg md:rounded-lg relative">
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form className="space-y-4">
          <div>
            <h2 className="flex justify-center font-serif font-extrabold">FLAT 15% OFF</h2>
            <div className="flex items-center mx-8">
              Enter your details and win a coupon worth 15% Off
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone"></label>
            <input
              id="phone"
              type="tel"
              className="w-full md:w-72 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"></label>
            <input
              id="email"
              type="email"
              className="w-full md:w-72 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-72 bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600"
          >
            Show Me Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
