import React from 'react'

const CustManageSys = () => {


  return (
    <div className='h-full '>
        <div className="h-[20%] flex justify-center items-center">
          <h1 className="text-3xl">Customer Management System</h1>
        </div>
        <div className="h-[80%]">
          <table className="w-full text-center">
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Shreynash</td>
              <td>shreyanshsaxena@gmail.com</td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default CustManageSys