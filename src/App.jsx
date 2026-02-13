import './App.css'
import { HashRouter, NavLink, Routes, Route, useNavigate, useParams, Outlet } from 'react-router-dom'

const Home = () => {
  return <p>這是首頁</p>
}

const Todo = () => {
  return <p>這是 Todo 頁面</p>
}
const Login = () => {
  return <p>這是登入頁面</p>
}
const Logout = () => {
  const navigate = useNavigate()
  return <button type="button" onClick={() => navigate('/login')}>登出</button>
}
const Register = () => {
  return <p>這是註冊頁面</p>
}

const Post = () => {
  return (<>
    <p>這是 Post 頁面</p>
    <Outlet />
  </>)
}
const PostId = () => {
  let param = useParams()
  return <p>id: {param.id}</p>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/logout">
            <p>登出</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/post" element={<Post />}>
            <Route path=":id" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  )
}

export default App
