import moon from './assets/images/icon-moon.svg';
import sun from './assets/images/icon-sun.svg';

const Logo = (props) => {
    return(
        <div className="logo">
            <h1> TODO </h1>
                <div className='toggle' onClick={props.toggle}>
                    <img src={props.isDark ? moon : sun} alt="icon" />
                </div>
            </div>
    )
}



export default Logo;