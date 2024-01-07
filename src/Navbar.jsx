import { Link } from "react-router-dom"
function Navbar() {

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">Bea Strobel</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
           <CustomLink to="/">About</CustomLink>
           <CustomLink to="/portfolio">Portfolio</CustomLink>
           <CustomLink to="/contact">Contact</CustomLink>
           <CustomLink to="/resume">Resume</CustomLink>
        </ul>
        </div>
        </nav>
)
}

function CustomLink({ to, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className={path === to ? "nav-item active" : "nav-item"}>
        <Link class="nav-link" to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}

export default Navbar;