import Header from "./Header/Header"

function App() {
  const title = 'ODIN | Shopping Cart';
  const cartCount = 0;

  return (
    <>
      <Header title={title} cartCount={cartCount} />
    </>
  )
}

export default App
