import React from 'react'

const RegisterScreen = () => {
  return (
    <div className="m-5">
      <div class="m-5">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Confirm Password
            </label>
            <input type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen
