import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';
import GoogleForm from '@/components/forms/registerGoogle/RegisterGoogleForm';
import Divider from '@/components/ui/Divider';
import CredentialsForm from '@/components/forms/registerCredentials/RegisterCredentialsForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card variant="glass" className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Crear Cuenta</CardTitle>
          <CardDescription className="text-white/70">
            Únete a Inventra y comienza a gestionar tu inventario
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Google Register */}
          <GoogleForm />
          {/* Divider */}
          <Divider />

          {/* Registration Form */}
          <CredentialsForm />
          {/* Login Link */}
          <div className="text-center">
            <p className="text-white/70">
              ¿Ya tienes cuenta?{' '}
              <Link href="/login" className="text-white hover:underline font-medium">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}