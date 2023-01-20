import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

export default function APICall() {
	const [res, setRes] = useState([]);

	useEffect(() => {
		// only run if the component mounted the first time
		// this is because we don't have any dependencies
		setTimeout(() => {
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key':
						'c2deec0beemsh41c6972d9945efcp1c6e98jsne710cc22d7ca',
					'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
				},
			};

			fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
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
			<div>Result</div>
			{res.length > 0 ? (
				res.map((body) => {
					return Object.values(body);
				})
			) : (
				<Spin />
			)}
		</div>
	);
}
