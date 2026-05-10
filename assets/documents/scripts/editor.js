const allTools = [
  {name:"Adobe Premiem Pro",img:"",website:"",download:"404.html"},
  {name:"Davinci Resolve",img:"",website:"",download:"404.html"},
  {name:"Final Cut Pro",img:"",website:"",download:"404.html"},
  {name:"CapCut Pc",img:"",website:"",download:"404.html"},
  {name:"Filmora",img:"",website:"",download:"404.html"},
  {name:"VEGAS Pro",img:"",website:"",download:"404.html"},
  {name:"HitFilm Express",img:"",website:"",download:"404.html"},
  {name:"Avid Media Composer",img:"",website:"",download:"404.html"},
  {name:"Adobe After Effects",img:"",website:"",download:"404.html"},
  {name:"Audacity",img:"",website:"",download:"404.html"},
  {name:"Reaper",img:"",website:"",download:"404.html"},
  {name:"FL Studio",img:"",website:"",download:"404.html"},
  {name:"iZotope Rx",img:"",website:"",download:"404.html"},
  {name:"Krisp",img:"",website:"",download:"404.html"},
  {name:"Blender",img:"",website:"",download:"404.html"},
  {name:"Cinema 4D",img:"",website:"",download:"404.html"},
  {name:"Fusion",img:"",website:"",download:"404.html"},
  {name:"Natron",img:"",website:"",download:"404.html"},
  {name:"FilmConvert Nitrate",img:"",website:"",download:"404.html"},
  {name:"Magic Bullet Suite",img:"",website:"",download:"404.html"},
  {name:"OBS Studio",img:"",website:"",download:"404.html"},
  {name:"Camtasia",img:"",website:"",download:"404.html"},
  {name:"Bandicam",img:"",website:"",download:"404.html"},
  {name:"Snagit",img:"",website:"",download:"404.html"},
  {name:"HandBrake",img:"",website:"",download:"404.html"},
  {name:"FFmpeg",img:"",website:"",download:"404.html"},
  {name:"Shutter Encoder",img:"",website:"",download:"404.html"},
  {name:"MediaInfo",img:"",website:"",download:"404.html"},
  {name:"Adobe PhotoShop",img:"",website:"",download:"404.html"},
  {name:"Photopea",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
  {name:"",img:"",website:"",download:"404.html"},
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