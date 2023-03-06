
import { Navigate, Route, NavLink,Link } from "react-router-dom"
export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">useContext</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink className={({isActive})=>`nav-link${isActive?'':''}`}
        to="/">
            Home
        </NavLink>
        <NavLink className={({isActive})=>`nav-link${isActive?'':''}`}
        to="/about">
        Abouts 
        </NavLink>
        <NavLink className={({isActive})=>`nav-link${isActive?'':''}`}
        to="/login">
        LoginPage
        </NavLink>
        </ul>
    </div>
  </div>
</nav>
  )
}
