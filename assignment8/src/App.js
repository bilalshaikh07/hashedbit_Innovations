import React, { useEffect, useState } from 'react'
import './App.css'




function App() 
{


  const [inputData, setInputData] = useState("");
  const[items, setItems] = useState(getData());
  
  function getData(){
    const list = localStorage.getItem('mytask');
    if(list){
      return JSON.parse(list);
    }
    else{
      return [];
    }
  }

  function addItem()
  {
    if(!inputData ){
      alert("Please Enter some data");
    }
    else{

      const newData ={
        id: new  Date().getTime().toString(),
        name : inputData
      }




      setItems([ ...items, newData ]);
      setInputData("");
    }

  }

  function deleteAll()
  {
    setItems([]);
  }

  useEffect(()=>{
    localStorage.setItem('mytask',  JSON.stringify(items))
  },[items])


  function deleteItem(index){
      const updatedList = items.filter((curElem)=>{
        return curElem.id !== index;
      })

      setItems(updatedList);

  }


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
            <h2> To Do list </h2>
            <div className='inp'>

            <input type="text" value={inputData} placeholder="Task" onChange={(e)=> setInputData(e.target.value)}/>
            <i className="fa fa-plus" onClick={addItem}></i>
            </div>

            <div className="list-item">
                <ul>
                  {
                    items.map((curElem, index)=>{
                      return(
                        <li key={index}>{index +1} {curElem.name} <span> <i className="fa fa-trash " onClick={()=>deleteItem(curElem.id)}></i></span></li>
                      )
                    })
                  }
                  
                </ul>

                <button onClick={deleteAll} className="btn btn-primary btn-xs">Delete All</button>

            </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
