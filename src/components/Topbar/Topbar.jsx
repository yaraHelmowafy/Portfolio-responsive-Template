import './topbar.css'
import EmailIcon from '@mui/icons-material/Email';
import Person from '@mui/icons-material/Person';
export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar '+ (menuOpen && "active") }>
       <div className="wrapper">
        <div className="left">
        <a href="#intro" className='logo'>Intro</a>
        <div className="itemContainer"> 
            <Person className='icon'/>
            <span className='spanleft'>
              +20 012 567 4590
            </span>
            </div>
            <div className="itemContainer">
            <EmailIcon className='icon'/>
            <span className='spanleft'>
              yaramnH0@gmail
            </span> 
         </div>
        
       </div>
       
       <div className="right">
           <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span id='spanright' className='line1'></span>
            <span id='spanright' className='line2'></span>
            <span id='spanright' className='line3'></span>
           </div>
       </div>
       </div>
    </div>
  )
}
