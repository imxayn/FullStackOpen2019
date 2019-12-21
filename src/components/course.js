import React from 'react';

function Course({courses}) {
	// const total = courses.parts.reduce((acc, val) => {
	// 	return acc + val.exercises;
	// }, 0);
	return (
		<div>
			<h2>Web development curriculum</h2>
			{courses.map(title => (
				<>
					<h4>{title.name}</h4>
					{title.parts.map(nm => (
						<p key={nm.id}>{nm.name}</p>
					))}
				</>
			))}
		</div>
	);
}
export default Course;
