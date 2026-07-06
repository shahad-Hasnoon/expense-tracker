
function Header({ total, thisMonthTaotal }){
    const budget =2000 ;
    const remaining= budget -total;
    return(
        
    <section className="header">
         <div className="balance">الميزانية المتبقية:  {remaining}</div>
          <div className="thisMonth"> مصاريف هذا الشهر : {thisMonthTaotal}</div>
        <div className="total">الأجمالي: {total}</div>
       
       
    </section>
    );
}
export default Header