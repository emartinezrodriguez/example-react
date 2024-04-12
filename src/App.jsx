import UseStateComponent from './useState/UseStateComponent'
import UseEffectComponent from './useEffect/UseEffectComponent'
import FetchComponent from './fetch/FetchComponent'
// import './App.css'

function App() {
  return (
    <>
      <UseStateComponent />
      <UseEffectComponent userName={'Juan'} />
      <FetchComponent />
    </>
  )
}

export default App
