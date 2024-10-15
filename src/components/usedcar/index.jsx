import React from 'react'
import BasicTable from './table'
import { Buttons, MotoTable } from '../../style'
import ContainedButtons from '../../button'

const UsedCarCom = () => {
  return (
    <MotoTable>
     <div>
      <h1> Used Car Page</h1>
     </div>
      <Buttons>
      <ContainedButtons/> 
      </Buttons>
      
      
      <BasicTable/>
    </MotoTable>
  )
}

export default UsedCarCom;