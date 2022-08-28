import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>

        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link to={'/'} className="navbar-brand">
              <i className="fa fa-mobile text-warning"> Contact <span className="text-warning">Manager</span></i>
            </Link>
          </div>
        </nav>


    </>
  )
}

export default Navbar