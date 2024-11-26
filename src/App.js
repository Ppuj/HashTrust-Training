import './App.css';
import HelloWorld from './components/HelloWorld';
import Text from './components/Text'
import Button from './components/Button';
import InputText from './components/InputText';
import { useState } from 'react';
import Form from './components/Form';


function App() {
  let Label='Click me'
  const [name,setname]=useState('')
  const [displayname,setdisplayname]=useState('')
  function onClick(){
    setdisplayname(name)
    setname(' ')
    console.log('button clicked')
  }
  return (
    <div className="App">
      <HelloWorld/>
      <InputText placeholder={'Enter your Name'} value={name} handleChange={setname}/>
      <Button label={Label} onClick={onClick}/>
      <Text message={displayname}/>
      <Form/>
    </div>
  );
}

export default App;
