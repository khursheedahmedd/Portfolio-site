// import react from 'react';
import './Navbar.css';

export default function Navbar(props) {
    const { changeActiveTab } = props;

    const handleTabClick = (event, tabName) => {
        event.preventDefault(); // Prevent the default navigation behavior
        changeActiveTab(tabName); // Call the callback to change the active tab
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-purple" style={{ backgroundColor: props.themeColor, fontFamily: props.font }} >
            <a className="navbar-brand" href="http://localhost:3000/"
                onClick={(event) => handleTabClick(event, 'home')}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-purple-700 text-xl cursor-pointer dark:text-purple-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "2rem" }}>
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item mx-3 " >
                        <a className="nav-link " href="/resume"
                            onClick={(event) => handleTabClick(event, 'resume')}>
                            Resume
                        </a>
                    </li>
                    <li className="nav-item mx-3 ">
                        <a
                            className="nav-link"
                            href="/skills"
                            onClick={(event) => handleTabClick(event, 'skills')}
                        >
                            Skills
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="/projects"
                            onClick={(event) => handleTabClick(event, 'projects')}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link mx-3"
                            href="/blogs"
                            onClick={(event) => handleTabClick(event, 'blogs')}
                        >
                            Blogs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link mx-3"
                            href="/faq"
                            onClick={(event) => handleTabClick(event, 'faq')}
                        >
                            FAQ/Help
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link mx-3"
                            href="/contact"
                            onClick={(event) => handleTabClick(event, 'contact')}
                        >
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}