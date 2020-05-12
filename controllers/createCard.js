// require cards model for creating the card
const cards=require('../models/cards')

// export the createcard controller function to the index.js routes file
module.exports.createCard=function(req,res){
    // customizing the date format 
    const date=new Date(req.query.dueDate)
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month=months[date.getMonth()]
    const dateNumber=date.getDate()
    const year=date.getFullYear()
    const joinDate=month+" "+dateNumber+","+year
    let formattedDate=''
    if(joinDate!=="undefined NaN,NaN"){
        formattedDate=joinDate
    }
    else{
        formattedDate=''
    }
    // creating the card with the formatted date using card model
    cards.create({
        description:req.query.description,
        category:req.query.category,
        dueDate:formattedDate
    },(error,response)=>{
        if(error){
            console.log("Error adding a card!")
            return res.redirect('back')
        }
        console.log("Card added successfully!",response)
        return res.redirect('back')
    })
    


}