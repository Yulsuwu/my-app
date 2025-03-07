import logo from './logo.svg';
import './App.css';
import './App.css';
import {Box, Container, Link, Typography} from "@mui/material";
import MenuAppBar from './components/MenuAppBar'
function Copyright(){
    return(
        <Typography variant="h4" component="h1" sx={{mb: 2}}>
            Copyright
            <Link href="https://github.com/Yulsuwu">
                {' Git '}
            </Link>
        </Typography>

    );
}

function MyButton() {
  return (
      <button>Soy un botón</button>
  );
}
export default function MyApp() {
    return(
        <>
            <MenuAppBar/>
            <Box sx={{my: 4}}>
                <Typography>
                    Mi primera app con react
                </Typography>
                <Copyright/>
            </Box>
        </>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> practica 5.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default App;/.
