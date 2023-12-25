import React from "react";

const DonationForm = () => {
  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Make a donation!
        </h3>
        <form>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="firstName"
              className="inline-block mb-1 font-medium"
            >
              First name
            </label>
            <input
              placeholder="Hasan"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="lastName" className="inline-block mb-1 font-medium">
              Last name
            </label>
            <input
              placeholder="Bedir"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              placeholder="bestteacher@cu.edu.tr"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="description"
              className="inline-block mb-1 font-medium"
            >
              Clothes You're Donating
            </label>
            <input
              placeholder="1 M Shirt, 1 L Shirt, 1 M Jeans, 1 L Jeans"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
            />
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Donate
            </button>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            We respect your privacy. No data will be shared with any third
            party.
          </p>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
