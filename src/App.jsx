import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Banner, Contact, Footer, Navbar, Projects, Skills } from './components';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
