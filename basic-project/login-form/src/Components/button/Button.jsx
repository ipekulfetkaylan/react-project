import './Button.css';

function Button ({type, onClick}){
    return <button className='button' type={type} onClick={onClick}>Login</button>
}
export default Button;