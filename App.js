
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import About from './components/About';
//import TextForm from './components/TextForms';
function App() { 
return(
  <>
   {/*<Navbar title="Navbarr" homeText="Home page"/>*/}
    <Navbar/>
   <div className="my-3">
  {/* <TextForm heading="Enter the text analyze"/>*/}
  <About/> 
</div>
</>
  );
}
export default App;
