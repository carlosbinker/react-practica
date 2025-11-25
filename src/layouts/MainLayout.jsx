import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export const MainLayout = () => {
    return (
        <>
            <Header />
            {/* <h1>Banner</h1> --> acá se puede poner un h1 */}
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </>);
};