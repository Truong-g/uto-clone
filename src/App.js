import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { LayoutMain } from "./Layouts";
import routes from './routers'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="h-screen pt-[70px] bg-[#eee]">
        <Routes>
          {
            routes.map((item, index) => {
              return (
                <Route key={index} path={item.route} element={
                  <LayoutMain>
                    {item.component}
                  </LayoutMain>
                } />
              )
            })
          }

        </Routes>
      </div>

    </div>
  );
}

export default App;
