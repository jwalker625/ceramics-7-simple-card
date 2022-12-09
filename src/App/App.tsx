import reactLogo from '../assets/react.svg';
import '../assets/App.css';
import SimpleCard from './SimpleCard';

const LOREM_IPSUM_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {
  const item = {
    imageUrl: reactLogo,
    title: "Foo Bar",
    description: LOREM_IPSUM_TEXT
  }
  return (
    <div className="App">
      <SimpleCard item={item} />
    </div>
  );
}

export default App;
