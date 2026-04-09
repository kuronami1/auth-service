import RegisterBtn from "../components/RegisterBtn";

export default function ResgisterPage() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form className="flex flex-col gap-4 w-80 p-8 roundend-xl shadow-md">
          <h1 className="text-2xl font-bold mb-8">Register</h1>
          <label className="flex flex-col gap-1">
            <span className="text-md text-gray-600 font-bold">Username</span>
            <input type="text" className="px-2 py-1 border-indigo-300 border-2 rounded-md transition-colors duration-300 focus:border-indigo-500 outline-none" id="name" name="username" required />
          </label>
          <label className="flex flex-col gap-1">
            <span>Email</span>
            <input type="email" className="px-2 py-1 border-indigo-300 border-2 rounded-md transition-colors duration-300 focus:border-indigo-500 outline-none" id="email" name="email" required />
          </label>
          <label className="flex flex-col gap-1">
            <span>Password</span>
            <input type="password" className="px-2 py-1 border-indigo-300 border-2 rounded-md transition-colors duration-300 focus:border-indigo-500 outline-none" id="password" name="password" required />
          </label>
          <RegisterBtn />
        </form>

      </div>
    </>
  )

}
