const Input = (props) => {
    return(
        <li className="input">
                <span className={`circle-icon ${!props.isDark ? 'input-dark' : ''}`}></span>
                <form onSubmit={props.submitInput}>
                    <input type="text" placeholder='Create a new todo..' className={!props.isDark && 'input-dark'} onChange={(e)=> props.setNewTask(e.target.value)} value={props.newTask}/>
                </form>
        </li>
    )
}



export default Input;