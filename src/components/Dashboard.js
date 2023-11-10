import React from 'react'

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex  bg-[#F8F9FF]">
    {/*   Sidebar */}
    <div className="sm:w-64 w-16 h-full bg-[#081A51] flex flex-col items-center justify-between py-5">
      <div className="logo flex items-center mb-6">
        <div className="bg-[#017EFA] sm:mr-5 p-2.5 rounded-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h4 className="text-white hidden sm:block font-bold">Dash</h4>
      </div>
      <div className="w-[204px] hidden sm:block h-[125px] px-5 bg-[#1B2B65] rounded-md shadow-xl text-white flex flex-col justify-evenly items-center mx-auto">
        <p className="text-sm">
          Need Help with <span className="font-bold">Dash</span> ?
        </p>
        <button className="text-sm h-[40px] w-[160px] bg-[#017EFA]  rounded-md">
          Go to help center
        </button>
      </div>
    </div>
    {/*   End Sidebar */}
    {/*   Content Wrapper */}
    <div className="content-wrapper flex flex-col flex-1 h-full">
      {/*     Top navbar */}
      <div className="navbar bg-white h-[90px] flex items-center px-9 shadow-md">
        <h2 className="font-bold text-[#1C1F37] text-3xl">Dashboard</h2>
        <nav className="ml-auto flex space-x-6 items-center">
          <div className="bg-[#F5F7FB] h-10 w-10 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="bg-[#F5F7FB] h-10 w-10 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <div className="user flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-bold text-base">Username</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#9A9A9A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </nav>
      </div>
      {/*     End Top navbar */}
      {/*     Content */}
      <div className="h-[100vh] p-3 w-50 bg-white m-5 rounded-md">
        <div className="flex items-center space-x-2 bg-[#F5F7FB] h-12 w-80 rounded-lg ml-auto px-1">
          <div className="w-[107px] h-[40px] bg-white rounded-md active text-sky-700 flex items-center justify-center font-bold">
            Day
          </div>
          <div className="w-[107px] h-[40px] bg-transparent rounded-md  text-sky-700 flex items-center justify-center ">
            Day
          </div>
          <div className="w-[107px] h-[40px] bg-transparent rounded-md  text-sky-700 flex items-center justify-center ">
            Day
          </div>
        </div>
      </div>
      {/*     End Content */}
    </div>
    {/*   End Content Wrapper */}
  </div>
  )
}

export default Dashboard