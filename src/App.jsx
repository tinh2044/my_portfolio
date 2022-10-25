import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Banner, Contact, Footer, Navbar, Projects, Skills } from './components';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        toast('Welcome to my web side!', {
            className: 'toast-message',
            autoClose: 4000,
        });
    }, []);
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />

            <ToastContainer
                position="top-right"
                theme="colored"
                // toastClassName="lg:w-60 w-28"
                newestOnTop={true}
            />
        </div>
    );
}

export default App;
