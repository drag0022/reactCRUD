import './NavBar.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
	return (
		<>
			<Box p={2} className="navContainer">
				<Stack
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
				>
					<img
						src="https://i.ibb.co/BgnH27G/AC-WORDMARK-1-C-WHT.png"
						className="logo"
						alt="logo"
					/>
					<Typography variant="h5">List of Classmates</Typography>
					<NavLink to="/list/newEntry">
						<Button variant="contained" color="success">
							<Typography variant="button">Add new +</Typography>
						</Button>
					</NavLink>
				</Stack>
			</Box>
		</>
	);
}
