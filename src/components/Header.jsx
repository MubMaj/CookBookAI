import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-between mx-9">
        <h2 className="text-3xl font-bold">Cook Book AI</h2>
        <ul className="flex gap-5">
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
