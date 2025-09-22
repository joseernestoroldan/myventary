import { MdOutlineLogin as LoginIcon } from "react-icons/md";
import { CgProfile as ProfileIcon } from "react-icons/cg";
import Link from "next/link";
import { auth } from "@/server/auth";

const LandingNavbar = async () => {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <nav className="max-w-8xl mx-auto w-full px-4 py-6 ">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-start">
          <h1 className="text-gradient-animated text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Inventra
          </h1>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link href="/login">
              <button className="flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-105">
                <LoginIcon className="text-lg" />
                <span>Iniciar Sesión</span>
              </button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <button className="flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-105">
                <ProfileIcon className="text-lg" />
                <span>Dashboard</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
