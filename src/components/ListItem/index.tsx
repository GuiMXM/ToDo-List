import React, { MouseEventHandler, useState } from 'react'
import * as C from './styles'
import {Item} from "../../types/item"
import { TiDeleteOutline } from 'react-icons/ti';
type Props = {
  item:Item;
  deleteItem: MouseEventHandler;
}

const ListItem = ({item,deleteItem}: Props) => {

  const [isChecked,setIsChecked] = useState(item.done)

  return (
    
      
      <C.Container done={isChecked}>
        <input
         type="checkbox"
         checked={isChecked}
         onChange={e=> setIsChecked(e.target.checked)} />
        <label>{item.name}</label>
        <div className='delete' onClick={deleteItem}>
          <TiDeleteOutline   />
        </div>
      </C.Container>
   
  )
}

export default ListItem