import TodoItem from "./InputItem"

const TodoItems = ({ list, setList }) => {
  return (
    <div className='space-y-2'>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          item={item.inputValue}
          setList={setList}
        />
      ))}
    </div>
  )
}

export default TodoItems
