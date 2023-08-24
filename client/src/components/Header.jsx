import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-bold">MERN PROJECT</h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">
              {currentUser ? <p>Profil</p> : <p>Sign In</p>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
