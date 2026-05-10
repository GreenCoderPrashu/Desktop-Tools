const allTools = [
  {name: "Vs Code", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoirCtiJhhN8Tvo0FJRRd4CInsOXkRX9EbA&s", website: "https://code.visualstudio.com/", download: "https://code.visualstudio.com/download"},
  {name:"Python",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXQIa1e5DEzCxihOOLzr0m2WGTKHmyNTIBg&s",website:"https://www.python.org/",download:"https://www.python.org/downloads/"},
  {name:"Java",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0azWb7Rl8nurvcSMYBgDVjG0YDP56OGYFaA&s",website:"https://www.java.com/en/",download:"https://www.java.com/en/download/manual.jsp"},
  {name:"R Studio",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAx5hTJjeIWJA7pmVzHinb2xC_GDI7OqCjw&s",website:"https://www.r-studio.com/",download:"https://posit.co/downloads"},
  {name:"C++",img:"https://media.licdn.com/dms/image/v2/D4E22AQHrTA7w_RbhRg/feedshare-shrink_800/feedshare-shrink_800/0/1686255170054?e=2147483647&v=beta&t=naRh1N-IwMq5ojm1d2RkxaoPjjHBXERwkMlq3elfUyE",website:"https://turbo-c.net/",download:"https://turbo-c-plus-plus.en.softmany.com/"},
  {name:"Git",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO227fi03p0_ImaL3kvZrt98YndliLugSDzg&s",website:"https://git-scm.com/",download:"https://git-scm.com/install/windows"},
  {name:"Codex",img:"https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/codex-color.png",website:"https://chatgpt.com/codex/?utm_source=google&utm_medium=paid_search&utm_campaign=GOOG_X_SEM_GNB_Codex_CDX_BAU_ACQ_PER_MIX_ALL_APAC_IN_EN_111725&c_id=23277424063&c_agid=187514668974&c_crid=802269979438&c_kwid=kwd-433308260&c_ims=&c_pms=9062011&c_nw=g&c_dvc=c&gad_source=1&gad_campaignid=23277424063&gbraid=0AAAAA-I0E5foHl2Hk_60-JO6M91FzwMp6&gclid=CjwKCAjwzevPBhBaEiwAplAxvutJnfO4pHsB-JUzmfXD7YqNXXdiDfeOeculbRP8h6CacnHM_k2xARoCTXUQAvD_BwE",download:"https://chatgpt.com/codex/?utm_source=google&utm_medium=paid_search&utm_campaign=GOOG_X_SEM_GNB_Codex_CDX_BAU_ACQ_PER_MIX_ALL_APAC_IN_EN_111725&c_id=23277424063&c_agid=187514668974&c_crid=802269979438&c_kwid=kwd-433308260&c_ims=&c_pms=9062011&c_nw=g&c_dvc=c&gad_source=1&gad_campaignid=23277424063&gbraid=0AAAAA-I0E5foHl2Hk_60-JO6M91FzwMp6&gclid=CjwKCAjwzevPBhBaEiwAplAxvutJnfO4pHsB-JUzmfXD7YqNXXdiDfeOeculbRP8h6CacnHM_k2xARoCTXUQAvD_BwE"},
  {name:"Blender",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXiZP6Blrn8PiGRHwM9sixX1vU4N5tEkg5w&s",website:"https://www.blender.org/",download:"https://www.blender.org/download/"},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
  {name:"",img:"",website:"",download:""},
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