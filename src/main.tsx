// Node Moduls
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// styles
import '@/index.css'

//components
import {App} from '@/App.tsx'
import { Sidebar } from 'lucide-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
    <Sidebar/>
    <App />

    </div>

  </StrictMode>,
)
