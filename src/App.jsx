import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import CommonQuestion from "./pages/CommonQuestion/CommonQuestion";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login";

const LazyProfile = lazy(()=>import("./pages/Profile/Profile"))

function App() {
  const state  = useSelector(state => state.Mode)
  return (
    <div className={"App " + state.theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path='CommonQuestion' element={<CommonQuestion />}/>
              <Route path=":id" element={
                  <Suspense fallback="loading ...">
                    <LazyProfile/>
                  </Suspense>
              }/>
              <Route path="Register" element={<Register/>}/>
              <Route path="login" element={<Login/>}/>
            </Route>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
