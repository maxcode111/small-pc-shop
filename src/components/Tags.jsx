import React from 'react'
import './Hits.css'

export default function Tags(props) {
  return (
    <div className="tags">
      <button className="tag">{props.tag}</button>
    </div>
  )
}
