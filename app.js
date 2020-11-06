const heroes= [];
const hname= [627, 38, 69, 162, 196, 423, 207, 213, 620, 644];

function loadXMLDoc(id) {
  const xhttp = new XMLHttpRequest();
  document.getElementById("show").innerHTML = "<ul>";
 
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const hero = JSON.parse(this.responseText);
      heroes.push(hero);
        if (heroes.length === 10){ 
          console.log(heroes)
          print(heroes);
        }
    }
  };
 
  xhttp.open(
    "GET",
    "https://www.superheroapi.com/api.php/10218791343239475/"+id,
    true
  );
  xhttp.send();
}

hname.forEach(element=>{
  loadXMLDoc(element);
})

const print=(heroes) =>{
  heroes.forEach((heroe)=>{
    document.getElementById("show").innerHTML+=`
    <h1 id="name"> ${heroe.name}</h1>
    <img src="${heroe.image.url}" width= 20%>`
  })
}


