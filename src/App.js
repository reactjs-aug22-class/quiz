import "./styles.css";

import { QuizQuestion } from './components/QuizQuestion';
import React from "react";

const quizQuestions = [
  {
    text: "Q1: lorem ipsum sit seq",
    correctAnswer: "A",
    answer: undefined
  },
  {
    text: "Q2: lorem ipsum sit seq",
    correctAnswer: "B",
    answer: undefined
  },
  {
    text: "Q3: lorem ipsum sit seq",
    correctAnswer: "D",
    answer: undefined
  }
];
export default function App() {

  return (
    <div className="App">
      <h1>Quiz</h1>
      {quizQuestions.map((q) => (
        <QuizQuestion quizQuestion={q} />
      ))}
    </div>
  );
}
