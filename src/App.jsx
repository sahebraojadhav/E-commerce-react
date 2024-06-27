import './App.css'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='app-wrapper'>
      <Header color="light" light={true}  expand="md" container="md" fixed="top" />
      <div  style={{marginTop:'100px'}}>
        Some content
      </div>
      <Footer/>
    </div>
  )
}

export default App
