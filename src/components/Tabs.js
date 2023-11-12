import React, { useState } from 'react';

const Tab = ({ label, onClick, isActive }) => (
  <button
    className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center 
      ${isActive ? 'text-blue-500 border border-b-0 border-blue-500' : 'text-gray-700 border-b border-gray-300'}
      bg-transparent sm:text-base whitespace-nowrap cursor-pointer focus:outline-none hover:border-gray-400 `}
    onClick={onClick}
  >
    {label}
  </button>
);

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('Profile');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex overflow-x-auto whitespace-nowrap">
      <Tab
        label="Profile"
        onClick={() => handleTabClick('Profile')}
        isActive={selectedTab === 'Profile'}
      />
      <Tab
        label="Account"
        onClick={() => handleTabClick('Account')}
        isActive={selectedTab === 'Account'}
      />
      <Tab
        label="Notification"
        onClick={() => handleTabClick('Notification')}
        isActive={selectedTab === 'Notification'}
      />

      {/* Render content based on the selected tab */}
      {/* {selectedTab === 'Profile' && <div className='flex overflow-x-auto whitespace-nowrap'>Profile Content</div>}
      {selectedTab === 'Account' && <div>Account Content</div>}
      {selectedTab === 'Notification' && <div>Notification Content</div>} */}
    </div>
  );
};
