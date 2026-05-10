const allTools = [
{name:"I Love PDF",img:"",website:"",download:"404.html"},
{name:"Youtube",img:"",website:"",download:"404.html"},
{name:"Notion",img:"",website:"",download:"404.html"},
{name:"Quizlet",img:"",website:"",download:"404.html"},
{name:"Canva",img:"",website:"",download:"404.html"},
{name:"Kami",img:"",website:"",download:"404.html"},
{name:"NPTEL",img:"",website:"",download:"404.html"},
{name:"edX",img:"",website:"",download:"404.html"},
{name:"Forest",img:"",website:"",download:"404.html"},
{name:"Study Bunny",img:"",website:"",download:"404.html"},
{name:"Coursera",img:"",website:"",download:"404.html"},
{name:"Photomath",img:"",website:"",download:"404.html"},
{name:"Grammarly",img:"",website:"",download:"404.html"},
{name:"Perplexity Ai",img:"",website:"",download:"404.html"},
{name:"Chat GPT",img:"",website:"",download:"404.html"},
{name:"Zotero",img:"",website:"",download:"404.html"},
{name:"Jenni Ai",img:"",website:"",download:"404.html"},
{name:"Trinka Ai",img:"",website:"",download:"404.html"},
{name:"Quill Bot",img:"",website:"",download:"404.html"},
{name:"Elicit",img:"",website:"",download:"404.html"},
{name:"Todoist",img:"",website:"",download:"404.html"},
{name:"Google Calender",img:"",website:"",download:"404.html"},
{name:"Toggl Track",img:"",website:"",download:"404.html"},
{name:"Symbolab",img:"",website:"",download:"404.html"},
{name:"GeoGebra",img:"",website:"",download:"404.html"},
{name:"PhET Simulations",img:"",website:"",download:"404.html"},
{name:"Adobe Scan",img:"",website:"",download:"404.html"},
{name:"Small PDF",img:"",website:"",download:"404.html"},
{name:"Pomofocus",img:"",website:"",download:"404.html"}
];

//

const search = document.getElementById('search');
const toolCards = document.getElementById('tool-cards');
const Btn = document.getElementById('Btn');
let displayedTools = [...allTools]; //

//

function renderTools(toolsArray) {
  toolCards.innerHTML = '';
  toolsArray.forEach(tool => {
    toolCards.innerHTML += `
      <div class="tool-card">
        <div class="tool-pic"><a href="${tool.website}"><img src="${tool.img}" alt="${tool.name}"></a></div>
        <h2 class="tool-name">${tool.name}</h2>
        <div class="goto-container"><a href="${tool.website}" target="_blank" class="goto">Go To Website</a></div>
        <div class="download-container"><a href="${tool.download}" class="download">Download</a></div>
      </div>
    `;
  });
}

//

search.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = allTools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm)
  );
  renderTools(filtered);
});

//

Btn.addEventListener('click', () => {
  const shuffled = [...allTools].sort(() => 0.5 - Math.random());
  const randomFour = shuffled.slice(0, 4);
  renderTools(randomFour);
  search.value = '';
});

renderTools(allTools.slice(0, 4)); 