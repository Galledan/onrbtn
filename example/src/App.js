import React from 'react'

import {Button } from 'onrbtn'
import 'onrbtn/dist/index.css'

const App = () => {
  return (
  <>
    <Button type='primary'>Primary</Button>
    <Button type='default'>Default</Button>
    <Button type='dashed'>Dashed</Button>
    <Button type='text'>Text</Button>
    <Button type='link'>Link</Button>
  </>
  )
}

export default App
