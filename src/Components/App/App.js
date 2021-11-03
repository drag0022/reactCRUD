import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import List from '../List/List';
import AddNew from '../AddNew/AddNew.js';
import { useEffect, useState, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cuid from 'cuid';
function App() {
	let payloadData = [];

	//initial data fetch. we will build our local storage data based on this fetch
	async function fetchData() {
		const URL = 'https://randomuser.me/api/?seed=drag0022&results=10';
		let fetchedData = await fetch(URL);
		let data = await fetchedData.json();
		payloadData = data.results;
		buildColleagueList();
	}

	//final data list state
	let [colleagueList, setColleagueList] = useState([]);

	//build the final list based on the fetched data
	function buildColleagueList() {
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

		//update list state
		setColleagueList(colleagueList);

		//save to localStorage
		localStorage.setItem('project01', JSON.stringify(colleagueList));
	}

	//update list state with data from local storage
	const updateListState = useCallback(() => {
		const localHostData = JSON.parse(localStorage.getItem('project01'));
		setColleagueList(localHostData);
	}, []);

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
						<List
							colleagueList={colleagueList}
							updateListState={updateListState}
						/>
					</Route>
					<Route path="/list" exact>
						<List
							colleagueList={colleagueList}
							updateListState={updateListState}
						/>
					</Route>
					<Route path="/list/newEntry">
						<AddNew colleagueList={colleagueList} />
					</Route>
					<Redirect to="/" />
				</Switch>
			</main>
		</div>
	);
}

export default App;
