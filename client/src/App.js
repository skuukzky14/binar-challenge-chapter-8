import './App.css';
import { Sidebar, CreateForm, EditPlayer, FindPlayer} from './components'
import { useState } from 'react'

function App() {

  const [formState, setFormState] = useState('create')


  return (
    <div className='flex flex-row'>
      <Sidebar changeFormFunc={setFormState}/>
      {
        formState==='create'?<CreateForm/>
        :
        formState==='edit'?<EditPlayer/>
        :
        <FindPlayer/>
      }
    </div>
  );
}

export default App;
