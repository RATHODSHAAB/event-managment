export function InputBox( {label , placeholder } ) {
    return <div>
        <div className="text-sm text-neutral-500 font-medium text-left py-2">
        {label}
        </div>
        <input placeholder={placeholder} className="w-full border-2 rounded-md py-2 px-2" >  
        </input>
    </div>
}