import { useState } from 'react'
import Header from './Header.jsx'
import AddExpense from './AddExpense.jsx'
import ExpenseList from './ExpenseList.jsx'
import './App.css'

function App() {
 

  return (
    <>
     <Header/>
     <AddExpense/>
     <ExpenseList/>
    </>
  )
}

export default App
