import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import List from '../List/List';
import AddNew from '../AddNew/AddNew.js';
import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cuid from 'cuid';
function App() {
	let payloadData = [];

	async function fetchData() {
		const URL = 'https://randomuser.me/api/?seed=drag0022&results=10';
		let fetchedData = await fetch(URL);
		let data = await fetchedData.json();
		payloadData = data.results;
		buildColleagueList();
	}

	let [colleagueList, setColleagueList] = useState([]);

	function buildColleagueList() {
		//for each item passed from fetch call in App component, build a new object with select info and add ID
		payloadData.map((colleague) => {
			return (colleagueList = [
				...colleagueList,
				{
					id: cuid(),
					firstName: colleague.name.first,
					lastName: colleague.name.last,
					gender: colleague.gender,
					phoneNumber: colleague.cell,
					age: colleague.dob.age,
				},
			]);
		});
		setColleagueList(colleagueList);
		//save to localStorage
		localStorage.setItem('project01', JSON.stringify(colleagueList));
	}

	useEffect(() => {
		//check local storage before fetching
		if (!localStorage.getItem('project01')) {
			fetchData();
		} else {
			setColleagueList(JSON.parse(localStorage.getItem('project01')));
		}
	}, []);
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<main>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/list">
						<List colleagueList={colleagueList} />
					</Route>
					<Route path="/list/newEntry" exact>
						<AddNew />
					</Route>
					<Redirect to="/" />
				</Switch>
			</main>
		</div>
	);
}

export default App;
