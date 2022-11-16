import React, { useState } from 'react';

import { ANSWER_LETTERS } from '../utils';
import { AnswerButton } from './AnswerButton';
import Feedback from './Feedback';

export function QuizQuestion({ quizQuestion }) {
	const [question, setQuestion] = useState(quizQuestion);
	const isValid = question.answer &&
	(question.correctAnswer === question.answer)
	return (
			<>
					<p>{question.text}</p>
					<Feedback isValid={isValid}/>
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
