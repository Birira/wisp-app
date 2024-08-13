
import About from './Components/About';
import ImageList from './Components/ImageList';
import Nav from './Components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">Inicio</a>
                </div> */}

function App() {

  return (
    <>
      <div className='bg-light'>
        <Nav />
        <ImageList />
      </div>
      <div>
        <About />
      </div>
    </>
  )
}

export default App;
