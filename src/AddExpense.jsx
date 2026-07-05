import { useState } from "react";

function AddExpense({onAdd}){
    const [description,setDescription]=useState("");
    const [amount, setAmount] = useState(0);
    const [date ,setDate]=useState("");
    const[category ,setCategory]=useState("طعام");
function handleDescriptionInput (event){
        setDescription(event.target.value)
    }
function handleAmountInput(event) {
    setAmount(event.target.value)
}
function handleCategoryInput(event){
    setCategory(event.target.value)
}
function handleDateInput(event){
    setDate(event.target.value)
}
function handleSubmit(){
    if (!description || !amount || !date) return
    onAdd({
        id:Date.now(),
        description:description,
        amount:Number(amount),
        category:category,
        date:date
        
    })
    setDescription("")
    setAmount(0)
    setCategory("طعام")
    setDate("")
}
    return(
        <section className="Add-expense-container">
            <p>اضافة مصروف</p>
            <input type="text"  value={description} onChange={handleDescriptionInput}placeholder="الوصف:غداء , أوبر" />
             <input type="number"  value={amount} onChange={handleAmountInput} placeholder="المبلغ بالريال"/>
             <select value={category} onChange={handleCategoryInput}>
                <option>طعام</option>
                <option>مواصلات</option>
                <option>ترفيه</option>
                <option>تسوق</option>
                <option>صحة</option>
             </select>
             <input type="Date" value={date} onChange={handleDateInput}/>
             <button onClick={handleSubmit}>اضافة مصروف +</button>
        </section>
    );
}
export default AddExpense