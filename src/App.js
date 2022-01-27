import Main from "./css/page/Main";
import {Routes, Route} from "react-router-dom"
import Header from "./css/compnents/Header/Header";
import Cart from "./css/page/Cart";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getRates} from "./css/redux/productsAction/productAction";

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getRates())
    },[dispatch])


  return (
    <div>
        <Header/>
     <Routes>
         <Route path="/" element={<Main/>}/>
         <Route path="/basket" element={<Cart/>}/>
     </Routes>
    </div>
  );
}

export default App;
