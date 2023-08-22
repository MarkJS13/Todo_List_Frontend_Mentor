import { useState } from 'react'
import Todo from './Todo';


function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => theme ? setTheme(false) : setTheme(true);

  !theme ? document.body.classList.add('container-dark') : document.body.classList.remove('container-dark');

  return (
    <div className="container">
      <div className={theme ? 'up-light-mode' : 'up-dark-mode'}>
        
      </div>
      
      <Todo toggle={toggleTheme} isDark={theme}/>

      <div className="attribution">
        <p> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/MarkJS13" target='_blank'>Mark Joseph Serrano</a>.
        </p>
  
    </div>

    </div>
  )
}

export default App
