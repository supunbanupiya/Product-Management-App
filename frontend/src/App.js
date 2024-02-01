import Header1 from './components/Header1';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Column from './components/Column';
import Grid1 from './components/Grid1'
import Products from './pages/Products';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nopage from './pages/Nopage';
import Favourite from './pages/Favourite';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route index element={<Products />}/>
      <Route path="/favourite" element={<Favourite />}/>
      <Route path="/newproduct" element={<NewProduct />}/>
      <Route path="/editproduct" element={<EditProduct />}/>
      <Route path="*" element={<Nopage />}/>

    </Routes>
 </BrowserRouter> 
 </div>
  );
}

export default App;
