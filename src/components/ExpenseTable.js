// src/components/ExpenseTable.jsx (updated
  
function ExpenseTable({ expenses, onSort, sortField, sortOrder, onDelete }) {
    const getSortIndicator = (field) => {
      if (sortField === field) {
        return sortOrder === 'asc' ? ' ↑' : ' ↓';
      }
      return '';
    };
  
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th onClick={() => onSort('name')}>
              Name {getSortIndicator('name')}
            </th>
            <th onClick={() => onSort('description')}>
              Description {getSortIndicator('description')}
            </th>
            <th onClick={() => onSort('amount')}>
              Amount {getSortIndicator('amount')}
            </th>
            <th onClick={() => onSort('category')}>
              Category {getSortIndicator('category')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No expenses found.</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  