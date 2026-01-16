import React, { useState } from 'react'
import './App.css'
import ImageHeader from './components/ImageHeader'
import { Input } from './components/Input';
import Button from './components/Button.tsx';
import type { Items } from './components/types/utils.ts';
import ItemList from './components/ItemList.tsx';

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, { title: inputValue, id: Date.now().toString() }]);
    setInputValue("");
  }


 
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <ImageHeader />

      <div className="w-87.5">
        <form className='mb-5' onSubmit={handleSubmit}>
          <Input type="text" inputValue={inputValue} setInputValue={setInputValue} />
          <Button className='bg-gray-700 font-mono font-black w-full p-2 text-lg'>Add</Button>
        </form>
        <div className='h-52 overflow-y-auto'>
          <ItemList items={items}  setItems={setItems}/>

        </div>
      </div>
    </div>
  )
}

export default App
