import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Image/Logo/logo.png'

function Header() {
    return (
        <header className = 'my-container py-3'>
            <nav className = 'd-flex justify-content-between py-2'>
                <div id = 'logo'>
                    <img src = {logo}></img>
                </div>
                <ul id = 'manu' className = 'd-flex justify-content-between align-items-center'>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About</Link>
                        
                    </li>
                    <li>
                        <Link to = '/pricing'>Pricing</Link>
                    </li>
                    <li>
                        <Link to = '/pages'>Pages</Link>
                    </li>
                    <li>
                        <Link to = '/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to = '/contact'>Contact</Link>
                    </li>
                    <li>
                        <button id = 'btn-1' className = 'btn text-light px-4 py-2'><i class="fas fa-fire pr-2"></i>Get Started</button>
                    </li>
                    <li>
                        <button id = 'btn-2' className = 'btn border border-light text-light px-4 py-2'><i class="fas fa-sign-in-alt pr-2"></i>Log In</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
