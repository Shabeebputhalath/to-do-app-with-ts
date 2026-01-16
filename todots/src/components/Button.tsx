type Button={
  children:React.ReactNode | string;
  className?:string;
  onClick?:()=>void;
};

export default function Button({children,className ,onClick}:Button) {
  return (
    <div>
      <button className={className} onClick={onClick} type='submit'>
       {children}</button>
    </div>
  )
}
