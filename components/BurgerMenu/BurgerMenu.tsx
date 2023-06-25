import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function BurgerMenu() {
    const [isOpen, setOpen] = useState(false)
    return(
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} direction="right" duration={0.5} color="#17cf97" easing='ease-in-out'/>
    )
}

export default BurgerMenu;