import { useState } from "react";

function ExpenseList({expenses,onDelete}){
    const [category,setCategory]=useState("كل الفئات")
    function handleCategoryInput(event) {
        setCategory(event.target.value);
        
}
const filterExpenses=category ==="كل الفئات"? expenses
 :expenses.filter(exp=> exp.category===category);
    return(
    <section className="Expense-list-container">
        <p>المصاريف الأخيرة</p>
        <select value={category} onChange={handleCategoryInput}>
            <option >كل الفئات</option>
             <option>طعام</option>
                <option>مواصلات</option>
                <option>ترفيه</option>
                <option>تسوق</option>
                <option>صحة</option>
        </select>

         {filterExpenses.map(exp => (
                <div key={exp.id} className="expense-item">
                    <span>{exp.description}</span>
                    <span>{exp.category}</span>
                    <span>{exp.amount} ريال</span>
                    <span>{exp.date}</span>
                    <button onClick={() => onDelete(exp.id)}>حذف</button>
                </div>
            ))}
    </section>);
}

export default ExpenseList