// Loader.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // loader time (ms)

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <span className="ml-4 text-xl font-semibold text-blue-600 animate-pulse">
            Loading...
          </span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Loader;
