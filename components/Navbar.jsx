import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="/logo_syt.jpeg" alt="Sở Y Tế TP.HCM" className='logo' />
            <button className='menu'>
                <Menu />
            </button>
            <h1>AI phát hiện dấu hiệu vi phạm trong y tế</h1>
            <div className='admin'>
                <p>admin</p>
                <p>Chức vụ</p>
            </div>
        </div>
    );
}

export default Navbar;
