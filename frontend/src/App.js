
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import CreateNotice from './Pages/CreateNotice';
import ViewNotices from './Pages/ViewNotices';
import EditPage from './Pages/EditPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNotice />} />
        <Route path="/view" element={<ViewNotices />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}



export default App;
