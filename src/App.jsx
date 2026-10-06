
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <p>Manage your money in one place.</p>

      <div className="summary">
        <div className="card">
          <h3>Total Balance</h3>
          <h2>₹0.00</h2>
        </div>

        <div className="card">
          <h3>Total Income</h3>
          <h2>₹0.00</h2>
        </div>

        <div className="card">
          <h3>Total Expenses</h3>
          <h2>₹0.00</h2>
        </div>
      </div>

      <div className="transaction-form">
        <h2>Add Transaction</h2>

        <input type="text" placeholder="Transaction title"/>

        <input type="number" placeholder="Amount"/>

        <select>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button>Add Transaction</button>
      </div>

      <div className="transactions">
        <h2>Recent Transactions</h2>
        <p>No transactions yet.</p>
      </div>
    </div>
  )
}

export default App