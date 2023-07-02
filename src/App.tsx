import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './screens/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route element={<PrivateRoutes />}>
        <Route path={'/'} element={<MenuScreens />} />
        <Route path={'/stock-out'} element={<StockOutScreens />} />
      <Route path={'/language'} element={<ChangeLanguage />} />
      </Route>
      <Route element={<PublicRoutes />}>

      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<RegisterScreen />} />
      </Route>
      <Route path={'/*'} element={<ErrorPage />} />
      {/* <Route path={'/exportlanguage'} element={<ExportLanguge />} /> */}
      {/* <Route path={'/reportstockout'} element={<ExportList />} />
      <Route path={'/CustomSidleBar'} element={<CustomSidleBar />} />  */}
      <Route path={'/'} element={<Home />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
