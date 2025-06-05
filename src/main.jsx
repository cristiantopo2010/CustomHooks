import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FetchApp } from './HookFetch/FetchApp'
import { Contador } from './HookCounter/Contador'
import { FormsApp } from './HookFormulario/FormsApp'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchApp/>
    <hr />
    <Contador/>
    <hr />
    <FormsApp/>
  </StrictMode>,
)
