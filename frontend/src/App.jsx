import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header, Footer } from './components'
import './App.scss'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        toastStyle={{border: "3px solid #00bc77", backgroundColor: "#292A2D", color: "white"}}
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={true}
        closeButton={false}
        newestOnTop={true}
        limit={1}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  )
}

export { App }