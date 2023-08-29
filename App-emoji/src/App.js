import logo from './logo.svg';
import './App.css';
import sorrindo from './img/sorrindo.png'
import feliz from './img/feliz.jpg'
import festa from './img/festa.jpg'
import tango from './img/tango.png'

function App() {
  return (
    <div className="App">
      <h1> Hello, World! </h1>
      <img src={sorrindo} title='Sorrindo' height='100px' hidth='100px'/>
      <p>Clique no emoji para exibir o nome dele!</p>
      <img src={feliz} title='Alegre' height='40px' width='40px' hspace='40'/>
      <img src={festa} title='Festa' height='40px' width='40px' hspace='40'/>
      <img src={tango} title= 'Dançando' height='40px' width='40px' hspace='40'/>

    </div>
  );
}

export default App;
