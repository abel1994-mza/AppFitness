const Button = ({text,onClick})=>{
 return (
    <>
     <button onClick={onClick} className="border rounded-sm px-6 py-3 hover:bg-primary border-amber-200 text-white">{text}</button>
 
    </>
    
 )   
}



export default Button