import React, { useState } from "react";

function Questions(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [details, setDetails] = useState(false);

  const handleOptionClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option.id);
      if (option.is_correct) {
        setDetails(false)
      } else {
        setDetails(true);
      }
    }
  };

  return (
    <>
      <div className="questions-container mt-28 last:mb-28 h-[80vh] w-[60%] shadow-xl bg-white rounded-[30px] gap-2 overflow-hidden flex flex-col items-center">
        <div className="question-container-top relative mt-[40px] flex flex-col items-center justify-center w-[70%] h-[25%] border-1 rounded-[20px] border-blue-500">
          <div className="topic px-[15px] py-[5px] absolute top-[-15%] rounded-[20px] bg-blue-600 text-white">
            {props.topic}
          </div>
          <div className="question p-4">
            {props.index + 1}. {props.description}
          </div>
        </div>
        <div className="question-container-bottom w-[70%] h-[25%] grid grid-cols-2 gap-2">
          {props.options.map((option, index) => (
            <div
              key={option.id} 
              className={`p-2 border rounded-md cursor-pointer ${
                selectedOption === option.id
                  ? option.is_correct
                    ? "bg-green-300"
                    : "bg-red-300"
                  : "bg-white"
              } ${selectedOption !== null ? "pointer-events-none" : ""}`} 
              onClick={() => handleOptionClick(option)}
            >
              {index + 1}. {option.description}
            </div>
          ))}
        </div>
        {details && (
          <div className="detailed-solution w-full p-10 overflow-y-scroll">
            <p>Note: {props.detailed_solution}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Questions;
