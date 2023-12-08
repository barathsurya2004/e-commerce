import Home from "./Routes/Homepage/homepage.component";
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from "./Routes/Navigation/navigation.component";
import Autho from "./Routes/Auth/auth.component";
import Shop from "./Routes/Shop/shop.component";
const App = () => {




  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Autho />} />
      </Route>
    </Routes>

  )
}
export default App