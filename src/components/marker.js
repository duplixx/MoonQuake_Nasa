import { useState } from 'react';
import {  Html} from '@react-three/drei';

export default function Marker({ children, ...props }) {
    const [occluded, occlude] = useState()
    return (
      <Html
        // 3D-transform contents
        // transform
        // // Hide contents "behind" other meshes
        occlude
        // Tells us when contents are occluded (or not)
        onOcclude={occlude}
        distanceFactor={2.5}
        // // We just interpolate the visible state into css opacity and transforms
        className="absolute text-white m-3"
        style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.25 : 1})` }}
        {...props}>
        {children}
      </Html>
    )
  }
  