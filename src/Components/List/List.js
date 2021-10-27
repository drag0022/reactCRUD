import './List.css';
import Colleague from '../Colleague/Colleague';
export default function List(props) {
	const colleagueList = props.colleagueList;
	return (
		<>
			{colleagueList.map((colleague) => (
				<Colleague colleague={colleague} />
			))}
		</>
	);
}
