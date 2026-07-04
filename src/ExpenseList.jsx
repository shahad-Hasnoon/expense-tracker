
function ExpenseList(){
    return(
    <section className="Expense-list-container">
        <p>المصاريف الأخيرة</p>
        <select>
            <option>كل الفئات</option>
            <option>طعام </option>
            <option>المواصلات</option>
        </select>
    </section>);
}
export default ExpenseList