import { Link } from "react-router-dom"
import Botton from "./Botton"


const Header = () => {
    return (
        <header className="w-full absolute z-10 ">
            <nav className="max-width flex justify-between items-center px-6 py-4">
                <Link to={"/"} className="cursor-pointer">
                    <img src="/bmw.png" alt="car-logo" width={50} />
                </Link>

                <Botton title="Kaydol" designs="min-w-[15px]" />
            </nav>
        </header>
    )
}

export default Header
