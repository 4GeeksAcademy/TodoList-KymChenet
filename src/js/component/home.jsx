import React, { useState } from "react";
import Task from "./Task";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")	
	const [tasks, setTasks] = useState("")

	const handlePress = (e) => {
		if(e.key === "Enter" && inputValue.trim() ) {
			setTasks([...tasks, inputValue])
			setInputValue('');
		}
	}

	const deleteTask = (indexToRemove) => {
		const newTasks = tasks.filter((_, index) => index !== indexToRemove)
		setTasks(newTasks)
	}



	return ( 
		<div className="container text-center">
			<h1 >todos</h1>
				<ul className="list-group mt-3"> 
					<li className="list-group-item">  
						<input 
							type= "text"
							className="input-item"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							placeholder="What will you do today?"
							onKeyDown={handlePress}
						></input>
					</li>
					{tasks.length === 0 ? (
								<li className="list-group-item" >No tasks, add tasks</li>
							) : (
								tasks.map((task, i) => (
								
								<Task task={task} key={i} deleteTask={() => deleteTask(i)} />
								)
									
								)
							)}					
			</ul>
		</div>
	)
};

export default Home;
