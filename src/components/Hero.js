import React from 'react'

import '../styles/hero.css'

export default function Hero() {
    const [checked, setChecked] = React.useState(true)
    
    const toogleCheck = ()=>{
        setChecked(false)
    }

    const toogleCheckTrue = ()=>{
        setChecked(true)
    }

    return (
        <React.Fragment>
            <div className="slider">
                <input 
                    type="radio" 
                    name="slider" 
                    onClick={toogleCheckTrue}
                    checked={checked ? "checked": false}
                />
                <div className="imgBox">
                    <img src="https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539_1280.jpg" alt="" />
                    <div className="content">
                        <div className="content-text">
                            <a href="#">Hello</a>
                        </div>
                    </div>
                </div>
                <input 
                    type="radio" 
                    name="slider"
                    onClick={toogleCheck}

                />
                <div className="imgBox">
                    <img src="https://cdn.pixabay.com/photo/2021/08/07/08/49/building-6528075_1280.jpg" alt="" />
                    <div className="content">
                        <div className="content-text">
                            <a href="#">Hello</a>
                        </div>
                    </div>
                </div>
                <input 
                    type="radio" 
                    name="slider"
                    onClick={toogleCheck}

                />
                <div className="imgBox">
                    <img src="https://cdn.pixabay.com/photo/2019/03/12/18/53/city-4051537_1280.jpg" alt="" />
                    <div className="content">
                        <div className="content-text">
                            <a href="#">Hello</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
