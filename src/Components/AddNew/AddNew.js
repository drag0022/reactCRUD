import './AddNew.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import cuid from 'cuid';
export default function AddNew(props) {
	let colleagueList = props.colleagueList;
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState(0);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [gender, setGender] = useState('');
	function addNewEntry(ev) {
		ev.preventDefault();
		colleagueList = [
			...colleagueList,
			{
				firstName: firstName,
				lastName: lastName,
				age: age,
				gender: gender,
				phoneNumber: phoneNumber,
				id: cuid(),
			},
		];

		//set a global bool set to false initially
		//in addNewEntry(), turn it to async and and await for colleagueList to build.
		// once it's build, set the bool to true
		//check in return if bool is true, then it is saved and we can go to /lists
		// if it's false, then we don't go to /lists and display loading

		console.log(firstName);
		console.log({ colleagueList });
		localStorage.setItem('project01', JSON.stringify(colleagueList));
		window.location.replace('/list');
	}
	return (
		<>
			<Box
				component="form"
				onSubmit={addNewEntry}
				noValidate
				autoComplete="off"
			>
				<Stack direction="column" width="90vw" p={2}>
					<TextField
						className="newEntryText"
						label="First Name"
						variant="outlined"
						sx={{
							marginBottom: 1,
						}}
						value={firstName}
						onChange={(ev) => setFirstName(ev.target.value)}
					/>
					<TextField
						className="newEntryText"
						label="Last Name"
						variant="outlined"
						sx={{
							marginBottom: 1,
						}}
						onChange={(ev) => setLastName(ev.target.value)}
					/>
					<TextField
						className="newEntryText"
						label="Age"
						variant="outlined"
						sx={{
							marginBottom: 1,
						}}
						onChange={(ev) => setAge(ev.target.value)}
					/>
					<TextField
						className="newEntryText"
						label="Phone Number"
						variant="outlined"
						sx={{
							marginBottom: 1,
						}}
						onChange={(ev) => setPhoneNumber(ev.target.value)}
					/>
					{/* render <List> on click */}
					<Button variant="contained" color="success" type="submit">
						<Typography variant="button">Add new +</Typography>
					</Button>
				</Stack>
			</Box>
		</>
	);
}
