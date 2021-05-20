import { Facebook, GitHub } from 'react-feather';

function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png" alt="KKI-NY logo" />
          <p>
            KKI-NY website: WIP.<br />
            Situs web untuk KKI-NY sedang dalam proses.
          </p>
          <a className="Facebook" href="https://www.facebook.com/kkinewyork"><Facebook /></a>
          <a className="Instagram" href="https://www.github.com/jaredtjahjadi/KKI-NY"><GitHub /></a>
        </header>
      </div>
    );
  }

  export default Home;