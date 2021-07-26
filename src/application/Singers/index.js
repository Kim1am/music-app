import React, { useState } from 'react'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/mock'
import { NavContainer } from './style'

function Singers() {
  let [category, setCategory] = useState('')
  let [alpha, setAlpha] = useState('')
  let updateCategory = val => {
    setCategory(val)
  }
  let updateAlpha = val => {
    setAlpha(val)
  }

  return (
    <NavContainer>
      <Horizen list={categoryTypes} title={'分类 (默认热门):'} handleClick={updateCategory} oldVal={category}></Horizen>
      <Horizen list={alphaTypes} title={'首字母:'} handleClick={updateAlpha} oldVal={alpha}></Horizen>
    </NavContainer>
  )
}

export default React.memo(Singers)
