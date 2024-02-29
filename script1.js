
var container = document.createElement("div");
container.className= "container"
document.body.append(container)
async function  doo(){
    var res = await fetch("https://data.covid19india.org/v4/min/data.min.json")   
    var res1 = await res.json()
    
    console.log(res1)
    var chennai=res1.TN.districts.Chennai.total;
    console.log(chennai) 
    container.innerHTML=`<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">TamilNadu</div>
    <div class="card-body text-primary">
      <h5 class="card-title">Chennai</h5>
      <p class="card-text">Confirmed :${ res1.TN.districts.Chennai.total.confirmed}</p>
      <p class="card-text">Deceased :${ res1.TN.districts.Chennai.total.deceased}</p>
      <p class="card-text">Recovered:${ res1.TN.districts.Chennai.total.recovered}</p>
      <p class="card-text">Tested :${ res1.TN.districts.Chennai.total.tested}</p>
      <p class="card-text">Vaccinated 1:${ res1.TN.districts.Chennai.total.vaccinated1}</p>
      <p class="card-text">Vaccinated 2 :${ res1.TN.districts.Chennai.total.vaccinated2}</p>
    </div>
  </div>`
   }
   
   doo()
