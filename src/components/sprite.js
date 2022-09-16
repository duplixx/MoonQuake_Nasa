import React from 'react'

export default function Sprite(props) {
    const a = props.x
    const b = props.y
    const c = props.z
  return (
                    <sprite position={[1.1 + a, b,  c]} layers={0} >

                    </sprite>
  )
}
