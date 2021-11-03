import './Edit.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Edit(props) {
	let colleagueList = props.colleagueList;
	let colleague = props.colleague;
	const [firstName, setFirstName] = useState(colleague.firstName);
	const [lastName, setLastName] = useState(colleague.lastName);
	const [age, setAge] = useState(colleague.age);
	const [phoneNumber, setPhoneNumber] = useState(colleague.phoneNumber);
	const [gender, setGender] = useState(colleague.gender);

	//build new object entry to replace the element to be edited
	function editEntry(ev) {
		ev.preventDefault();
		colleague.firstName = firstName;
		colleague.lastName = lastName;
		colleague.age = age;
		colleague.phoneNumber = phoneNumber;
		colleague.gender = gender;
		localStorage.setItem('project01', JSON.stringify(colleagueList));
		window.location.replace('/list');
	}

	return (
		<>
			<Box component="form" onSubmit={editEntry} noValidate autoComplete="off">
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
						value={lastName}
						onChange={(ev) => setLastName(ev.target.value)}
					/>
					<TextField
						className="newEntryText"
						label="Age"
						variant="outlined"
						sx={{
							marginBottom: 1,
						}}
						value={age}
						onChange={(ev) => setAge(ev.target.value)}
					/>
					<TextField
						className="newEntryText"
						label="Phone Number"
						variant="outlined"
						sx={{
							marginBottom: 1,
						}}
						value={phoneNumber}
						onChange={(ev) => setPhoneNumber(ev.target.value)}
					/>
					<FormControl component="fieldset">
						<FormLabel component="legend">Gender</FormLabel>
						<RadioGroup
							aria-label="gender"
							value={gender}
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
					<Stack direction="row">
						<Button variant="contained" color="success" type="submit">
							<Typography variant="button">Save</Typography>
						</Button>
						<span className="divider"></span>
						<Button
							className="cancelButton"
							variant="contained"
							color="error"
							type="button"
							onClick={() => {
								props.setEditToggled(undefined);
							}}
						>
							<Typography variant="button">Cancel</Typography>
						</Button>
					</Stack>
				</Stack>
			</Box>
		</>
	);
}
