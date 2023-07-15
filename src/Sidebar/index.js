import { Link } from 'react-router-dom';
import './index.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to='my-portfolio-new/about-me'>
                <button className='sidebar-btn' />
            </Link>
        </div>
    )
}