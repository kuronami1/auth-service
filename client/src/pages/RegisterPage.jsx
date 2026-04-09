import RegisterBtn from "../components/RegisterBtn";

export default function ResgisterPage() {
  return (
    <>
      <h1>Register</h1>
      <form method="post">
        <label>
          <span>Username</span>
          <input type="text" id="name" name="username" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" id="email" name="email" required />
        </label>
        <label>
          <span>Password</span>
          <input type="password" id="password" name="password" required />
        </label>
        <RegisterBtn />
      </form>
    </>
  )

}
