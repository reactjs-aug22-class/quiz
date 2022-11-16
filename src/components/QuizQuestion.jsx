import React, { useState } from 'react';

import { ANSWER_LETTERS } from '../utils';
import { AnswerButton } from './AnswerButton';

export function QuizQuestion({ quizQuestion }) {
	const [question, setQuestion] = useState(quizQuestion);
	return (
			<>
					<p>{question.text}</p>
					<span>
							{question.answer &&
									(question.correctAnswer === question.answer ? (
											<span
													style={{
															color: "green",
															background: "transparent",
															fontSize: "1rem"
													}}
											>
													&#x2713;
											</span>
									) : (
											<span
													style={{
															color: "red",
															background: "transparent",
															fontSize: "1rem"
													}}
											>
													&#x274C;
											</span>
									))}
					</span>
					<p>Answers:</p>
					<AnswerButton
							answerLetter={ANSWER_LETTERS.A}
							question={question}
							setQuestion={setQuestion}
					/>
					<AnswerButton
							answerLetter={ANSWER_LETTERS.B}
							question={question}
							setQuestion={setQuestion}
					/>
					<AnswerButton
							answerLetter={ANSWER_LETTERS.C}
							question={question}
							setQuestion={setQuestion}
					/>
					<AnswerButton
							answerLetter={ANSWER_LETTERS.D}
							question={question}
							setQuestion={setQuestion}
					/>
			</>
	);
}
