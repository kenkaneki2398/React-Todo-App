import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <section className="section-center">
      <form className="todo-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>things todo</h3>
        <div className="form-control">
          <input type="text" className="todo" placeholder="e.g. check email" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="todo-container">
        <List />
        <button className="clear-btn">Clear Items</button>
      </div>
    </section>
  )  
}

export default App