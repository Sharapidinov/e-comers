import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import BurgerMenu from "../BurgerMenue/BurgerMenu";
import {CSSTransition} from "react-transition-group";

const Header = () => {

    const [burger, setBurger] = useState(false)

    return (
       <>
           <header className="flex p-6 bg-yellow-600 justify-between items-center	">
               <div className="text-center">
                   <Link className="mr-6" to={`/`}>Main</Link>
                   <Link  to={`/basket`} >Basket</Link>
               </div>
               <button onClick={() => setBurger(!burger)} className="py-2 px-2 z-60 text-xl bg-blue-400 rounded-xl"><GiHamburgerMenu/></button>
           </header>

           <CSSTransition
           in={burger}
           timeout={300}
           classNames="burger"
           unmountOnExit
           >
               <BurgerMenu burger={burger} setBurger={setBurger} />
           </CSSTransition>
       </>
    );
};

export default Header;
