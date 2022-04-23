import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
        <button className='btn btn-danger col-3' onClick={()=> props.resetAmt()}>Reset</button>
        <div className='col-6 bg-dark text-white text-center'>
            {props.totalAmt} 
        </div>
        <button className='btn btn-success col-3'>Pay Now</button>
    </div>
  )
}
