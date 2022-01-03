import React from 'react'
import '../App.css'
function Client({ choix, getValue, printValue,inputVal }) {
    return (
        <div className='left'>
            <form onSubmit={printValue} >
                <h1>Client</h1>
                <p>je veux : </p>
                <input onChange={getValue} type="text" value={inputVal}></input>
                <button>Demander</button>
            </form>
            <h2>Serveur :</h2>
            <div>
           
             {choix.map((ele)=> (<p key={ele}> {ele} </p>))} 
            </div>
        </div>
    )
}

export default Client
