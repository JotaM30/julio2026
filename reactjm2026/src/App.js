
import './App.css';

function App() {
  
  const curso = "Desenvolvimento de Sistemas";
  const hobby = "Jogar videogame";
  const filme = "Capitão América: Guerra Civil";

  return (
    <div className="App" style={{ color: 'red', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>João Miguel</h1>
      
     
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVCKa8EuoQa0-Lc-Xop9qh1Kuo3md0Z-wkg&s" 
        alt="Perfil" 
        style={{ width: '500px', display: 'block', margin: '15px auto' }} 
      />

      
      <div className="dados-perfil">
        <p><strong>Curso:</strong> {curso}</p>
        <p><strong>Hobby:</strong> {hobby}</p>
        <p><strong>Filme Favorito:</strong> {filme}</p>
      </div>

      {/* 4. 1 Botão */}
      <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
        Clique Aqui
      </button>
    </div>
  );
}

export default App;