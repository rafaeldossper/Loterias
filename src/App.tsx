import { ContextoProvider } from "./contexts/Contexto";
import Routes from './routes';
import "./css/estilos.css"


function App() {
  return <ContextoProvider>
    <Routes/>
  </ContextoProvider> 
}

export default App;

