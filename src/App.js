import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Shop></Shop>,
      children: [
        {
          path: '/home',
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/login',
          element: <Shop></Shop>
        }
      ]
    }
  ])

  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
