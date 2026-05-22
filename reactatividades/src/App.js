import './App.css'
import Card from './components/card'

function App() {

  return (
    <div className='body'>
      <Card nome="Barletta" imgLink="https://s2-ge.glbimg.com/HilqBPmrDSYGYp_tQQLTxDS9Ovs=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/h/B/rXgZwSTbeYakDUMh0eCQ/whatsapp-image-2024-05-11-at-18.56.27.jpeg" posição="Ponta Direita" desc="Melhor ponta direita do Nordeste, canhotinha mágica com a 30"/>
      <Card nome="Zé Lucas" imgLink="https://s2-ge.glbimg.com/yxhKbs6z-6mDE_YdujLHG3n0j3s=/0x0:1259x785/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/e/B/wb11k9QDmtpE3TKSGTBA/captura-de-tela-2025-12-01-085025.png" posição="Volante" desc="Futuro da seleção"/>
      <Card nome="Felipinho" imgLink="https://s2-ge.glbimg.com/uJ513moKkxyiugwBNNmAqdts4HE=/0x0:1600x1066/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/9/r/0IkBD8RBmQwBe0yAUlhA/whatsapp-image-2024-10-24-at-22.18.22.jpeg" posição="Lateral Esquerdo" desc="Decisivo, rápido que nem bala"/>
      <Card nome="Perotti" imgLink="https://www.diariodepernambuco.com.br/_midias/jpg/2026/04/02/1200x800/1_whatsapp_image_2026_04_01_at_20_46_56___co__pia-871197.jpeg" posição="Centroavante" desc="O Ronaldo Fenômeno do Nordeste"/>
      <Card nome="Thiago Couto" imgLink="https://sportrecife.com.br/wp-content/uploads/2026/03/55145031885_d074f3e23c_o-1024x683.jpg" posição="Goleiro" desc="Paredão da ilha"/>
    </div>
  )
}

export default App

