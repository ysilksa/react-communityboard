import './App.css';
import Card from './components/Card';

function App() {

  return (
    <div className="whole-page">
      <section className='header'>
        <h1>Little Italy Bites</h1>
        <p>Not my images.</p>
      </section>
      <section className="image-grid">
        {/* row 1 */}
        <Card
          imageLink="/InsomniaCookies.png"
          name="Insomnia Cookies"
          description="1335 W Taylor St"
        />
        <Card
          imageLink="/MariosItalianLemonade.png"
          name="Mario's Italian Lemonade"
          description="1068 W Taylor St"
        />
        <Card
          imageLink="/GathersTeaBar.png"
          name="Gathers Tea Bar"
          description="1214 W Taylor St"
        />

        {/* row 2 */}
        <Card
          imageLink="/PapaJohns.png"
          name="Papa John's"
          description="1151 W Taylor St"
        />
        <Card
          imageLink="/Carms.png"
          name="Carm's"
          description="1057 W Polk St"
        />
        <Card
          imageLink="/Kurimu.png"
          name="Kurimu"
          description="1159 W Taylor St"
        />

        {/* row 3 */}
        <Card
          imageLink="/Overlay.png"
          name="Overlay"
          description="1411 W Taylor St"
        />
        <Card
          imageLink="/Pompei.png"
          name="Pompei Restaurant"
          description="1531 W Taylor St"
        />
        <Card
          imageLink="/Tuscany.png"
          name="Tuscany on Taylor"
          description="1014 W Taylor St"
        />

        {/* row 4 */}
        <Card
          imageLink="/LivingWaterTeaHouse.png"
          name="Living Water Tea House"
          description="1453 W Taylor St"
        />
        <Card
          imageLink="/PeanutPark.png"
          name="Peanut Park"
          description="1359 W Taylor St"
        />
        <Card
          imageLink="/TwoShadesCafe.png"
          name="Two Shades Cafe"
          description="1152 W Taylor St"
        />
      </section>
    </div>
  )
}

export default App;
