import Login from '../pages/Login'
import Registrate from '../pages/Registrate'
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'
import Acercade from '../pages/Acercade'
import Servicios from '../pages/Servicios'


export let enrutador = [
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/Registrate',
        element: <Registrate />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Contacto',
        element: <Contacto/>
    },
    {
        path: '/Acercade',
        element: <Acercade/>
    },
    {
        path: '/Servicios',
        element: <Servicios/>
    }
]


