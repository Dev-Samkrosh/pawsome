import { useSession, signIn, signOut } from "next-auth/react" // Importamos los metodos para la autenticación OAuth


// Función Home, para la creación de la pantalla de inicio de sesión del panel de administrador.

export default function Home() {
  const { data: session } = useSession() // Pedimos los datos para el inicio de sesión OAuth
  
  // En caso de no haber inicio de sesión, se muestra la pantalla de inicio de sesión
  if (!session) {
    return (
      <div className = 'bg-blue-900 w-screen h-screen flex items-center'> 
        <div className = 'text-center w-full'>
          <button onClick={ () => signIn('google')} className = 'bg-white p-2 px-4 rounded-lg'>Ingresa con Google</button>
        </div>
      </div>
    )
  }
  return (
    <div>Se inició la sesión como {session.user.email}</div>
  )
}
