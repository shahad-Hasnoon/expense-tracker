import { useState ,useEffect} from 'react'
import Header from './Header.jsx'
import AddExpense from './AddExpense.jsx'
import ExpenseList from './ExpenseList.jsx'
import './App.css'

function App() {
  const [expense ,setExpense]=useState([]);
 useEffect(()=>{
  fetch("http://localhost:5000/expense")
  .then(res =>res.json)
  .then(data=>setExpense(data))
 },[]);
  function handleAdd(newExpense){
      setExpense(prev =>[...prev ,newExpense]);
  }
  function deletHandle(index){
    setExpense(prev =>prev.filter(exp=> exp.id !== index));
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
