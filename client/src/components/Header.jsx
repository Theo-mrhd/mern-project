import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200">
        <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
            <Link to="/"><h1 className="font-bold">MERN PROJECT</h1></Link>
            <ul className="flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/sign-in">Sign In</Link></li>
            </ul>
        </div>
    </div>
  )
}
