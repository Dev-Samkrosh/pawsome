import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// Importamos las los adaptadores de MongoDB y el wrapper creado para la conexión
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from '@/lib/mongodb'


export default NextAuth({
  providers: [
    // OAuth Google, para iniciar sesión con Google

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

  ],

  adapter: MongoDBAdapter(clientPromise),
  
})