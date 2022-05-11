import React from 'react'

export default function Title(props) {
  return (
    <div>

        <h1 style={
          {backgroundColor:'#737373',
          color:'white',
          textAlign:'center',
          margin:'20px 50px 50px 50px',
          fontSize:'large',
          padding:'5px',
        }}>
            {props.mainTitle}
        </h1>
      
    </div>
  )
}
