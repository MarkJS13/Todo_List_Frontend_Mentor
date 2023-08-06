import check from './assets/images/icon-check.svg';
import deleteIcon from './assets/images/icon-cross.svg'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Active from './nav/Active';
import Completed  from './nav/Completed';
import All from './nav/All';
import Logo from './Logo';
import Input from './Input';
import Footer from './Footer';


const Todo = (props) => {
const [todoList, setTodolist] = useState([]);
const [newTask, setNewTask] = useState('');
const navigate = useNavigate();

useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodolist(JSON.parse(storedTodos));
    }

    const currentRoute = window.location.pathname;
    if (currentRoute !== '/active' && currentRoute !== '/completed') {
      navigate('/');
    }
  }, [navigate]);


const submitInput = (event) => {
    event.preventDefault();
    const newList = [...todoList, {
        id: todoList.length ===  0 ? 1 : todoList[todoList.length - 1].id + 1,
        task: newTask.trim(),
        status: 'active'
    }];

    if(newTask) {
        setTodolist(newList);
        localStorage.setItem('todos', JSON.stringify(newList));
        setNewTask('');
    }
}

const deleteTask = (id) => {
    const list = todoList.filter((value) =>{
        return value.id !== id;
})
    setTodolist(list);
    localStorage.setItem('todos', JSON.stringify(list));
}


const changeActiveStatus = (id) => {
    const newList = [...todoList];

    const updatedList =newList.map(value => {
        if(value.id === id) {
            return {...value, status: 'done'}
        } else {
            return value;
        }
    })

    setTodolist(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
}



return (
    <main>
        <div className="todo">
            <Logo isDark={props.isDark} toggle={props.toggle}/>
            <Input setNewTask={setNewTask} newTask={newTask} submitInput={submitInput} isDark={props.isDark}/>

            <div className={`todo-list ${!props.isDark ? 'todolist-dark' : ''}`}>
                <ul>
                    <Routes>   
                        <Route path='/' element={<All isDark={props.isDark} changeActiveStatus={changeActiveStatus} deleteTask={deleteTask} deleteIcon={deleteIcon} check={check} todoList={todoList}/>} />

                        <Route path='/active' element={<Active isDark={props.isDark} changeActiveStatus={changeActiveStatus} deleteTask={deleteTask} deleteIcon={deleteIcon} check={check} todoList={todoList}/>} />
                        
                        <Route path='/completed' element={<Completed isDark={props.isDark} changeActiveStatus={changeActiveStatus} deleteTask={deleteTask} deleteIcon={deleteIcon} check={check} todoList={todoList}/>} />
                    </Routes>

                    <Footer isDark={props.isDark} todoList={todoList} setTodolist={setTodolist}>
                        <NavLink to="/" className={!props.isDark ? 'footer-list-dark' : ''} exact> All </NavLink>
                        <NavLink to="/active" className={!props.isDark ? 'footer-list-dark' : ''}> Active </NavLink>
                        <NavLink to="/completed" className={!props.isDark ? 'footer-list-dark' : ''}> Completed </NavLink>
                    </Footer>     
                </ul>
            </div>

            <li className={`list-nav ${props.isDark ? 'list-nav-light' : ''}`}> 
                <nav>
                    <NavLink to="/" className={!props.isDark ? 'footer-list-dark' : ''} > All </NavLink>
                    <NavLink to="/active" className={!props.isDark ? 'footer-list-dark' : ''}> Active </NavLink>
                    <NavLink to="/completed" className={!props.isDark ? 'footer-list-dark' : ''}> Completed </NavLink>
                </nav>
            </li>         

            <div className="drop-text">
                <p >Drag and drop to reorder list</p>
            </div>
        </div>
    </main>
    
    )
}

export default Todo;