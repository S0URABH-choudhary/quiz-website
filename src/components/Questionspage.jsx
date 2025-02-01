import React, { useEffect, useState } from "react";
import Questions from "./questions";
import Result from "./Result";

function Questionspage() {
  const [Data, setData] = useState([]);
  const [resultpage, setresultpage] = useState(false)
  const handleresult = () => {
    setresultpage(true)
  }

  useEffect(() => {
    fetch("https://quiz-website-irvh.onrender.com/api/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data.questions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

console.log(Data);
  return (
    <>
    
      {resultpage? <Result/>:""}
    <div className="relative max-w-screen min-h-screen  bg-gray-100 flex flex-col items-center justify-center">
     {Data.map((question,index) => (
            <Questions
              index={index}
              key={question.id}
              description={question.description}
              topic={question.topic}
              options={question.options}
              detailed_solution={question.detailed_solution}
            />
          ))}
      <button aria-label='start quiz' className='cursor-pointer border-[1px] bg-blue-600 m-8 text-white rounded-[10px] px-5 py-2' onClick={handleresult} >Submit</button>
    </div>
</>
  );
}

export default Questionspage;
