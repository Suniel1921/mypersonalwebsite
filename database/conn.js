const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log(`Database Connected Successfully !`)
}).catch((error)=>{
    console.log(`Database not Connected ! ${error}`)
})