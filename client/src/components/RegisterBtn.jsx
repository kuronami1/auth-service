export default function RegisterBtn({ children = "Register" }) {
  return (
    <button type="submit" className="w-32 h-12 transition-all  duration-300 text-white text-xl font-semibold bg-sky-500 
        border-none rounded-xl shadow-md cursor-pointer hover:bg-sky-400 hover:scale-110 active:bg-sky-300">
      {children}
    </button>
  )
}
