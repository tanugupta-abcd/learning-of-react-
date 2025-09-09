import React, { useState } from 'react'
import Problem from "./Problem";

  const problems = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    answer: "4",
  },
  {
    question: "What is the color of the sky?",
    answer: "Blue",
  },
];



const QandAns = () => {
    const [index,setIndex] = useState(0);


  const goNext = () => {
    if (index < problems.length - 1) setIndex(index + 1);
  };

  const goPrevious = () => {
    if (index > 0) setIndex(index - 1);
  };

       
  return (
    
    <div className="p-6 max-w-md mx-auto text-center">
      <Problem problem={problems[index]} />
      <div className="mt-4 space-x-4">
        <button onClick={goPrevious} disabled={index === 0} className="px-4 py-2 bg-gray-300 rounded">
          Previous
        </button>
        <button onClick={goNext} disabled={index === problems.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  )
}

export default QandAns
