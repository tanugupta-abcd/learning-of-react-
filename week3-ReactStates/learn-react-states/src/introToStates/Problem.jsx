import React, { useState } from "react";

const Problem = ({problem}) => {
    const [showAnswer, setShowAnswer] = useState(false);
  return (
     <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{problem.question}</h2>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="text-sm text-blue-500 underline"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {showAnswer && <p className="mt-2 text-green-600">{problem.answer}</p>}
    </div>
  )
}

export default Problem
