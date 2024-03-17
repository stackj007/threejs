import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import {
  AccumulativeShadows,
  RandomizedLight,
} from '@react-three/drei'

const Backdrop = () => {
  return (
    <AccumulativeShadows>
      <RandomizedLight />
    </AccumulativeShadows>
  )
}

export default Backdrop
