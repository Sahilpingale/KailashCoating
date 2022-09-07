import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'

const HeaderNav = () => {
  const dispatch = useDispatch()

  // --- useSelector --- //
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // Handlers
  const logoutHandler = () => {
    // console.log('logout')
    dispatch(logout())
  }

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
      <div className="gap-3 container-fluid">
        <Link className="navbar-brand" to="/">
          Kailash Coating
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarNav">
          {userInfo ? (
            <ul className="gap-5 navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="jobcardcreation"
                >
                  Create New
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="jobcardlist">
                  Jobcards List
                </Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userInfo.username}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Edit profile
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="gap-5 navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
