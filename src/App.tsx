
import { useState } from "react";
import * as C from "./App.styles"
import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";
import { Item } from './types/item'


function App() {

  const [list,setList] = useState<Item[]>([]);
  
  const handleAddTask = (taskName:string) => {
    
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done:false
    })
    setList(newList);
    console.log(list)
  }

    function removeTask(index:number) {
      
      const updatedList = list.filter((item,id)=> id !== index)

      setList(updatedList)
      
      console.log(updatedList)
      ;
  }

  return (
      <C.Container>
          <C.Area>
            <C.Header>Task List</C.Header>

            <AddArea onEnter={handleAddTask} />

            {list.map((item,index)=>(
              
                <ListItem key={index} item={item} deleteItem={()=> {removeTask(index)}} /> 

               )
            )}
          </C.Area>
      </C.Container>
  );
}

export default App;
