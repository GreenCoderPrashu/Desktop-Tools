const allTools = [
  {name: "Vs Code", img: "#", website: "#", download: "#"},
  {name: "Chrome", img: "#", website: "#", download: "#"},
  {name: "Python", img: "#", website: "#", download: "#"},
  {name: "Java", img: "#", website: "#", download: "#"},
  {name: "Git Hub", img: "#", website: "#", download: "#"},
  {name: "Git", img: "#", website: "#", download: "#"}
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