import HomePage from '../pages/HomePage'
import MainNav from '../components/MainNav'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNav />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}

export default DefaultLayout