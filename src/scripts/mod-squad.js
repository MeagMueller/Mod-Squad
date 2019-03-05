// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]} 
//     const modSquadTime = {
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     document.getElementById("container").innerHTML += `<h1>The Mod Squad</h1>`
//     // document.getElementById("container").innerHTML += `<div>${ModSquad.members}</div>`

    

//     ModSquad.members.forEach(member => {
//         const div = document.createElement("div")
//         const mSMember = document.createTextNode(`${ModSquad.members}`)
//         div.appendChild(mSMember)
//         document.body.appendChild(div)

        
//     })


// // document.querySelector("container").innerHTML = HTMLRepresentation, HTMLText
// }

// Getting there but not quite...

{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    document.getElementById("container").innerHTML += `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        const HTMLRepresentation += `<div>${member}</div>`
    })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation