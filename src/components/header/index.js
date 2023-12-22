import Link from "next/link";
import DonationForm from "../donation";
import Donation from "../donation";
import Hero from "./Hero";

export const Header = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative  min-h-screen bg-gray-900 bg-opacity-75 font-sans">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Donate us!
                  <br className="block" />
                  Help a student{" "}
                  <span className="text-teal-400">in their journey!</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  At Dilek Dukkani, we believe that every student should have
                  access to clothes. We are a non-profit organization that aims
                  to provide free clothes to students who are financially weak.
                  We are a group of students who are passionate about helping
                  others. We are currently looking for donators who can donate
                  clothes to our organization. If you are interested, please
                  fill out the form next to this text and we will contact you as
                  soon as possible.
                </p>
                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
              <DonationForm />
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
};
