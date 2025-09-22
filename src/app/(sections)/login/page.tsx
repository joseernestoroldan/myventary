import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Link from "next/link";
import Divider from "@/components/ui/Divider";
import LoginCredentialsForm from "@/components/forms/loginCredentialsForm/LoginCredentialsForm";
import LoginGoogleForm from "@/components/forms/loginGoogleForm/LoginGoogleForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card variant="glass" className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Iniciar Sesión</CardTitle>
          <CardDescription className="text-white/70">
            Accede a tu cuenta de Inventra
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Google Login */}
          <LoginGoogleForm />

          {/* Divider */}
          <Divider />

          {/* Email/Password Form */}
          <LoginCredentialsForm />

          {/* Register Link */}
          <div className="text-center">
            <p className="text-white/70">
              ¿No tienes cuenta?{" "}
              <Link
                href="/register"
                className="font-medium text-white hover:underline"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
