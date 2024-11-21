import Counter from "./redux/Static Reduce/Counter"

function App() {
  return (
    <>
      <div className='container'>
        <Counter name={"static"} />
      </div>
      <div className='container'>
        <Counter name={"static"} />
      </div>
    </>
  )
}

export default App
