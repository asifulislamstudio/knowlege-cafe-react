import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarkBar from './Components/BookMarkBar/BookMarkBar'
import Header from './Components/Header/Header'


function App() {
  const [mark, setMark] = useState([])
  const [readingtime, setReadingTime] = useState(0)

 const handleBookMark = blog => {
  const newBM = [...mark, blog.blog]
  setMark(newBM)
  console.log(blog.blog.title)
 }

 const readingTime = time => {
  setReadingTime(readingtime + time)
 }

  return (
    <>
     <Header></Header>
     <div className='md:flex  '>
     <Blogs 
     handleBookMark={handleBookMark}
     readingTime={readingTime}
     >
     </Blogs>
     <BookMarkBar readingtime={readingtime} mark={mark}></BookMarkBar>
     </div>
    </>
  )
}

export default App
