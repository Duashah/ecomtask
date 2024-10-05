import React from 'react';
import { ChevronRight, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AccountSettings = () => {
    const router = useRouter();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (

    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-black">Account Settings</h1>
      
      <div className="md:flex md:space-x-8">
        <section className="mb-8 md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-black">Basic info</h2>
          <div className="flex items-center mb-4">
            <div className="relative">
              <img src="/api/placeholder/64/64" alt="Profile" className="w-16 h-16 rounded-full" />
              <button className="absolute bottom-0 right-0 bg-gray-200 rounded-full p-1">
                <Camera size={16} />
              </button>
            </div>
            <span className="ml-4 text-blue-600 text-black">Upload new picture</span>
          </div>
          
          {['Name', 'Date of Birth', 'Gender', 'Email'].map((item, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <span className="font-medium text-black">{item}</span>
              <div className="flex items-center">
                <span className="mr-2 text-gray-400">
                  {item === 'Name' && 'Wade Armstrong'}
                  {item === 'Date of Birth' && 'December 24, 1991'}
                  {item === 'Gender' && 'Male'}
                  {item === 'Email' && 'wade.armstrong@email.com'}
                </span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          ))}
        </section>
        
        <section className="md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-black">Account info</h2>
          {['Username', 'Password'].map((item, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <span className="font-medium text-black">{item}</span>
              <div className="flex items-center">
                <span className="mr-2 text-gray-400">
                  {item === 'Username' && 'wadearmstrong94'}
                  {item === 'Password' && '••••••••'}
                </span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AccountSettings;