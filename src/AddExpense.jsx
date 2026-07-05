import { useState } from "react";

function AddExpense({onAdd}){
    const [description,setDescription]=useState("");
    const [amount, setAmount] = useState(0);
function handleDescriptionInput (event){
        setDescription(event.target.value)
    }
function handleAmountInput(event) {
    setAmount(event.target.value)
}
    return(
        <section className="Add-expense-container">
            <p>اضافة مصروف</p>
            <input type="text"  value={description} onChang={handleDescriptionInput}placeholder="الوصف:غداء , أوبر" />
             <input type="number"  value={amount} placeholder="المبلغ بالريال"/>
             <select>
                <option>طعام</option>
                <option>مواصلات</option>
                <option>ترفيه</option>
                <option>تسوق</option>
                <option>صحة</option>
             </select>
             <input type="Date"/>
             <button onClick={onAdd}>اضافة مصروف +</button>
        </section>
    );
}
export default AddExpense