import { useState ,useEffect} from 'react'
import Header from './Header.jsx'
import AddExpense from './AddExpense.jsx'
import ExpenseList from './ExpenseList.jsx'
import './App.css'

function App() {
  const [expense ,setExpense]=useState([]);
 useEffect(()=>{
  fetch("http://localhost:5000/expense")
 .then(res => res.json())
 .then(data => setExpense(data.map(exp => ({
            ...exp,
            amount: Number(exp.amount) 
        }))))
}, [])
  function handleAdd(newExpense){
    fetch('http://localhost:5000/expense',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(newExpense)
    })
     .then(res => res.json())
     .then(data => setExpense(prev => [...prev, data]))
     
  }
  function deletHandle(id) {
    fetch(`http://localhost:5000/expense/${id}`, {
        method: 'DELETE'
    })
    .then(() => setExpense(prev => prev.filter(exp => exp.id !== id)))
}

  
const total =expense.reduce((sum,exp)=> sum +exp.amount ,0);

const currentMonth=new Date().getMonth();
const currentYear=new Date().getFullYear() ;
 
const thisMonthTaotal =expense.filter(exp=>{
  const expDate=new Date(exp.date)
  return expDate.getMonth()===currentMonth && expDate.getFullYear()===currentYear
}).reduce((sum ,exp)=> sum+ exp.amount,0)


  return (
    <>
     <Header total={total} thisMonthTaotal={thisMonthTaotal}/>
     <AddExpense onAdd={handleAdd}/>
     <ExpenseList  expenses={expense} onDelete={deletHandle}/>
    </>
  )
}

export default App
