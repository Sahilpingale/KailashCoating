import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const JobcardCreationScreen = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  // ---- Use Selectors ---- //
  // 1. User Login
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
  }, [userInfo, navigate])
  return (
    <div className="d-flex mt-5 gap-5 m-4">
      {/* Buttons */}
      <div className="button-area flex-column d-flex gap-3 ms-3 ">
        <button>Save</button>
        <button>Print Jobcard</button>
        <button>
          Print <br />
          Delivery Challan
        </button>
      </div>
      <div className="flex-fill">
        {/* Table 1*/}
        <div className="table-area flex-fill">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Color</th>
                <th scope="col">Account</th>
                <th scope="col">Through</th>
                <th scope="col">Date</th>
                <th scope="col">Jobcard No</th>
                <th scope="col">Order No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Black</td>
                <td>Self</td>
                <td>Self</td>
                <td>21/2/21</td>
                <td>12</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="table-area flex-fill">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Size</th>
                <th scope="col">Pc</th>
                <th scope="col">Size</th>
                <th scope="col">Pc</th>
                <th scope="col">Size</th>
                <th scope="col">Pc</th>
                <th scope="col">Unit</th>
                <th scope="col">Nos</th>
                <th scope="col">Quantity</th>
                <th scope="col">Rate</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Black</td>
                <td>Self</td>
                <td>Self</td>
                <td>21/2/21</td>
                <td>12</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Black</td>
                <td>Self</td>
                <td>Self</td>
                <td>21/2/21</td>
                <td>12</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default JobcardCreationScreen
