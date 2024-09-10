
import './App.css'
import Header from './Header'
import {Parallax} from 'react-parallax'
import  a4 from './images/bike3.jpg'
import  a5 from './images/bike2.jpg'
import a6  from './images/bike6.jpg'
import Contents from './Contents'
import Contents1 from './Contents1'
import ImageSlider from './ImageSlider'

import "slick-carousel/slick/slick.css";  // Import slick styles
import "slick-carousel/slick/slick-theme.css";  // Import slick theme styles
import Foot from './Foot'

function App() {

  return (
    <div>
      <Header/>
      <div>
        <Parallax strength={300} bgImage={a4}>
          <div className="content">
            <div className="text-content">
          
            </div>
          </div>
        </Parallax>

        <Parallax strength={300} blur={{min:-15,max:15}} bgImage={a5}>
          <div className="content">
            <div className="text-content">
              
            </div>
          </div>
        </Parallax>

        <Parallax strength={-300} bgImage={a6}>
          <div className="content">
            <div className="text-content">
              
            </div>
          </div>
        </Parallax>

        
      </div>
      <Contents/>
      <Contents1/>
      <h2 className='p1  pt-4'>Bike On && OffRoad</h2>
      <ImageSlider/>
      <Foot/>
    </div>
  )
}

export default App
