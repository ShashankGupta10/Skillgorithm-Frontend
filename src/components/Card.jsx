import React from "react";

const Card = ({ images, title, Creator, onRegisterClick }) => {
  const handleRegisterClick = () => {
    onRegisterClick({ title, Creator });
  };
  return (
    <>
      <div className="border-4 border-gray-600 flex flex-col gap-2 bg-white text-black rounded-2xl hover:shadow-xl w-[30%] p-4 mb-4">
        <img
          className="overflow-hidden w-full h-60 object-contain border-4 border-gray-600"
          src={images}
          alt={title}
        />
        <div className="flex flex-col  justify-center px-4 py-3">
          <h1 className="font-bold text-[#21B573] text-lg pt-4">{title}</h1>
          <div className="flex gap-6 items-center mb-4">
            <img
              className="overflow-hidden rounded-xl w-10 h-10 "
              src={images}
              alt={title}
            />
            <p className="font-semibold text-sm text-gray-100">{Creator}</p>
          </div>
          <div className="pt-1">
            <div className="flex w-full overflow-hidden h-2 mb-4 text-xs bg-lime-200 rounded-43xl">
              <div
                className="w-[70%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-500"
              ></div>
              
            </div>
            <div className="text-4 text-right w-full text-gray-900">Lesson 5 of 7</div>
          </div>
        </div>

        <div className="mb-1 flex flex-col items-center justify-start">
          <button
            className=" bg-[#7c4b94] text-white py-1 px-6 rounded-md "
            onClick={handleRegisterClick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
