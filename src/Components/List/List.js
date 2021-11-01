import './List.css';
import Colleague from '../Colleague/Colleague';
import { useState } from 'react';
export default function List(props) {
	let colleagues = props.colleagueList;
	const [editToggled, setEditToggled] = useState(undefined);

	//wrap in useCallback
	function deleteColleague(id) {
		console.log('tryna delete');
		const findId = colleagues.find((item) => item.id === id);
		console.log(findId);
		colleagues.forEach((el) => {
			if (el.id === findId.id) {
				colleagues.splice(colleagues.indexOf(el), 1);
			}
		});
		console.log(colleagues);
		localStorage.setItem('project01', JSON.stringify(colleagues));
		//need to update state
		props.updateListState();
	}
	function editColleague(id) {
		const findId = colleagues.find((item) => item.id === id);
		console.log('will edit', findId);
		setEditToggled(id);
		console.log(editToggled);
	}

	return (
		<div className="listContainer">
			{colleagues.map((colleague) => {
				return (
					<Colleague
						updateListState={props.updateListState}
						colleagueList={colleagues}
						key={colleague.id}
						colleague={colleague}
						onDeleteColleague={deleteColleague}
						onToggleEdit={() => editColleague(colleague.id)}
						isEditToggled={colleague.id === editToggled}
					/>
				);
			})}
		</div>
	);
}
