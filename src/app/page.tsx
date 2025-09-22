import LandingNavbar from "./serverComponents/navbar/LandingNavbar";
import Link from "next/link";
import { FaBox, FaChartLine, FaUsers, FaShieldAlt } from "react-icons/fa";

export default function HomePage() {
  const features = [
    {
      icon: FaBox,
      title: "Gestión de Inventario",
      description: "Controla tu stock de manera eficiente con herramientas avanzadas"
    },
    {
      icon: FaChartLine,
      title: "Reportes en Tiempo Real",
      description: "Visualiza el estado de tu inventario con dashboards interactivos"
    },
    {
      icon: FaUsers,
      title: "Colaboración en Equipo",
      description: "Trabaja con tu equipo de forma coordinada y eficiente"
    },
    {
      icon: FaShieldAlt,
      title: "Seguridad Avanzada",
      description: "Protege tu información con las mejores prácticas de seguridad"
    }
  ];

  return (
    <div className="min-h-screen">
      <LandingNavbar />
      
      {/* Hero Section */}
      <main className="max-w-8xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Gestiona tu Inventario con
            <span className="text-gradient-animated block">Inventra</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            La solución completa para el manejo eficiente de inventarios. 
            Controla, analiza y optimiza tu stock con herramientas profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105">
                Comenzar Gratis
              </button>
            </Link>
            <Link href="/login">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
                Ya tengo cuenta
              </button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="text-4xl text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para optimizar tu inventario?
          </h2>
          <p className="text-white/80 mb-8">
            Únete a miles de empresas que ya confían en Inventra
          </p>
          <Link href="/register">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:scale-105">
              Crear Cuenta Ahora
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
