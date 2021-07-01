import React, {useState} from 'react'
import './App.css';

const App = () => {
    const [value,setValue] = useState("");
    const handleClick = (e) => {
        setValue(value.concat(e.target.id));
    }
    const clear = () => {
        setValue("");
    }
    const del = () => {
        setValue(value.slice(0, value.length-1))
    }
    const equal = () => {
        try{
            setValue(eval(value).toString());
        } catch(error){
            setValue("Error");
        }

    }
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={value}/>
                </form>
                <div className="numpad">
                <button id="clear"onClick={clear}>Clear</button>
                <button id="del" onClick={del}>Del</button>
                <button id="/" onClick={handleClick}>/</button>
                <button id="7" onClick={handleClick}>7</button>
                <button id="8" onClick={handleClick}>8</button>
                <button id="9" onClick={handleClick}>9</button>
                <button id="*" onClick={handleClick}>&times;</button>
                <button id="4" onClick={handleClick}>4</button>
                <button id="5" onClick={handleClick}>5</button>
                <button id="6" onClick={handleClick}>6</button>
                <button id="+" onClick={handleClick}>+</button>
                <button id="1" onClick={handleClick}>1</button>
                <button id="2" onClick={handleClick}>2</button>
                <button id="3" onClick={handleClick}>3</button>
                <button id="-" onClick={handleClick}>-</button>
                <button id="0" onClick={handleClick}>0</button>
                <button id="." onClick={handleClick}>.</button>
                <button id="equal" onClick={equal}>=</button>
            </div> 
            </div> 
        </>
    )
}

export default App
