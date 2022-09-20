import { useState } from 'react';
import {  Html} from '@react-three/drei';

export default function Marker({ children, ...props }) {
    const [occluded, occlude] = useState()
    return (
      <Html position={[0, 0, 0.3]}
        occlude
        onOcclude={occlude}
        distanceFactor={2.5}
        zIndexRange={[100, 0]}
        sprite={true}
        center
        className='text-white text-2xl font-semibold w-[180px] rounded-2xl border-lime-300 border-4 px-3 py-1 '
        style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.05 : 1})` }}
        {...props}>
        {children}
      </Html>
    )
  }
  