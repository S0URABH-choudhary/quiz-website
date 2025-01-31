import React, { useEffect, useState } from "react";
import Questions from "./questions";

function Questions_page() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data.questions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

console.log(Data);
  return (
    <div className="relative max-w-screen min-h-screen  bg-gray-100 flex flex-col items-center justify-center">
     {Data.map((question,index) => (
            <Questions
              index={index}
              key={question.id}
              description={question.description}
              topic={question.topic}
              options={question.options}
            />
          ))}
    </div>
  );
}

export default Questions_page;
