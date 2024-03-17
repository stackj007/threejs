import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import {
  downloadCanvasToImage,
  reader,
} from '../config/helpers'
import {
  EditorTabs,
  FilterTabs,
  DecalTypes,
} from '../config/constants'
import {
  fadeAnimation,
  slideAnimation,
} from '../config/motion'

import {
  AiPicker,
  FilePicker,
  ColorPicker,
  CustomButton,
  Tab,
} from '../components'

const Customizer = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.intro && <>CUstomize</>}
    </AnimatePresence>
  )
}

export default Customizer
