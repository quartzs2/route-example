import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "@components/layout/Layout";
import { HomePage, AboutPage, ContactPage, ErrorPage } from "@pages";
import { PATHS } from "@constants/paths";
import "./App.css";

const ROUTES = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.ABOUT, element: <AboutPage /> },
  { path: PATHS.CONTACT, element: <ContactPage /> },
  { path: PATHS.ALL, element: <ErrorPage /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
