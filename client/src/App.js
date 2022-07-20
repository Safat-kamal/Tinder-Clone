import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Chats from './components/chats/Chats';
import ChatScreen from './components/chatScreen/ChatScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<><Header /> <Card/> <Footer/> </>} />
          <Route path="/chats" element={<><Header backButton="/" /> <Chats/> </>}/>
          <Route path="/chat/:person" element={<><Header backButton="/chats" /> <ChatScreen/> </>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
