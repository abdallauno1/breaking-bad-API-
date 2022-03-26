/*
// old syntax
fetch("https://www.breakingbadapi.com/api/").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
})
*/
const api = "https://www.breakingbadapi.com/api/characters/"
async function get() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)

        printData(data)

    } catch (e) {
        console.log("Error:", e.message)

    }

    function printData(data) {
        const header = document.querySelector("#header")
        const content = document.querySelector("#content")
        header.innerHTML += `
        <select class="form-control" onchange="getChar(this.value)">
          <option>Please Select</option>
          ${ data.map(actor => `<option>${actor.name}</option>`)}
        </select>   
       ` 
        }    
}
async function getChar(name){
  if(name != 'Please Select'){
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json()
    
    content.innerHTML = `
        <h2>${ data[0].name} ( ${ data[0].nickname} )</h2> 
        <h3>${ data[0].portrayed} </h3> 
        <h4>${ data[0].birthday}</h4> 
        <img src= ${ data[0].img} width="250"> </br>
    `
  }else{

    console.log("Wrong Select")
  }

}   

get();