
const Quotes = [
  { 
   'quote': 'Be yourself; everyone else is already taken.',
   'author': 'Oscar Wilde'
  },
  {
   'quote': 'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe. ',
   'author': 'Albert Einstein'
  },
  {
   'quote': ' You know you are in love when you can not fall asleep because reality is finally better than your dreams.  ',
   'author': ' Dr. Seuss '
  },
  {
   'quote': 'Be the change that you wish to see in the world.',
   'author': ' Mahatma Gandhi '
  },
  
    ]

function AddQoute(){
  const random = Number.parseInt(Math.random()*Quotes.length + 1);
  document.querySelector('#quote').textContent = `\"${Quotes[random].quote}\"`;
  document.querySelector('#author').textContent = `--${Quotes[random].author}`;
  
}


































// const Quotes = [
 

// {     
//   `quote` ` “So many books, so little time.”`
// `― Frank Zappa`
// }



// ]



// function addQoute(){
    
//     const random = Number.parseInt(Math.random()*Quotes.length + 1);
//     document.querySelector('#quote').textContent = `\"${Quotes[random].quote}\"`;
//     document.querySelector('#author').textContent = `--${Quotes[random].author}`;
   

// }
