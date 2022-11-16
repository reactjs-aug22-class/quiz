import React from 'react';

export function AnswerButton({ answerLetter, question, setQuestion }) {
	return (
			<button
					className="btn"
					style={{
							backgroundColor:
									question.answer === answerLetter ? "salmon" : undefined,
							color: question.answer === answerLetter ? "white" : undefined
					}}
					onClick={() => {
							setQuestion((preQuestion) => ({
									...preQuestion,
									answer: answerLetter
							}));
					}}
			>
					{answerLetter}
			</button>
	);
}
