import { useState } from "react"

// component
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
// items
import cartItems from "./cart-items"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
