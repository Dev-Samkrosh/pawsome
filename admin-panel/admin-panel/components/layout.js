import { useSession, signIn } from "next-auth/react"; // Importación de funciones relacionadas con la sesión de usuario
import Nav from "../components/nav"; // Componente de navegación
import Logo from "./Logo"; // Componente del logo
import { useState } from "react"; // Importación del hook useState de React

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false); // Estado para mostrar/ocultar la navegación
  const { data: session } = useSession(); // Obtener la sesión actual

  // Si no hay sesión, se muestra el botón para iniciar sesión con Google
  if (!session) {
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
        <div className='text-center w-full'>
          <button onClick={() => signIn('google')} className='bg-white p-2 px-4 rounded-lg'>Ingresa con Google</button>
        </div>
      </div>
    );
  }

  // Si hay sesión, se muestra la estructura del layout con la barra de navegación y el contenido
  return (
    <div className="bg-bgGray min-h-screen">
      <div className="md:hidden flex items-center p-4">
        {/* Botón para mostrar la navegación en pantallas pequeñas */}
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo /> {/* Componente del logo */}
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} /> {/* Componente de navegación */}
        <div className="flex-grow p-4">
          {children} {/* Contenido principal */}
        </div>
      </div>
    </div>
  );
}

