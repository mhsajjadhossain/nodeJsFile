const express = require('express')
const ejs = require('ejs');
// Import the bot detection middleware
const isBot = require('./middleware/isBot')
const app = express()
const path = require('path');
const { Script } = require('vm');

const port = 3000
// Tell express app to use our bot detection middleware
app.use(isBot);
// Tell express app to use ejs as view engin
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );


// routes
app.get('/backup.js', (req, res) => {
    console.log(req.botInfo);
    res.render('pages/backup',{
        title: "Backup Altr",
        btnLink:"https://patrading.xyz/free-channel"
    })
})
app.get('/alert.js', (req, res) => {
    let xyz =  `ppp`
    let name = `
    <script>
    $(function () {
        var showProds = ['3282268'];
        
        $('[data-de-type*="orpo"] input[name="purchase[product_id]"], .o2step_step2 input[name="purchase[product_id]"]').each(function () {
            if (showProds.indexOf($(this).val()) > -1) {
                $(this).parents('[data-cf-product-template="true"]').show();
            } else {
                $(this).parents('[data-cf-product-template="true"]').hide();
            }
        });
    
        $('input[value="'+showProds[0]+'"]:not(#cfAR input)').click();
    
        $('[data-title*="cf-show-only"]').show();
    });
    </script>
    
    `;
    res.send(name)
})
app.get('/', (req, res) => {
    console.log(req.botInfo);
    res.render('pages/index',{
        title: "testbot"
    })
})


app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))