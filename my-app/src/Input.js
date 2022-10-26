import React from 'react'
import { useState } from 'react'

export default function Input({get_img}) {
  const [data ,  setData ] = useState('')

  const send = (e) =>{
    e.preventDefault();
    get_img(data)
  }


  return (
    <div>
        <form action="" onSubmit={send} className="d-flex">
          <input type="text" onInput={(e)=>{setData(e.target.value)}} className='form-control' />
          <button className='btn btn-success' > Add </button>
        </form>
    </div>
  )
}
