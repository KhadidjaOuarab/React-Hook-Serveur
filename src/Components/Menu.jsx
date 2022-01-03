import React from 'react'

function Menu({ tabMenu }) {
    return (
        <div>
            <h1>Café</h1>
            <h2>Menu :</h2>
            <div>
                {tabMenu.map((ele) => (<p key={ele}> {ele} </p>))}

               
            </div>

        </div>
    )
}

export default Menu
