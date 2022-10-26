import React from 'react'

export default function Picture({img}) {
  return (
    <div>
      <img src={img} alt="" className="img-thumbnail" />
    </div>
  )
}
