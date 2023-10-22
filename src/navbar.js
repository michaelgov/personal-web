import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <div className="container">
        <nav className="nav">
            <Link to="/" className="site-title">
                Mg.
            </Link>
                <ul>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/portfolio">Portfolio</CustomLink>
                    <CustomLink to="/resume">Resume</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
        </nav>
    </div>
}

function CustomLink( {to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( {path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}