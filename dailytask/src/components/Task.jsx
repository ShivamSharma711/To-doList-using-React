const Task = ({tittle,description,deleteTask,index})=>{
        return(
        <div className="task">
         <div>
             <p>{tittle}</p>
             <span>{description}</span>
         </div>
          
           <button onClick={()=>deleteTask(index)}>-</button>

        </div>
        )
}

export default Task;