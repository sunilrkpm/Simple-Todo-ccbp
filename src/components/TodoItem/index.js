import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props

  const onClickDeleteTodo = () => {
    deleteTodo(todoDetails.id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-item-title">{todoDetails.title}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteTodo}
      >
        Delete
      </button>
    </li>
  )
}
export default TodoItem
