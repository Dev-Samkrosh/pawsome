import NextAuth from 'next-auth'; // Importación de NextAuth para gestionar la autenticación
import GoogleProvider from 'next-auth/providers/google'; // Importación del proveedor de autenticación de Google
import { MongoDBAdapter } from "@auth/mongodb-adapter"; // Importación del adaptador de MongoDB para NextAuth
import clientPromise from '@/lib/mongodb'; // Importación de la conexión a la base de datos MongoDB

export default NextAuth({
  providers: [
    // Configuración del proveedor de autenticación de Google
    GoogleProvider({
      clientId: process.env.GOOGLE_ID, // ID de cliente de Google para la autenticación OAuth
      clientSecret: process.env.GOOGLE_SECRET // Clave secreta de cliente de Google para la autenticación OAuth
    }),
  ],
  adapter: MongoDBAdapter(clientPromise), // Configuración del adaptador de MongoDB para almacenar la información de sesión
});
