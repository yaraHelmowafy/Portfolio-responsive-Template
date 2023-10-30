
import './intro.css'
import { init } from 'ityped'
import { useEffect ,useRef ,  Component} from 'react'



export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"]
    });
  }, []);
  return (
    <div className='intro' id="intro">
      <div className='left'>
        <div className="imageContainer">
          <img className='img' src='assets/profile.png' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2 className='h2'>Hi There , I'm  </h2>
          <h1 className='h1'>Yara Elmowafy</h1>
          <h3 className='h3'>Freelance <span className='span' ref={textRef} ></span></h3>
        </div>
        <a className='a' href='#portfolio'>
           <img className='img' src="assets/down.png" alt=''/>
        </a>
      </div>
    </div>
  )
}
