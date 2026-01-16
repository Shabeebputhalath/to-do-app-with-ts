import type { ReactSetState } from './types/utils';
type Input={
    inputValue:string;
    setInputValue:ReactSetState<string>;
    type: "radio" |"checkbox" | "text" | "number" | "password" | "email" | "date" | "file" | "tel" | "url" | "search" | "hidden" | "submit" | "reset" | "button" | undefined;
}

export const Input=({type,inputValue,setInputValue}: Input)=> {
  return (
    <div>
      <input className='w-full p-2 rounded-sm mb-2 bg-gray-800' 
        type={type}
        value={inputValue}  
        onChange={(event)=> setInputValue(event.target.value)}/>
    </div>
  )
}

export default Input