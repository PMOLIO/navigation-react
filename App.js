import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Navpage from './Navpage'
import About from './About'
import Product from './Product'
function App() {
 return(
<>
<center><h1>Pizza Hut</h1></center>
<Navpage />
<Routes>
 <Route path='/home' element={<Home/>} />
 <Route path='/contact' element={<Contact/>} />
 <Route path='/about' element={<About/>} />
 <Route path='/product' element={<Product/>} />
</Routes>
</>
)
}export default App;