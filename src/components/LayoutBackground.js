import React from 'react';

const LayoutBackground = ({ children = null }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-200">
      {children}
    </div>
  );
};

export default LayoutBackground;