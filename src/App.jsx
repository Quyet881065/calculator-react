import './App.css'
import Calculator from './components/Calculator'
import { ThemeToggle } from './components/ThemeToggle'

function App() {

  return (
    <div className='grid place-items-center h-screen relative'>
      <div className='absolute top-5 right-5'>
        <ThemeToggle />
      </div>
      <Calculator />
    </div>
  )
}

export default App
