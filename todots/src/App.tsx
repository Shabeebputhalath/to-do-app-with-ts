import React, { useState } from 'react'
import './App.css'
import ImageHeader from './components/ImageHeader'

type Items = {
  title: string;
  id: string;
}
function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
   
  const handleSubmit = (event:React.FormEvent)=>{
    event.preventDefault();
    setItems((prev)=> [...prev, {title:inputValue,id:Date.now().toString()}]);
    setInputValue("");
  }
  const handleDelete =(id:string)=>{
    setItems((prev)=> prev.filter((data)=> data.id !== id));
  }
  return (
  <div className='h-screen flex flex-col justify-center items-center '>
    <ImageHeader />

    <div className="w-87.5">
      <form className='mb-5' onSubmit={handleSubmit}>
        <input className='w-full p-2 rounded-sm mb-2 bg-gray-800' type="text"
        value={inputValue}  
        onChange={(event)=> setInputValue(event.target.value)}/>
        <button className='bg-gray-700 font-mono font-black w-full p-2 text-lg' type='submit'>Add</button>
      </form>
      <div className='h-52 overflow-y-auto'>
        {items.map(data=>(
          <div
          key={data.id} className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 rounded-sm py-2'>
          <p className='text-blue-200 font-mono'>{data.title}</p>
          <button onClick={()=>handleDelete(data.id)}>
            <svg 
       xmlns="http://www.w3.org/2000/svg" 
       width="20"  
       height="20" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-slate-500 group-hover:text-red-600"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
         </svg>
          </button>
        </div>
        ))}
        
      </div>
    </div>
  </div>
  )
}

export default App
