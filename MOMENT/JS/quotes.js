

const quotes=[
  {
    qote:"지금 공부안하면 취업 못한다. ",
    autor:"Park Seo Hyeon",
  },

  {
  qote:"다른 사람과 경쟁하지 마라. 너의 경쟁자는 그애들이 아니다",
  autor:"Park Seo Hyeon",
  },

  {
    qote:"성장한 개발자가 되어라",
    autor:"Park Seo Hyeon",
  },

  {
    qote:"아무것도 아닌거라고 생각될때 아무것도 하지 않으면 아무것도 아니다",
    autor:"Park Seo Hyeon",
  },

  {
    qote:"취직 하자",
    autor:"Park Seo Hyeon",
  },

  {
    qote:"수고했어 오늘도",
    autor:"Park Seo Hyeon",
  },

  {
    qote:"충분히 잘하고 있어",
    autor:"Park Seo Hyeon",
  },
]

const quote=document.querySelector("#quote span:first-child");
const autor=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.qote;
autor.innerText=todaysQuote.autor;
