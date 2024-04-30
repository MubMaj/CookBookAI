import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <h2>i am Header</h2>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
    </div>
  )
}

export default Header
