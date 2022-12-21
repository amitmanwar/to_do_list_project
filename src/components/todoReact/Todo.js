import React, {useState} from 'react'
import './style.css'

const Todo = () => {

    const [inputdata, setInputData]=useState("");
    const [items, setItems]=useState([]);

    const addItem=()=>{
        if(! inputdata){
            alert("plz Fill the data")
        }else{
            const myNewInputData={
                id:new Date().getTime().toString(),
                name:inputdata,
            };
            setItems([...items,myNewInputData])
            setInputData("")
        }
    };

    // How to delete Items section

    // how to delete items section

    const deleteItem=(index)=>{
        const updatedItem=items.filter((curElm)=>{
            return curElm.id !==index;
        })

        setItems(updatedItem)
    }
    

    // removeAll function

    const removeAll=()=>{
        setItems([]);
    }


  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='./images/todo.svg'/>
                <figcaption>Add Your List here</figcaption>
            </figure>
            <div className='addItems'>
                <input type='text'
                placeholder= "Add Item" 
                className ="form-control"
                value={inputdata}
                onChange={(event)=>setInputData(event.target.value)}
                />
                <i className='fa fa-plus add-btn' onClick={addItem}></i>
            </div>
            <div className='showItems'>
                {items.map((curElm)=>{
                    return (
                        <div className='eachItem' key={curElm.id}>
                    <h3>{curElm.name}</h3>
                    <div className='todo-btn'>
                        <i className='far fa-edit add-btn'></i>
                        <i className='far fa-trash-alt add-btn'
                        onClick={()=>deleteItem(curElm.id)}
                        ></i>
                        </div>
                </div>

                    )
                })}
                

            </div>
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                    <span>Check List</span>

                </button>
            </div>

        </div>

    </div>
    </>
  )
}

export default Todo