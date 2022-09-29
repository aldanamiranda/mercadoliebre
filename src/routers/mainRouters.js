const express= require ('express');
const router= express.Router();

router.get('/', )

app.get ('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'src/views/home.html'))
})
app.get ('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'src/views/register.html'))
})

app.get ('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'src/views/login.html'))
})

module.exports = router;
