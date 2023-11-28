import React from 'react'

export default function DefaultPage(props) {
  return (
    <>
    <>
    <div>
        <div className="header">
            <div className='d-flex justify-content-between '>
                <h1>RentEasy</h1>
                <button>User</button>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
    </>
    </>
  )
}
