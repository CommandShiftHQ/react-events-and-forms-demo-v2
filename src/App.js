import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import EventsDemo from './components/EventsDemo/EventsDemo';
import FormDemo from './components/FormDemo/FormDemo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/events">Events Demo</NavLink>
          <NavLink to="/forms">Forms Demo</NavLink>
        </nav>

        <Routes>
          <Route path="/events" element={<EventsDemo />} />
          <Route path="/forms" element={<FormDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
