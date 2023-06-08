import aarskort from '../photos/aarskort-01.svg'
import billet from '../photos/billet-01.svg'
import Nav from '../components/Nav'
import { NavLink } from 'react-router-dom'

export default function Billet(){
    return (
        <div className="app billet">
            <div className="categoryimagebillet"> 
            </div>

            <div className="">
            <h3 className="lightbeige category space24">Billetter og årskort</h3>

            <NavLink to="/fejlside">
            <button className="square space24">
                        <img src={billet} className="elefanticon" alt="elefantikon"></img>
                        
                    <div>
                        <p className="beige"> Billet</p>
                    </div>
                </button>
            </NavLink>
                

            <NavLink to="/fejlside">
                <button className="square space24">
                        <img src={aarskort} className="elefanticon" alt="elefantikon"></img>
                        
                    <div>
                        <p className="beige">Årskort</p>
                    </div>
                </button>
            </NavLink>


            </div>
            <Nav/>
        </div>
    )
}