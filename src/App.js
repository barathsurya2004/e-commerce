import Home from "./Routes/Homepage/homepage.component";
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from "./Routes/Navigation/navigation.component";
import SignIn from "./Routes/SignIn/sign-in.component";
const App = () => {



  const Shop = () => {
    return (
      <h1>I am shop page</h1>
    )
  }


  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>

  )
}
export default App