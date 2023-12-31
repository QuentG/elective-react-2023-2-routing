import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"
import '../assets/navbar.css'
import { Fragment, useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { LOGOUT } from "../reducers/AuthReducer"

const Layout = () => {
    const { state, dispatch } = useContext(AuthContext)

    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                {state.isLogged ? (
                    <Fragment>
                        <NavLink to='/settings'>Settings</NavLink>
                        <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
                    </Fragment>
                ) : (
                    <NavLink to='/login'>Login</NavLink>
                )}
            </nav>

            <Outlet />
        </div>
    )
}

export default Layout