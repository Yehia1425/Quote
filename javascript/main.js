


function randomText(){
    var text = ["You miss 100% of the shots you don't take." 
        ,"It's not what happens to you, but how you react to it that matters."
        ,"Resentment is like drinking poison and waiting for your enemies to die."
        ,"Do not take life too seriously. You will not get out alive."
        ,"The best revenge is massive success."
     ];
     var userName=["  --Wayne Gretzy  ","--Epictetus" , "--Nelson Mandela" , "--Elbert Hubbard","--Frank Sinatra"
     ]

     var num = Math.floor(  Math.random() * text.length)

     document.getElementById('text').innerHTML=(text[num])
     
     document.getElementById('p').innerHTML=( userName[num])
     
}