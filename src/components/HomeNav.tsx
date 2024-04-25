import Link from "next/link";
import React from "react";

const HomeNav = () => {
  return (
    <nav className="h-24 flex items-center bg-black w-full text-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-2xl font-medium">Connecting</h1>
        </Link>

        <div>
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-[#3cc796] to-[#249e74] text-white py-3 px-6 rounded-md"
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
