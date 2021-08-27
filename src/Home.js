import React from 'react';

function Home(){
    return(
        <div className="home-container">
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