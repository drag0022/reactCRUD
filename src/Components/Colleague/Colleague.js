import './Colleague.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
export default function Colleague(props) {
	let colleague = props.colleague;
	return (
		<Box>
			<Stack direction="row">
				<Stack direction="column" width="100vw" alignItems="flex-start" p={2}>
					<Typography variant="p">First Name: {colleague.firstName}</Typography>
					<Typography variant="p">Last Name: {colleague.lastName}</Typography>
					<Typography variant="p">Age: {colleague.age}</Typography>
					<Typography variant="p">
						Phone Number: {colleague.phoneNumber}
					</Typography>
				</Stack>
				<Stack
					className="buttonStack"
					direction="column"
					alignItems="flex-end"
					width="100%"
					justifyContent="center"
				>
					<Button variant="outlined" color="error">
						<Typography variant="button">Delete Entry</Typography>
					</Button>
					<Button>
						<Typography variant="button">Edit Entry</Typography>
					</Button>
				</Stack>
			</Stack>
			<Divider />
		</Box>
	);
}
