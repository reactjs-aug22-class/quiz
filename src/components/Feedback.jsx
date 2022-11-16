import React from 'react'

export default function Feedback({isValid}) {
		return (
			<span>
			{ isValid ? (
							<span
									style={{
											color: "green",
											background: "transparent",
											fontSize: "1.35rem"
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
					)}
	</span>
		)
}
