let agent = document.getElementById('agents')
let buttonAGNT = document.querySelector('.button-content-agnt')
let imgAGNT = document.getElementById('agent-image')
let nameAgent = document.querySelector('.name-agent')
let nameAGNT = document.querySelector('.name-agnt')
let borderAGNT = document.querySelector('.border-agent')
let roleAGNT = document.querySelector('.rol-agent')
let descriptionAGNT = document.querySelector('.description')
let roleContainer = document.querySelector('.rol-container')
let abilities = document.querySelector('.abilities-container')

//OBTENER LOS AGENTES POR UUID

const fetchAgent = async() => {
    let agentValue = document.getElementById('agents').value
    agentValue = cleanText(agentValue)
    try{
        const agent_UUID_API = `https://valorant-api.com/v1/agents`
        responseAgent = await axios.get(agent_UUID_API)
        const agents = responseAgent.data.data
        console.log(agents)
        const mainAgent = agents.find(agent => agent.displayName === agentValue && agent.isPlayableCharacter === true)

        if(mainAgent){
            if(agentValue == ""){
                nameAGNT.style.opacity = 0;
                // nameAGNT.style.visibility = "hidden";
                borderAGNT.style.opacity = 0;
                roleContainer.style.opacity = 0;
            }else{
                nameAGNT.style.opacity =1;
                //nameAGNT.style,visibility = "visible";
                borderAGNT.style.opacity = 1;
                roleContainer.style.opacity = 1;
            }
            // if (mainAgent.displayName == "Sova" && mainAgent.isPlayableCharacter == true){
            //     roleAGNT.innerHTML = mainAgent[10].role.displayName
            //     descriptionAGNT.innerHTML = mainAgent[10].role.description
            // }
            printAgentDescrption(mainAgent)
            console.log(mainAgent)
            getAgentImage(mainAgent)
            // nameAgent.innerHTML = mainAgent.displayName
            // roleAGNT.innerHTML = mainAgent.role.displayName
            // descriptionAGNT.innerHTML = mainAgent.role.description
            getAbilities(mainAgent.abilities)
            //getRole(mainAgent)
        }
    }catch(error){
        console.error('ocurrio un error ,', error)
    }

   // document.getElementById('agents').value = "";
   
}

const printAgentDescrption = (mainAgent) =>{
    try {
        if(mainAgent.isPlayableCharacter === true){
            nameAgent.innerHTML = mainAgent.displayName
            roleAGNT.innerHTML = mainAgent.role.displayName
            descriptionAGNT.innerHTML = mainAgent.role.description
        }
    } catch (error) {
        console.log('hubo un error,', error)
    }
}

const getAgentImage = (mainAgent) =>{
    try {
        imgAGNT.src = mainAgent.displayIcon
    } catch (error) {
        console.log("ocirrio un error ,", error)
    }
}

// let html = "";

// const getAbilities = (mainAgent) =>{
  
//     try {
//         mainAgent.abilities.forEach(ability => {
//             html += '<div class="abilities-container">'
//             html += `<img src="${ability.displayIcon}">`
//             html += '<p class="ability-text"> ' + ability.description + '</p>'
//             html += '</div>'
//         });
//         abilities.innerHTML = html;
//     }catch(error){
//         console.log(error)
//     }
    
// }

const getAbilities = (abilitiesData) => {
    try {
        abilities.innerHTML = "";
        
        abilitiesData.forEach(ability => {
            const abilityContainer = document.createElement('div');
            abilityContainer.classList.add('abilities-container');
            
            const abilityImage = document.createElement('img');
            abilityImage.src = ability.displayIcon;
            
            const abilityDescription = document.createElement('p');
            abilityDescription.classList.add('ability-text');
            abilityDescription.textContent = ability.description;
            
            abilityContainer.appendChild(abilityImage);
            abilityContainer.appendChild(abilityDescription);
            
            abilities.appendChild(abilityContainer);
        });
    } catch (error) {
        console.log(error);
    }
}

const cleanText = (agentValue) => {
    agentValue = agentValue.replaceAll(" ", "")
    let result = agentValue.charAt(0).toUpperCase() + agentValue.slice(1).toLowerCase()
    console.log(result)
    return result
}