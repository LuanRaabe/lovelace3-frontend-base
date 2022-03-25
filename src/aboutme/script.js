// const $ = require("jquery")(window);
const apiUrl = "https://rickandmortyapi.com/api";

async function getCharacterById(num) {
    let response = await fetch(`${apiUrl}/character/${num}`);
    let obj = await response.json();
    let name = obj.name;

    $("#result").html(`<div id="searched-name">Nome pesquisado: ${name}</div>`);
    console.log(name);
    
    response = await fetch(`${apiUrl}/character/?name=${name}`);
    obj = await response.json();
    console.log(obj.results);
    let text = obj.results.map((el) => {
      return `<div class="card">
                <img src="${el.image}"/>
                <a class="image-link" href="${el.image}">
                    Image link: ${el.image}
                </a>
                <div class="infos">
                    <div class="id">
                       id: ${el.id}
                    </div>
                    <div class="name">
                        name: ${el.name}
                    </div>
                </div>     
            </div>`;
    });
    $("#result").append(text);
}

$(document).on('click', "#get-character-id",function(){
  let num = $("#character-id").val();
  console.log(num);
  getCharacterById(num);
});