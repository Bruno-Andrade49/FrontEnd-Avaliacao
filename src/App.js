import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './Routes/AppRoutes';
import { AuthProvider } from "./Context/AuthContext.jsx";



function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
