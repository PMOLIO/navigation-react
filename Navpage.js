import { NavLink } from 'react-router-dom'
function Navpage()
{
 return(
 <nav>
 <NavLink to='/home'>Home</NavLink>
 <NavLink to='/contact'>Contact</NavLink>
 <NavLink to='/about'>About</NavLink>
 <NavLink to='/product'>Product</NavLink>
 </nav>
 )
}
export default Navpage;