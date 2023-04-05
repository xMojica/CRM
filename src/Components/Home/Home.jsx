
import './../../Styles/Home/Home.css'

import Header from './Header'
import Avatar from './Avatar'
import Buscador from './Buscador'

const Home = () => {
  const nombre = localStorage.getItem("nombre"); // Local storage para que no se acceda a otro
  const genero = localStorage.getItem("genero"); // usuario desde los parametros
  
  return (
    <>
      <Header nombre={nombre} />
      <Avatar genero={genero} />
      <Buscador />
    </>
  );
}

export default Home;

