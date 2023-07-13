document.getElementById('card').style.setProperty('display','none','important')

function search() {
    document.getElementById('card').style.setProperty('display','block','important')
    let country = document.getElementById('country').value
    let finalURL =`https://restcountries.com/v3.1/name/${country}?fullText=true`
    //console.log(finalURL)

    fetch(finalURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let flag = document.getElementById('flag')
        let nameC = document.getElementById('nameC')
        let capital = document.getElementById('capital')
        let cont = document.getElementById('cont')
        let pot = document.getElementById('pop')

        nameC.innerHTML = country
        capital.innerHTML = data[0].capital[0]
        cont.innerHTML = data[0].continents[0]
        pop.innerHTML = data[0].population

        flag.src = data[0].flags.svg
    })
}