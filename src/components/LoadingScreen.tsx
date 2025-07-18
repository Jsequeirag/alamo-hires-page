import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center z-50">
      <div className="flex justify-center items-center flex-col text-center ">
        <div className="w-16 h-16 border-4 border-white/30 border-t-yellow-400 rounded-full animate-spin mb-4"></div>
        <div className="text-white text-lg font-semibold text-center">
          Cargando...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
