// server component for ssr
import LoginForm from "./login-form";
export default function loginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black bg-slate-200">
      <LoginForm/>
    </div>
  );
}
