import headshot from './assets/images/ChrisKelly.jif';
import serenitySounds from './assets/images/serenitySounds.jpg';
import reclaimed from './assets/images/reclaimed.jpg';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Karen M. Marks</h1>
      <h2>Bio</h2>
        {/* <h1>"Arran" Christopher Kelly, MEd</h1> */}
        <img src={headshot} className="head-shot" alt="Christopher Kelly Engage to Activate's CEO" />
        {/* <h2>Engage 2 Activate</h2>
        <p>
          Welcome to Christopher Kelly's Engagement Strategist new website
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Link
        </a>
        <Form />
        <h2>Serenity Sounds</h2>
        <img src={serenitySounds} className="serenity-sounds" alt="Christopher Kelly playing Serenity Sounds on a grand piano" />
        <p>
          Welcome to Serenity Sounds
        </p>

        <h2>Reclaimed</h2>

        <img src={reclaimed} className="reclaimed" alt="Christopher Kelly Engage to Activate's CEO" />
        <p>
          Welcome to Reclaimed
        </p>
      </header>
    </div>
  );
}

export default App;
