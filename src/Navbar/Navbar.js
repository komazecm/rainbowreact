import React from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import { Route, Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    state = { 
        clicked: false,
    }

    like() {
        alert("Sviđa vam se ova stranica!");
    }

    render() {
        return (
            <nav className="NavItems">
                <h1 className="logo"><Link to="/" className="logo">RainbowSchool</Link></h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className={item.className}>
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.like}>Like</Button>
            </nav>
        )
    }
}

export default Navbar;