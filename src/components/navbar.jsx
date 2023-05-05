import { useDispatch } from 'react-redux';
import '../assets/styles/navbar.scss'
import { getUsers } from '../store/usersSlice';
import '../App.css'

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <nav className='nav'>
            <div className="container">
                <div className="navbar">
                    <div className='logo'>Logo</div>
                    <button onClick={()=>dispatch(getUsers(1))}>Get users</button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;