import './App.css'
import TopNews from './StartPage/topNews'
import TopBanner from './StartPage/topBanner'
import MainSearch from './StartPage/mainSearch'
import MainBanner from './StartPage/mainBanner'
import BottomWeather from './StartPage/bottomWeather'
import BottomFrequent from './StartPage/bottomFrequent'
import BottomTv from './StartPage/bottomTv'
import BottomAir from './StartPage/bottomAir'
import BottomMap from './StartPage/bottomMap'


function App() {

  return (
    <div>
       <div className='header'>
        <TopNews /> 
        <TopBanner /> 
      </div>
      <MainSearch />
      <MainBanner />
      <div className='footer'>
        <div className='block__1'>
          <BottomWeather />
          <BottomFrequent />
        </div>
        <div className='block__2'>
          <BottomMap />
          <BottomTv />
        </div>
        <div className='block__3'>
          <BottomAir />
        </div>
      </div>
    </div>
   
  )
}
export default App
