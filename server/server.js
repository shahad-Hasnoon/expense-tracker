const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');
const app=express();
const path = require("path");
app.use(cors());
app.use(express.json());
let expenses=[];

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port:3306,
    password: 'root', 
    database: 'expenses_tracker'
});
db.connect((err)=>{
    if(err){
        console.log(" Error found",err);
    }
    console.log("The database  successfully connected.")

})
app.use(express.static(path.join(__dirname, "..")));
//retrive expense
app.get('/expense',(req,res)=>{
    db.query('SELECT * FROM expenses',(err,results)=>{
        if(err)return res.status(500).json({ error: err });
        res.json(results);
    });
    

});
app.post('/expense',(req ,res)=>{
    const { description, amount, category, date } = req.body;
    db.query('INSERT  INTO  expenses (description, amount, category, date ) VALUE (?,?,?,?)',
        [description, amount, category, date],(err,result)=>{
            if (err) return res.status(500).json({ error: err });
            res.json({ id: result.insertId, description, amount, category, date });
        });
   
    
});

app.delete('/expense/:id',(req,res)=>{
    const id=Number(req.params.id);
    db.query('DELETE FROM expenses WHERE id= ?',[id],(err)=>{
        if(err) return res.status(500).json({error:err});
        res.json({ message: 'تم الحذف' });
    })
    
    
});
app.listen(5000,()=>{

    console.log('Server running on port 5000');
});
