import React from "react";

function Questions(props) {
  return (
    <>
      <div className="questions-container mt-28 last:mb-28 h-[70vh] w-[60%] shadow-xl bg-white rounded-[30px]  gap-2 overflow-hidden flex flex-col items-center justify-center">
        <div className="question-container-top relative flex flex-col items-center justify-center w-[70%] h-[25%] border-1 rounded-[20px] border-blue-500">
          <div className="topic px-[15px] py-[5px] absolute top-[-15%] rounded-[20px] bg-blue-600 text-white">
            {props.topic}
          </div>
          <div className="question p-4">{props.index+1}. {props.description}</div>
        </div>
        <div className="question-container-bottom w-[70%] h-[25%] grid grid-cols-2 gap-2">
          {props.options.map((option,index)=>(
            <div className=" border-1 rounded-[20px] p-4 cursor-pointer border-blue-500">{index+1}. {option.description}</div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Questions;
