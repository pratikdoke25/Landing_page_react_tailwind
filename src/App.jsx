
import './App.css'
// eslint-disable-next-line no-unused-vars
import { Hero,Crashcourse, CountdownTimer,FeaturesSection ,AboutPage,Form} from './components'
function App() {
  const targetDate = new Date('2024-02-20');
  return (
    <>
      <Hero/>
      <div className=' container mx-auto py-4'>
      <Crashcourse/>
      </div>
      
      <div className="container mx-auto py-4">
      <CountdownTimer targetDate={targetDate} />
    </div>
      <FeaturesSection/>
      <AboutPage/>
      <Form/>
    </>
  )
}

export default App
