import './Colleague.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Edit from '../Edit/Edit';

export default function Colleague(props) {
	let colleague = props.colleague;

	//set image url for each Colleague instance. I append colleague.id at the end of each
	//link to make sure I get a different image for each component rendered.
	const imageUrl = 'https://i.pravatar.cc/200?id=' + colleague.id;

	return (
		<>
			<Box>
				<Stack direction="row">
					<img
						src={imageUrl}
						className="colleaguePic"
						alt="profile headshot of colleague"
					/>
					<Stack
						direction="column"
						width="100vw"
						alignItems="flex-start"
						justifyContent="center"
						p={2}
					>
						<Typography variant="p">
							First Name: {colleague.firstName}
						</Typography>
						<Typography variant="p">Last Name: {colleague.lastName}</Typography>
						<Typography variant="p">Age: {colleague.age}</Typography>
						<Typography variant="p">
							Phone Number: {colleague.phoneNumber}
						</Typography>
						<Typography variant="p">Gender: {colleague.gender}</Typography>
					</Stack>
					<Stack
						className="buttonStack"
						direction="column"
						alignItems="flex-end"
						width="100%"
						justifyContent="center"
					>
						<Button
							variant="outlined"
							onClick={() => {
								props.onToggleEdit(colleague.id);
							}}
						>
							<Typography variant="button">Edit Entry</Typography>
						</Button>
						<Button
							color="error"
							onClick={() => {
								props.onDeleteColleague(colleague.id);
							}}
						>
							<Typography variant="button">Delete Entry</Typography>
						</Button>
					</Stack>
				</Stack>
				<Divider />
				{props.isEditToggled ? (
					<Edit
						editToggled={props.isEditToggled}
						updateListState={props.updateListState}
						colleagueList={props.colleagueList}
						colleague={colleague}
					/>
				) : (
					<></>
				)}
			</Box>
		</>
	);
}
