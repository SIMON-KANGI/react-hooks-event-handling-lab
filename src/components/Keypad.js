// Code Keypad Component Here

function Keypad (){
    const handleChange=(e)=>{
        e.preventDefault()
console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;