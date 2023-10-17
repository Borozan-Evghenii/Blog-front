import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";
import {FC} from "react";
import Layout from "./page/layout/Layout.tsx";
import Login from "./page/auth/login/Login.tsx";
import Register from "./page/auth/registration/Register.tsx";
import AuthLayout from "./page/auth/authLayout/AuthLayout.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme.ts";
import {GlobalStyles} from "./styles/GlobalStyles.ts";
import {Provider} from "react-redux";
import {store} from "./store";

const App:FC = () => {
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <GlobalStyles/>
              <BrowserRouter>
                  <Routes>
                      <Route path={'/'} element={<Layout />}>
                          {
                              routes.map(route =>
                                  <Route
                                      key={route.path}
                                      path={route.path}
                                      index={route.index}
                                      element={<route.element/>}
                                  />
                              )
                          }
                          <Route path={'auth'} element={<AuthLayout/>}>
                              <Route index path={'login'} element={<Login/>} />
                              <Route index path={'register'} element={<Register/>} />
                          </Route>
                      </Route>

                  </Routes>
              </BrowserRouter>
          </ThemeProvider>
      </Provider>
  )
}

export default App
