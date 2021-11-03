import './List.css';
import Colleague from '../Colleague/Colleague';
import { useState, useCallback } from 'react';
export default function List(props) {
	let colleagues = props.colleagueList;
	const [editToggled, setEditToggled] = useState(undefined);

	//delete entry
	const deleteColleague = useCallback(
		(id) => {
			console.log('tryna delete');
			const findId = colleagues.find((item) => item.id === id);
			console.log(findId);
			colleagues.forEach((el) => {
				if (el.id === findId.id) {
					colleagues.splice(colleagues.indexOf(el), 1);
				}
			});
			localStorage.setItem('project01', JSON.stringify(colleagues));
			props.updateListState();
		},
		[colleagues]
	);

	//edit entry
	const editColleague = useCallback((id) => {
		setEditToggled(id);
	}, []);

	return (
		<div className="listContainer">
			{colleagues.map((colleague) => {
				return (
					<Colleague
						className="colleagueContainer"
						updateListState={props.updateListState}
						colleagueList={colleagues}
						key={colleague.id}
						colleague={colleague}
						onDeleteColleague={deleteColleague}
						onToggleEdit={() => editColleague(colleague.id)}
						isEditToggled={colleague.id === editToggled}
						setEditToggled={setEditToggled}
					/>
				);
			})}
		</div>
	);
}
