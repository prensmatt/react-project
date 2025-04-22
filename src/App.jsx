import { Route, Routes } from "react-router"


import HomePage from "../pages/HomePage/Home";
import UsersPage from "../pages/UsersPage/Users";


const App = ({ }) => {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<div>Welcome to Home Page</div>} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/UsersPage" element={<UsersPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </>
  )
}
export default App
