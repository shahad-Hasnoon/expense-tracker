
function Header({ total, thisMonthTaotal }){
    const budget =2000 ;
    const remaining= budget -total;
    return(
    <section className="header">
        <div className="total">الأجمالي:{total}</div>
        <div className="thisMonth"> :{thisMonthTaotal}مصاريف هذا الشهر</div>
        <div className="balance"> {remaining}الميزانية المتبقية:</div>
    </section>
    );
}
export default Header