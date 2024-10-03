const mongoose=require("mongoose");
const Chat=require("./models/chat.js")

main()
.then(()=>{
    console.log("connection successfuul");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1/Whatsapp');
}

let allChats=[
    {
        from:"gaurav",
        to:"karan",
        msg:"hey,how are you buddy?",
        created_at:new Date(),
    },
    {
        from:"karan",
        to:"gaurav",
        msg:"I am fine.What about you?",
        created_at:new Date(),
    },
    {
        from:"gaurav",
        to:"karan",
        msg:"Me too buddy!!!!",
        created_at:new Date(),
    },
    {
        from:"karan",
        to:"gaurav",
        msg:"so,whats going on?",
        created_at:new Date(),
    },
    {
        from:"karan",
        to:"gaurav",
        msg:"nothing just preparing for GATE",
        created_at:new Date(),
    },
    {
        from:"gaurav",
        to:"karan",
        msg:"Ohhh!!!thats very good.",
        created_at:new Date(),
    },
]
Chat.insertMany(allChats);