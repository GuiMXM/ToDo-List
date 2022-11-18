import React, {  useState } from 'react'
import  * as C from './styles'
import { MdOutlineAddCircle } from "react-icons/md";

type Props = {
    onEnter: (taskName: string) => void
}

const AddArea = ({onEnter}: Props) => {

    const [inputText,setInputText] = useState('');

    const handleKeyUp = (e:any) => {
        console.log(inputText)

        if((e.code === "NumpadEnter" || e.code ===  "Enter") && inputText !== '') {
            onEnter(inputText);
            setInputText('');
          
        }

    }
    const handleTaskButton = () => {
      if(inputText !== ''){
          onEnter(inputText);
          setInputText('')
      }
    }

  return (
    <C.Container>
        <input
         type="text"
         value={inputText}
         placeholder='Add your tasks'
         onChange={e => setInputText(e.target.value)}
         onKeyUp={handleKeyUp}
         />
       <div className='image'>
        <MdOutlineAddCircle onClick={handleTaskButton}/>
      </div> 
    </C.Container>
  )
}

export default AddArea