
import { signInWithGoogle } from "@/actions/authentication"
import { Button } from "@/components/ui/Button"
import { FaGoogle } from "react-icons/fa"

const LoginGoogleForm = () => {
  return (
    <form action={signInWithGoogle}>
            <Button type="submit" variant="secondary" className="w-full" size="lg">
              <FaGoogle  className="text-lg" />
              Continuar con Google
            </Button>
          </form>
  )
}
export default LoginGoogleForm