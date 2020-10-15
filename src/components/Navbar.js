import React, {useState} from 'react'

//Menu Barra

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
             <div className="navbar-caontainer">

              <img src='./images/barlogo.png'/>
               <i className='fab fa-typo3'/>
                 <div className='menu-icon' onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                     </div>
                 </div>   
            </nav>
        </>
    );
}

export default Navbar
