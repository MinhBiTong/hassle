import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/auth/AuthProvider'
import { ToastProvider } from './components/ToastProvider'

function App() {

  return (
    <BrowserRouter> 
      <AuthProvider> 
        <ToastProvider />
        <AppRoutes /> 
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
