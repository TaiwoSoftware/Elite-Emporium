import { useNavigate } from "react-router-dom"

function Home() {
    const navigator = useNavigate()
    const handleClick = () => {
        navigator('/register')
    }
  return (
    <div>
        <nav>
        <p className="linker" onClick={handleClick}>register</p>
        </nav>
    </div>
  )
}

export default Home