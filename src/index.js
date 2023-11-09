//react dom
import ReactDOM from "react-dom/client";

//router dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//confg
import reportWebVitals from "./reportWebVitals";

//redux
import { Provider } from "react-redux";
import store from "./Store";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap Bundle JS
import "bootstrap/dist/css/bootstrap.min.css";

//styles
import "./index.css";

//Components
import Root from "./Layout/layout"

import EBooks from "./Pages/E_Books/eBook"
import BookDetails from "./Pages/BookDetails/bookDetails";


//routing
const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      //Layout
      <Root />
    ),
    children: [
      { element: <EBooks />, path: '/EBooks' },
      { element: <BookDetails />, path: '/EBooks/:EBooksId' },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
