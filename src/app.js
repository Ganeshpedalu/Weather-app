const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT||3000
const hbs = require("hbs");

const template_path = path.join(__dirname , "../templates/views")
const partials_path = path.join(__dirname , "../templates/partials")


app.set('view engine' , 'hbs');
app.set('views' , template_path);
hbs.registerPartials(partials_path);

const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));

app.get("" , (req , res)=>{
    res.render("index")
});

app.get("/about" , (req , res)=>{
    res.render('about');

});
app.get("/aboutme", (req , res)=>{
    res.send("Ganesh’s career objective is to kickstart his professional journey by utilizing his strong foundational knowledge in programming and backend technologies. He is eager to learn and grow as a Full stack developer, contributing his skills to develop efficient and reliable software solutions. He is dedicated to working with experienced professionals, acquiring new skills, and adapting to industry best practices. By leveraging his passion for problem-solving and attention to detail, He aims to make a valuable contribution to the organization and gain hands-on experience in Software development.")
});

app.get("/weather" , (req , res)=>{
    res.render("Weather");

});

app.get("*" , (req , res)=>{
    res.render("404error", {
        errorMsg : 'oops! page not found'
    });

});



app.listen(port , ()=>{
    console.log("server running on 3000");
});