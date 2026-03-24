import coinImg from '../../../assets/dollar-1.png'
import navLogo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex flex-col sm:flex-row container mx-auto">
            <div className="flex-1">
                <img src={navLogo} alt="" />
            </div>
            <div className="flex items-center gap-4">
                <a href="/home">Home</a>
                <a href="/fixture">Fixture</a>
                <a href="/teams">Teams</a>
                <a href="/schedules">Schedules</a>
                <button className="btn btn-ghostflex justify-center items-center gap-2">
                    <span className='font-bold text-xl'>0 Coin</span>
                    <img src={coinImg} alt="coin currency logo" />
                </button>
            </div>
        </div>
    );
}

export default Navbar;