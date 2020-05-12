// importing the cards model
const cards=require("../models/cards")

//exporting the deleteCard controller function into index.js route file
module.exports.deleteCard = function(req, res){
    const id=req.query.id
    //deleting the card using card id in the query
    cards.findOneAndDelete({_id:id},(er)=>{
        if(er){
            return console.log("Error deleting the card!")
        }
       console.log('Deleted 1 card successfully!')
       return res.redirect('/')
    })
    
}