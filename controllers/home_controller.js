//import cards model
const card=require("../models/cards")

//export home controller function to index.js route
module.exports.home = function(req, res){
//return all the cards from the database
    card.find({},(err,cardList)=>{
        if(err){
            return console.log("Error finding the card_list!")
        }
        return res.render('home', {
            title: "ToDo APP",
            card_list:cardList

        });
    })  
}

