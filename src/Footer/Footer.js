import React from 'react';
import './Footer.css';

const data = {
    email: "office@rainbow.com",
    phone: "+38111263565",
    address: "Milana Bartoša 20, Beograd"
}

class Footer extends React.Component {
    
    render() {
        return (
            <div className="footer-container">
                <h1 className="footer-info">Kontakt</h1>
                <ul className="list-items">
                    <li>{data.email}</li>
                    <li>{data.phone}</li>
                    <li>{data.address}</li>
                </ul>
            </div>
        )
    }
}

export default Footer;