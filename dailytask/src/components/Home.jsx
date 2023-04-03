import { useEffect, useState } from "react";
import Task from "./Task"
const Home = ()=>{

    const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem('tasks'))
    : []; 

    const [tasks, setTasks] = useState(initialArray);
    const [tittle, setTittle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler= (e)=>{
       e.preventDefault(); 
       setTasks([...tasks,{tittle:tittle,description:description}]); 
       setTittle("");
       setDescription(""); 
    }

    const deleteTask=(index)=>{
const filteredArray=tasks.filter((value,i)=>{
    return i!==index;
})
setTasks(filteredArray);
    };

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return(
        <div className="container">
            <h1>Your Daily Goal</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Tittle" value={tittle} onChange={(e)=>setTittle(e.target.value)}/>
            <textarea placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
            <button type="submit">Add me</button>
        </form>

        {tasks.map((item,index)=>(
            <Task key={index} 
            tittle={item.tittle} 
            description={item.description}
            deleteTask={deleteTask}
            index={index}
            />
        ))}
        </div>
    )
}

export default Home;