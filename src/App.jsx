import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Client from './Components/Client'
import Menu from './Components/Menu'

function App() {

  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [tab,setTab]=useState(["ok","lol"])
  let outputTab = []
  let tabMenu = ['COFFE', 'CAPPUCHINO', 'EXPRESSO', 'ICED']

  const getValue = (e) => {
    setInputValue(e.target.value)
  }

  const printValue = (e) => {
    e.preventDefault()

    // Check if exist dans le menu
    let trouv = false
    if (tabMenu.includes(inputValue)) {
      setOutput('Voila votre demande ' + inputValue)
      console.log('====================================');
      console.log(output);
      console.log('====================================');
      setTab("new")
      console.log(tab);
    } else {
      setOutput('Désolé ' + inputValue + ' n existe pas dans notre menu')
      console.log('====================================');
      console.log(output);
      console.log('====================================');
      setTab([output])
      console.log(tab)
    }

    setInputValue("")
  }
  return (
    <div className='page'>
      <Client printValue={printValue} getValue={getValue} inputVal={inputValue} choix= {tab} />
      <Menu tabMenu={tabMenu} />

    </div>
  )
}

export default App
