import "./App.css";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <header className="header">
          <a href="/" className="logo-container">
            <img src="./logo.png" alt="" className="logo" />
          </a>
        </header>
        <div className="main">
          <div className="intro">
            <h1 className="intro-heading">Global Banking System For Everone</h1>
            <p className="intro-subheading">
              You can set up virtual bank accounts in USD to effortlessly accept
              payments from around the world.
            </p>
          </div>
        </div>
        <div className="download-btns">
          <button className="android-btn download-btn">
            <span className="android-logo">
              <IoLogoAndroid />
            </span>
            <span className="btn-text">Download</span>
          </button>
          <button className="ios-btn download-btn">
            <span className="android-logo">
              <FaApple />
            </span>
            <span className="btn-text">Download</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
