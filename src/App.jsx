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
          info="Cookie place open until late"
        />
        <Card
          imageLink="/MariosItalianLemonade.png"
          name="Mario's Italian Lemonade"
          description="1068 W Taylor St"
          info="Seasonal italian ice stand"
        />
        <Card
          imageLink="/GathersTeaBar.png"
          name="Gathers Tea Bar"
          description="1214 W Taylor St"
          info="Best matcha in Chicago"
        />

        {/* row 2 */}
        <Card
          imageLink="/PapaJohns.png"
          name="Papa John's"
          description="1151 W Taylor St"
          info="Pizza place"
        />
        <Card
          imageLink="/Carms.png"
          name="Carm's"
          description="1057 W Polk St"
          info="Best fries in the area"
        />
        <Card
          imageLink="/Kurimu.png"
          name="Kurimu"
          description="1159 W Taylor St"
          info="Asian food themed ice cream"
        />

        {/* row 3 */}
        <Card
          imageLink="/Overlay.png"
          name="Overlay"
          description="1411 W Taylor St"
          info="Cute boba place"
        />
        <Card
          imageLink="/Pompei.png"
          name="Pompei Restaurant"
          description="1531 W Taylor St"
          info="Classy restaurant and bakery"
        />
        <Card
          imageLink="/Tuscany.png"
          name="Tuscany on Taylor"
          description="1014 W Taylor St"
          info="Italian restaurant with gorgeous interior"
        />

        {/* row 4 */}
        <Card
          imageLink="/LivingWaterTeaHouse.png"
          name="Living Water Tea House"
          description="1453 W Taylor St"
          info="Traditional Chinese milk tea store"
        />
        <Card
          imageLink="/PeanutPark.png"
          name="Peanut Park"
          description="1359 W Taylor St"
          info="Italian joint with great cocktails"
        />
        <Card
          imageLink="/TwoShadesCafe.png"
          name="Two Shades Cafe"
          description="1152 W Taylor St"
          info="Cozy cafe"
        />
      </section>
    </div>
  )
}

export default App;
