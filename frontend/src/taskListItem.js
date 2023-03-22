const TaskListItem = props => {
    return (
        <>
            <table id="table">
                <tbody>
                {
                props.tasks.map((task, index) => 
                <tr key={index}>
                    <td>{index+1}. </td>
                    <td id={task.id}>{task.name}</td>
                    <td><button onClick={()=> props.markDone(task.id)}>Done</button></td>
                    <td></td>
                    <td><button onClick={()=> props.deleteTask(index)}>X</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </>
    );
}
export default TaskListItem;