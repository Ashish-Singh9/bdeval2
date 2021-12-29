const express = require('express')
const fs=require('fs');
const app = express()
const PORT = 3000

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile(__dirname+"/user.json", "utf-8" ,function(err, user)
	{ 
       if(err){
            console.log(err) 
        } else {
           let users=JSON.parse(user)
            res.render("home",{users});
        }
		
    })
  
})
app.post('/',(req,res)=>{
    console.log(req.body.name);
    let user=req.body;
    fs.readFile(__dirname+"/user.json", "utf-8" ,function(err, data)
	{ 
       if(err){
            console.log(err) 
        } else {
            let users;
            if( data.length === 0  )
            {
                users=[]
            }
            else
            {
                users = JSON.parse(data);
            }
            users.push(user);
                fs.writeFile("./user.json", JSON.stringify(users) ,function(err)
                {
                    if(err) {
                        console.log(err);
                    } else  {
                        res.sendStatus(200);
                    }
                })    
        }
		
    })
    
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})