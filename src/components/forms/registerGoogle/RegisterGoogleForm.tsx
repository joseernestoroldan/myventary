import { signInWithGoogle } from "@/actions/authentication"
import { Button } from "@/components/ui/Button"
import { FaGoogle } from "react-icons/fa"

const GoogleRegisterForm = () => {
  return (
    <form action={signInWithGoogle}>
    <Button type="submit" variant="secondary" className="w-full" size="lg">
      <FaGoogle className="text-lg" />
      Registrarse con Google
    </Button>
  </form>
  )
}
export default GoogleRegisterForm