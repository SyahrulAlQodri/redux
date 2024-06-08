import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout } from './redux/slices/loginSlice';

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (isLogin) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <>
      <h1>{isLogin ? 'Sudah Login' : 'Belum Login'}</h1>
      <button onClick={handleAuth}>{isLogin ? 'Logout' : 'Login'}</button>
    </>
  );
}

export default App;