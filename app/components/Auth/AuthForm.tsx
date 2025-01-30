interface AuthFormProps {
  type: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ type, onSubmit }: AuthFormProps) => (
  <form onSubmit={onSubmit}>
    {type === "signup" && <input type="text" placeholder="Name" required />}
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    {type === "signup" && (
      <input type="password" placeholder="Confirm Password" required />
    )}
    <button type="submit">{type === "login" ? "Log In" : "Sign Up"}</button>
  </form>
);

export default AuthForm;
