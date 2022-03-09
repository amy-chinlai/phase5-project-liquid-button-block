import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return(
        <div className="navbar col-2 d-flex align-items-start">
            <ul className="navbar-list list-unstyled">
                <li><FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link></li>
                <li><FontAwesomeIcon icon={faCubes} /> <Link to="/blocks">Blocks</Link></li>
                <li><FontAwesomeIcon icon={faPlus} /> <Link to="/blocks/new">New Block</Link></li>
            </ul>
        </div>
    )
}