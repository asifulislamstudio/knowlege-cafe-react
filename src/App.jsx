import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarkBar from './Components/BookMarkBar/BookMarkBar'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className='md:flex md:items-center '>
     <Blogs></Blogs>
     <BookMarkBar></BookMarkBar>
     </div>
    </>
  )
}

export default App
