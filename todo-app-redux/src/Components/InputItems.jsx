const TodoItem = ({ item, setList, id }) => {
  const deleteItem = (id) => {
    setList((e) => e.filter((e) => e.id !== id))
  }
  return (
    <div className='flex items-center justify-between bg-base-100 p-3 rounded-lg shadow-md'>
      <div className='flex items-center gap-2'>
        <input type='checkbox' className='checkbox checkbox-primary' />
        <span className='text-gray-800'>{item}</span>
      </div>
      <button className='btn btn-error btn-sm' onClick={() => deleteItem(id)}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
