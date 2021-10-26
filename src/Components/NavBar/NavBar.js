import './NavBar.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function NavBar(props) {
	return (
		<>
			<Box>
				<Stack direction="row" justifyContent="space-evenly">
					<img src="#" className="logo" alt="logo" />
					<Typography variant="h4">List of Classmates</Typography>
					<Button>
						<Typography variant="button">Add new +</Typography>
					</Button>
				</Stack>
			</Box>
		</>
	);
}
