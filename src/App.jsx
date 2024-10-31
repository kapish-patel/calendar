import { RouterProvider } from 'react-router-dom'
import AppRouter from './AppRouter'

function App() {
  return (
    <div className='flex font-poppins w-full h-screen'>
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App