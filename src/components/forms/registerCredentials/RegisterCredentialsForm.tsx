"use client";
import { createAccount } from "@/actions/authentication";
import { Button } from "@/components/ui/Button";
import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CredentialsRegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [actionState, formAction, isPending] = useActionState(
    createAccount,
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
      router.push("/login");
    }
  }, [actionState, router]);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-white"
        >
          Nombre completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
          placeholder="Tu nombre completo"
          value={state.name}
          onChange={handleChange}
        />
      </div>
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
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
          placeholder="tu@email.com"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div className="relative">
        <div className="absolute bottom-3 right-2 flex  items-center justify-center">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-white/50 hover:text-white focus:outline-none"
          >
            {showPassword ? (
              <FaEyeSlash className="text-lg" />
            ) : (
              <FaEye className="text-lg" />
            )}
          </button>
        </div>
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
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
          placeholder="••••••••"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <div className="relative">
        <div className="absolute bottom-3 right-2 flex  items-center justify-center">
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="text-white/50 hover:text-white focus:outline-none"
          >
            {showConfirmPassword ? (
              <FaEyeSlash className="text-lg" />
            ) : (
              <FaEye className="text-lg" />
            )}
          </button>
        </div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-white"
        >
          Confirmar contraseña
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none"
          placeholder="••••••••"
          value={state.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="primary" className="w-full" size="lg">
        Crear Cuenta
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
export default CredentialsRegisterForm;
