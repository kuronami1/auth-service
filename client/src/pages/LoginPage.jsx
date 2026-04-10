export default function LoginPage() {
  return (
    <>
      <div>
        <h1>WELCOME BACK</h1>
        <p>Enter your email and password to access your account</p>
        <form>
          <label for="">
            <span>Email</span>
            <input type="text" className="" name="email" value="" />
          </label>
          <label for="">
            <span>Password</span>
            <input type="text" className="" name="pwd" value="" />
          </label>
          <label for="">
            <span>Remember me</span>
            <input type="checkbox" name="remember_me" value="" />
          </label>
          <span><a className="" href="#">Forgot Password</a></span>
          // <button type=""></button> ADD SIGN IN BTN
        </form>
        // ADD OUATH BTN
        <p>Don&apos;t have an account? <span><a href="">Sign up</a> </span></p>
      </div>
    </>
  )
}
