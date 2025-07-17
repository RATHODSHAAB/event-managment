export function InputBox( {label , placeholder, onChange, type="text", icon } ) {
    return <div>
        <div className=" flex text-sm text-neutral-500 font-medium text-left py-2 items-center ">
          {icon}
        {label && <div className="ml-[6px]"> {label} </div> }
        </div>
        
        <input  type={type} onChange={onChange} placeholder={placeholder} className="w-full border-2 rounded-md py-2 px-2" />  
        
    </div>
}
