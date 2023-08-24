import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profil</h1>
      <form className="flex flex-col gap-4">
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-slate-100"
        />
        <button className="p-3 text-white rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
