import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Client from './Components/Client'
import Menu from './Components/Menu'

function App() {

  const [inputValue, setInputValue] = useState("");
  const [outputTab, setOutputTab] = useState([])
  let tabMenu = ['COFFE', 'CAPPUCHINO', 'EXPRESSO', 'ICED']

  const getValue = (e) => {
    setInputValue(e.target.value)

  }

  const printValue = (e) => {
    e.preventDefault()

    let trouv = false
    if (tabMenu.includes(inputValue)) {
      outputTab.push(['Voila votre demande ' + inputValue])

    } else {
      outputTab.push(['Désolé ' + inputValue + ' n existe pas dans notre menu'])

    }

    console.log('====================================');
    console.log(outputTab);
    console.log('====================================');

    setInputValue("")
  }
  return (
    <div className='page'>
      <Client printValue={printValue} getValue={getValue} inputVal={inputValue} choix={outputTab} />
      <Menu tabMenu={tabMenu} />

    </div>
  )
}

export default App
