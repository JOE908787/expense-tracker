// src/components/ExpenseForm.jsx
import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && amount && category) {
      onAddExpense({ name, description, amount: parseFloat(amount), category });
      setName('');
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
        <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        list="category-options"
        required
      />
      <datalist id="category-options">
        <option value="Food" />
        <option value="Farm Tools" />
        <option value="Car Parts" />
        <option value="Toys" />
        <option value="Accessories" />
        <option value="Mobile Phones" />
      </datalist>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;