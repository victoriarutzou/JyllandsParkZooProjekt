import { NavLink } from 'react-router-dom'
import abe from '../photos/abe.svg'

export default function fejlside(){
    return (
        <div className="fejlside app">
            <img src={abe} alt="abe" className="abe"/>
            <h1 className="white space8">FEJLSIDE</h1>
            <h3 className="white space32"> Det ser ud til at denne side laver abekattestreger. Vores dygtige medarbejdere prøver at stoppe ballederne så hurtigt som muligt.</h3>
            
            <NavLink to="/Velkommen">
                <button className="whitebtn">
                    Tilbage
                </button>
            </NavLink>
        </div>
    )
}