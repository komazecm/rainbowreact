import React from 'react';
import Form from './Form';
import './Home.css';
import { Images } from './Images';

function Home(){
    return(
        <div className="home-container">
            <Form />
            <div className="gallery">
                {Images.map((item, index) => {
                        return (
                            <div className="image">
                                <img className={item.className} src={item.url}/>
                            </div>
                        )
                })}

            </div>
        </div>
        
    )
}

export default Home;