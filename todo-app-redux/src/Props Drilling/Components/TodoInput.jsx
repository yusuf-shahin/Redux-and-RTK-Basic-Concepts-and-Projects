const TodoInput = ({ inputValue, setInputValue, setList }) => {
  const addItem = () => {
    if (!inputValue) return
    setList((e) => {
      return [...e, { inputValue, id: Math.random() }]
    })
    setInputValue("")
  }

  return (
    <div className='flex gap-2 mb-4'>
      <input
        type='text'
        placeholder='Add a new task...'
        className='input input-bordered w-full'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='btn btn-square font-bold text-2xl' onClick={addItem}>
        +
      </button>
    </div>
  )
}

export default TodoInput
