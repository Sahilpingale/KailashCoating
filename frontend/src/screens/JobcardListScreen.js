import React from 'react'

const JobcardListScreen = () => {
  return (
    <div className="m-4">
      {/* Table 1*/}
      <div className="table-area flex-fill">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Jobcard No</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Color</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sahil</td>
              <td>Red</td>
              <td>21/2/21</td>
              <td>100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobcardListScreen
