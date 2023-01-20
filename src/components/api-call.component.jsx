import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

export default function APICall() {
	const [res, setRes] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((res) => res.json())
				.then(
					(result) => {
						console.log(result);
						setRes(result);
					},
					// Note: it's important to handle errors here
					// instead of a catch() block so that we don't swallow
					// exceptions from actual bugs in components.
					(error) => {
						setRes(error);
					}
				);
		}, 5000);
	}, []);

	return (
		<div>
			<div>Results from API fetch...</div>
			{res.length > 0 ? (
				res.map((row) => {
					return <div key={row.id}>{row.username}</div>;
				})
			) : (
				<Spin />
			)}
		</div>
	);
}
