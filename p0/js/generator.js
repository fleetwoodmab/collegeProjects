const stock = [
    "there is something in your throat that wants to get out and you won\'t let it. - margaret atwood <br>",
    "and what I really intended to say in the end remains unsaid. - franz kafka <br>",
    "what cannot be said will be wept. - sappho <br>",
    "دل به دل راه داره / there is telepathy between hearts. - persian expression <br>",
    "and when nobody wakes you up in the morning‚ and when nobody waits for you at night‚ and when you can do whatever you want. what do you call it‚ freedom or loneliness? - charles bukowski <br>",
    "nothing ever ends poetically‚ it ends and we turn it into poetry. all that blood was never once beautiful. it was just red. - kait rokowski <br>",
    "even fate picks its favorites - megamind (2010) <br>",
    "for girls‚ becoming women was inevitability‚ for boys‚ becoming men was ambition. - kamila shamsie <br>",
    "si on me presse de dire pourquoi je l'aimais‚ je sens que cela ne se peut exprimer‚ qu'en répondant : « parce-que c'était lui‚ parce-que c'était moi ». - montaigne <br>",
    "i am a fool with a heart but no brains‚ and you are a fool with brains but no heart; and we’re both unhappy‚ and we both suffer. - dostoievsky <br>",
    "jeanne d’arc‚ sans sépulcre et sans portrait‚ toi qui savais que le tombeau des héros est le cœur des vivants. - andré malraux <br>"
  ]

 
  const showAll = document.querySelector('#showAll')
  showAll.addEventListener('click', () => {
    stockBis = stock.join().replace(/,/g, '♥ ')
    document.querySelector("#place").innerHTML = stockBis
    })
 
    
    

  function generate() {
    var random = Math.floor(Math.random() * (stock.length))
    document.querySelector("#place").innerHTML = stock[random]
  }
  


  let someone = prompt("Hi, who are you ?", "")
  let rn = new Date()
  let hour = rn.getHours();
  let minute = rn.getMinutes();

  if(isNaN(someone)) {
    let hello = "Welcome " + someone + ", it is " + hour + ":" + minute + ", you can choose between generating random quotes or show all the ones available. "
    document.querySelector("#greeting").innerHTML = hello
  }

  else {
      alert("Please, enter your name.")
  }
  



  const clicked = document.querySelector('button')
  clicked.addEventListener('click',  () => console.log('Quote/s is/are generated'))