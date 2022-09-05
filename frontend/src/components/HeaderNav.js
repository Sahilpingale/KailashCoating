import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="jobcardcreation">
                Create
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="jobcardlist">
                Jobcards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
