import react from 'react';
import "./App.css"
import Header from './Header.js'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets';
import Login from './Login';
import { useContext } from 'react';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispacth] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) :
        (
          <>
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Feed />
              {/* <Widgets /> */}

            </div>
          </>
        )}
    </div>
  )
}

export default App;


// we will be using react context API. 
// Redux is much more powerful. 
