let optins = document.querySelectorAll(".exg select")
let btn = document.querySelector("button")
let box = document.querySelector(".result")
let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

for (const select of optins) {
    for (const curr in countryList) {
       let newOpt = document.createElement("option")
       newOpt.innerText = curr;
       newOpt.value = curr;
       select.append(newOpt)
    }

}
// console.log
btn.addEventListener("click", async () => {
    let val = document.querySelector("#amount")
    let from = optins[0].value.toLowerCase();
    let to = optins[1].value.toLowerCase();
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    let res = await fetch(url);
    // console.log(res)
    let data =  await res.json();
    let exgRate = data[from][to];
    let result = val.value * exgRate;
    box.innerText = `${val.value} ${from} = ${result} ${to}`
    
})