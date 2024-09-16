import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState([])	
	const [tasks, setTasks] = useState([])

	const handlePress = (e) => {
		if(e.key === "Enter" && inputValue.trim() ) {
			setTasks([...tasks, inputValue])
			setInputValue('');
		}
	}
	return ( 
		<div className="container">
			<h1>Todos</h1>
				<input
					type= "text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					placeholder="What will you do today?"
					onKeyDown={handlePress}
			></input>
			<ul> 
				{tasks.length === 0 ? (
					<li>No tasks, add tasks</li>
				) : (
					 tasks.map((task, i) => (
					 
					 <div key={i}>{task}</div>)
						
					 )
				)}
			</ul>
		</div>
	)
};

export default Home;
