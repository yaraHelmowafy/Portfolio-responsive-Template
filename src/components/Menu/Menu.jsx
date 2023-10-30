import './menu.css'

export default function Menu({ menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")}>
       <ul className='ul'>
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#intro" className='a'>Home</a>
           </li>
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio" className='a'>Portfolio</a>
           </li>
           <li className='li' onClick={()=>setMenuOpen(false)}> 
            <a href="#works" className='a'>Works</a>
           </li>
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#testimonials" className='a'>Testimonials</a>
           </li>
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#contact" className='a'>Contact</a>
           </li>
       </ul>
    </div>
  )
}
