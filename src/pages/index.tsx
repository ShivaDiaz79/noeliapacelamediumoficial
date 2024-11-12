import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          ¡Bienvenido a mi proyecto Next.js con TypeScript y Tailwind CSS!
        </h1>
        <p className="text-gray-600 text-center">
          Esta es una página de inicio básica. Puedes comenzar a personalizarla desde aquí.
        </p>
        <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
          Comenzar
        </button>
      </div>
    </div>
  )
}

export default Home
