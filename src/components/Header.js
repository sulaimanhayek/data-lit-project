import React from "react"
import ReactTyped from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>We make your dashboards lit 🔥</h1>
                <ReactTyped 
                className="typed-text"
                strings={["Ready to use themes", "Trainings", "Customized pages"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact us</a>
            </div>
        </div>
    )
}

export default Header
