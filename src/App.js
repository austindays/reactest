import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main'
import Mypage from './components/mypage/Mypage';
import Unregister from './components/mypage/Unregister';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/mypage/unregister' element={<Unregister />} />
      </Routes>
    </>
  );
}

export default App;
