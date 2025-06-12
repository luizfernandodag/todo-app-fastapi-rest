import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("1");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo({
      title,
      completed: false,
      due_date: dueDate || null,
      priority: parseInt(priority),
    });
    setTitle("");
    setDueDate("");
    setPriority("1");
    loadTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, { ...todo, completed: !todo.completed });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo)}
            />
            <span style={{ marginLeft: "0.5rem", textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.title}
            </span>
            <small style={{ marginLeft: "1rem", color: "#666" }}>
              (Due: {todo.due_date || "—"}, Priority: {["", "Low", "Medium", "High"][todo.priority]})
            </small>
            <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: "1rem" }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
