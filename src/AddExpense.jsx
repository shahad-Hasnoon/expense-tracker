
function AddExpense(){
    return(
        <section className="Add-expense-container">
            <p>اضافة مصروف</p>
            <input type="text" placeholder="الوصف:غداء , أوبر"/>
             <input type="number" placeholder="المبلغ بالريال"/>
             <select>
                <option>طعام</option>
                <option>مواصلات</option>
                <option>ترفيه</option>
                <option>تسوق</option>
                <option>صحة</option>
             </select>
             <input type="Date"/>
             <button>اضافة مصروف +</button>
        </section>
    );
}
export default AddExpense