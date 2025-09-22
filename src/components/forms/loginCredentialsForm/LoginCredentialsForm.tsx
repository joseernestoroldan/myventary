"use client";
import { signInWithCredentials } from "@/actions/authentication";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

const LoginCredentialsForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [actionState, formAction, isPending] = useActionState(
    signInWithCredentials,
    null,
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    if (actionState?.success) {
      router.push("/dashboard");
    }
  }, [actionState, router]);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-white"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-white"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={state.password}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
          placeholder="••••••••"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full" size="lg">
        Iniciar Sesión
      </Button>

      {actionState?.messages && actionState.success === false && (
        <div className="flex flex-col gap-2 text-center text-sm font-semibold text-white">
          {actionState.messages.map((message, index) => (
            <p className="rounded-lg bg-red-400/50 py-2" key={index}>
              {message}
            </p>
          ))}
        </div>
      )}

      {actionState?.messages && actionState.success === true && (
        <div className="flex flex-col gap-2 text-center text-sm font-semibold text-white">
          {actionState.messages.map((message, index) => (
            <p className="rounded-lg bg-green-400/50 py-2" key={index}>
              {message}
            </p>
          ))}
        </div>
      )}
      
 
    </form>
  );
};
export default LoginCredentialsForm;
