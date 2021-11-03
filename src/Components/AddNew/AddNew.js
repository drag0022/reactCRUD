import './AddNew.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import cuid from 'cuid';
export default function AddNew(props) {
	let colleagueList = props.colleagueList;
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState(0);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [gender, setGender] = useState('');

	//build a new object entry and append and id
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

		//save to local storage
		localStorage.setItem('project01', JSON.stringify(colleagueList));

		//go back to main list page
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
				<Stack direction="column" p={2}>
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
					<FormControl component="fieldset">
						<FormLabel component="legend">Gender</FormLabel>
						<RadioGroup
							aria-label="gender"
							defaultValue="female"
							name="radio-buttons-group"
						>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
								onChange={(ev) => setGender(ev.target.value)}
							/>
							<FormControlLabel
								value="male"
								control={<Radio />}
								label="Male"
								onChange={(ev) => setGender(ev.target.value)}
							/>
							<FormControlLabel
								value="other"
								control={<Radio />}
								label="Other"
								onChange={(ev) => setGender(ev.target.value)}
							/>
						</RadioGroup>
					</FormControl>
					<Button variant="contained" color="success" type="submit">
						<Typography variant="button">Add new +</Typography>
					</Button>
				</Stack>
			</Box>
		</>
	);
}
