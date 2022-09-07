import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <nav class=" navbar navbar-expand-lg navbar-light bg-light">
      <div class="gap-3 container-fluid">
        <Link class="navbar-brand" to="/">
          Kailash Coating
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" collapse navbar-collapse" id="navbarNav">
          <ul class="gap-5 navbar-nav">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="jobcardcreation">
                Create New
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="jobcardlist">
                Jobcards List
              </Link>
            </li>

            {/* Dropdown */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Username
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="#">
                    Edit profile
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
