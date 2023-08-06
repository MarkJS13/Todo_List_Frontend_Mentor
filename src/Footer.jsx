const Footer = (props) => {

    const clearFinishedTask = () => {
        const newList = props.todoList.filter(list => list.status !== 'done');

        props.setTodolist(newList);
        localStorage.setItem('todos', JSON.stringify(newList));
    }

    const activeCount = props.todoList.filter(item => item.status === 'active').length;

    return(
        <li className='footer-list'>
            <div>
                <p className={!props.isDark && 'footer-list-dark'}>   
                    {activeCount > 1 ? `${activeCount} items left` : `${activeCount} item left`}
                </p>
            </div> 
            
            <nav>
                {props.children}
            </nav>

            <div>
                
                <p className={!props.isDark && 'footer-list-dark'} onClick={clearFinishedTask}>Clear completed</p>
            </div> 
        </li> 
    )
}

export default Footer;