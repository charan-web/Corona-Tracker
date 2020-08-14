//Declaring all Variables 

const h2 = document.querySelector(".h2")
const confirme = document.querySelector(".confirmed h4")
const recovered = document.querySelector(".recovered h4")
const deaths = document.querySelector(".deaths h4")
const select = document.querySelector("#country")



//Declaring API urls for app
var dataUrl = "https://covid19.mathdro.id/api"
const countryUrl = `${dataUrl}`+"/"+"countries"
let anotherdataUrl = "https://covid19.mathdro.id/api"






//5:This is the Last Function to Call All Async Functions
async function allCall(){
  let datas= await  data()
  let confi = await confirmed()
  let countr = await country()

}
allCall().catch(err => h2.innerHTML = "check your connection")

//1: Get the data from API url and change into JSON
async  function data (){

if(dataUrl === anotherdataUrl){
 
    const response =  await fetch(anotherdataUrl)
    const json =  await response.json()
    return json
}else {
   let respons =  await fetch(anotherdataUrl)
   let anres= await respons
   let anofet=await anres.url.replace("%20","")
   let fet = await fetch(anofet)
   let js = await fet.json()

   return js



  
   }
 };

 //2:Get the cases From that JSON(which is Fetched in 1)
 async function confirmed(){

     let charan = await data()
    let noc = await  charan.confirmed.value
    let nor=await charan.recovered.value
    let noi = await charan.deaths.value
    confirme.innerHTML = noc
    recovered.innerHTML = nor
    deaths.innerHTML = noi



 }
 



//3 Get the  Every Countriy  with different API url 
//3:1 Create the "SELECT" HTML element 
//3:2 Create "OPTION" HTML element and append every Country from the APi url
async function country()
   {
  let data = await fetch(countryUrl)
  let arr = await data.json()
  let another = await arr.countries


    another.forEach(country =>{
   let option= document.createElement("option")
    option.append(country.name)
    select.addEventListener("change",changeCountry)
    
    select.appendChild(option)



    })

}



//4:This Function needs to call EveryTime we change the Country
function changeCountry(){
  let change = document.querySelector("#country").value
  h2.innerHTML = change 
  var dataCountry = `${countryUrl} `+ "/"+`${change}`
 anotherdataUrl = dataCountry
 console.log(anotherdataUrl)
  allCall()
}
















