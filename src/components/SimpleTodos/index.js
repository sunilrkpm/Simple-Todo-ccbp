import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteTodo = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {todoList} = this.state
    const className =
      todoList.length === 0
        ? 'todo-bg-container empty-contianer '
        : 'todo-bg-container'
    return (
      <div className={className}>
        <div className="todo-container">
          <h1 className="main-heading">Simple Todos</h1>
          {todoList.length > 0 ? (
            <ul className="todo-list-container">
              {todoList.map(each => (
                <TodoItem
                  key={each.id}
                  todoDetails={each}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
