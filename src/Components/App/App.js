import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import List from '../List/List';
import AddNew from '../AddNew/AddNew.js';

import { Switch, Route, Redirect } from 'react-router-dom';
function App() {
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
						<List />
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
