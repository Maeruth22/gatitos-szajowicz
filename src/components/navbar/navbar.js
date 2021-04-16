import './navbar.css'

export const Navbar = () => {
    return (
        <header className='navbar'>
            <h1 className=''>CATFOUR</h1>
            <ul>
                <li>
                    <a href=''>Home
                    </a>
                </li>
                <li>
                    <a href=''>Productos
                    </a>
                </li>
                <li>
                    <a href=''>Nosotros
                    </a>
                </li>
                <li>
                    <a href=''>Nuestros gatitos
                    </a>
                </li>
            </ul>
        </header>
    )
}