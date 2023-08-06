const Active = (props) => {
    const filterActive = () => {
        const newList = [...props.todoList];
        const filtered = newList.filter(list => {
            return list.status === 'active';    
        });
        return filtered;
    }

    return (
        <>
          {filterActive().map(todo => {
           return <li key={todo.id} className={!props.isDark && 'todolist-dark-li'}> 

                <span className={`checkbox ${todo.status === 'done' ? 'checked' : ''}`} onClick={() => props.changeActiveStatus(todo.id)}> {todo.status === 'done' && <img src={props.check}/>} 
                </span>

                <p className={`${!props.isDark ? 'dark-task' : ''} ${todo.status === 'done' ? 'task-done' : ''}`}> {todo.task} </p>
                <span className='delete'onClick={() => props.deleteTask(todo.id)}> 
                  <img src={props.deleteIcon} />
                </span>
            </li>
          })} 
        </>
      );
    };


export default Active;