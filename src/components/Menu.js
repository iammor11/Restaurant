import React from 'react';
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import Menu4 from './Menu4';

function Menu(){
    return(
    <div id="menu">
        <hr /><br />
        <span className="firstheading"><h1 >Menu</h1></span>
        <span className="secondheading"><h1>MOR Restaurant</h1></span>
        <br />

        <BrowserRouter>
        <div className="fullmenu"><NavLink to="/"><NavLink to="/menu">Dinner<div className="bgpic" id="dinner"></div></NavLink></NavLink></div>
        <div className="fullmenu"><NavLink to="/menu/fastfood">FastFood<div className="bgpic" id="fastfood"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/menu/drink">Drink<div className="bgpic" id="drink"></div></NavLink></div>
        <div className="fullmenu"><NavLink to="/menu/icecream">Ice-Cream<div className="bgpic" id="icecream"></div></NavLink></div>
    
        <Route exact path="/" component={Menu1} />
        <Route path="/menu/fastfood" component={Menu2} />
        <Route path="/menu/drink" component={Menu3} />
        <Route path="/menu/icecream" component={Menu4} />
        <Route exact path="/menu" component={Menu1} />
        </BrowserRouter>

    </div>
    );
}
export default Menu;