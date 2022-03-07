import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <div class="navbar">
            <ul class="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blocks">Blocks</Link></li>
                <li><Link to="/blocks/new">New Block</Link></li>
            </ul>
        </div>
    )
}