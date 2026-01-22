import { useState } from 'react';
import Card from './components/Card';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activities = [
    'Completó el curso de React avanzado',
    'Publicó un nuevo proyecto en GitHub',
    'Ganó la insignia de contribuidor',
    'Compartió un artículo sobre Tailwind',
    'Se unió a la comunidad de desarrolladores'
  ];

  return (
    <div className="min-h-screen bg-white p-8 space-y-12">

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 1: Caja con utilities básicas</h2>
        <div className="bg-zinc-200 p-6 rounded-lg shadow-md">
          <p className="text-base font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis labore ut? Quibusdam quis vero officiis</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 2: Layout con flexbox</h2>
        <div className="flex gap-4 items-center justify-center">
          <div className="w-[50px] h-[50px] bg-red-500"></div>
          <div className="w-[50px] h-[50px] bg-blue-500"></div>
          <div className="w-[50px] h-[50px] bg-green-500"></div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 3: Botón con estados</h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none">
          Lorem ipsum dolor sit amet.
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 4: Tipografía</h2>
        <div className="space-y-4">
          <p className="text-sm font-normal leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-lg font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-2xl font-bold leading-relaxed">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 5: Responsive</h2>
        <div className="bg-red-400 md:bg-blue-400 lg:bg-green-400 p-6 rounded-lg">
          <p className="text-sm md:text-lg lg:text-2xl font-bold text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum neque, molestia</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 6: Componente Card con imagen</h2>
        <div className="flex gap-6 flex-wrap">
          <Card 
            title="Lorem ipsum door"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum neque, molestia"
            image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          />
          <Card 
            title="Lorem ipsum door"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum neque, molestia"
            image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 7: Botón que cambia de clase dinámicamente</h2>
        <button 
          onClick={() => setIsActive(!isActive)}
          className={`${isActive ? 'bg-green-500' : 'bg-blue-500'} text-white px-6 py-3 rounded-lg transition-colors duration-300`}
        >
          {isActive ? 'Activo' : 'Inactivo'}
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 8: Lista de elementos con hover</h2>
        <ul className="space-y-2">
          <li className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
            Elemento 1 - Pasa el mouse por aquí
          </li>
          <li className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
            Elemento 2 - Pasa el mouse por aquí
          </li>
          <li className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
            Elemento 3 - Pasa el mouse por aquí
          </li>
          <li className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
            Elemento 4 - Pasa el mouse por aquí
          </li>
          <li className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
            Elemento 5 - Pasa el mouse por aquí
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 9: Navbar básica con responsive</h2>
        <nav className="bg-blue-500 p-4 rounded-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">
              Mi Logo
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">Inicio</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">Servicios</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">Contacto</a>
            </div>
          </div>
        </nav>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Ejercicio 10: Mini proyecto final - Página de perfil</h2>
        
        <nav className="bg-blue-600 p-4 rounded-lg mb-6 shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">Perfil</div>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">Inicio</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">Proyectos</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">Contacto</a>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-2">
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200 py-2">Inicio</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200 py-2">Proyectos</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200 py-2">Contacto</a>
            </div>
          )}
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-md">
          <div className="flex flex-col items-center">
            <img 
              src="https://static.wikia.nocookie.net/seriesspain/images/7/7e/Fermin_9.png/revision/latest?cb=20161126232012&path-prefix=es" 
              alt="FerminTrujillo"
              className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Manuel Vega</h3>
            <p className="text-gray-600 text-center mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ullam et.
            </p>
            
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isFollowing 
                  ? 'bg-gray-300 text-gray-700 hover:bg-gray-400' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {isFollowing ? 'Siguiendo' : 'Seguir'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Actividades recientes</h3>
          <ul className="space-y-3">
            {activities.map((activity, index) => (
              <li 
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <p className="text-gray-700">{activity}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
