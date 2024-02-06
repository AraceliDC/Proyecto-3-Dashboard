let nameWeapon = document.querySelector('.btn-content')
let weaponContainer = document.getElementById('despliegue-armas')

// const fetchWeapon = async () =>{
    
//     try {
//         const url = 'https://pokeapi.co/api/v2/pokemon/';
//         const response = await axios.get(url)
//         weapon = response.data
        
//         console.log(weapon)
//         // arrayMap()
//         // console.group()
//         // console.log(responseNW)
//         // console.log("responseNW")
//         // console.group()
//         // weaponSlide(response.data.data);
//     } catch (error) {
//         console.log('Ha fallado', error)
//     }
// }

// fetchWeapon();

// nameWeapon.addEventListener('click', weaponSlide())

// function weaponSlide(weapon){
//     if (nameWeapon == true){
//         p= document.createElement('p')
//         p.textContent = weapon.data;
//         weaponContainer.appendChild(p)
//     }
// }
// weaponSlide();

// function arrayMap(responseNW){
//     for (let index = 0; index < responseNW.length; index++) {
//         const weapon = responseNW[index];
//         weaponName = weapon[index].displayName;
//     }
//     return weaponName;
// }



const url = 'https://pokeapi.co/api/v2/pokemon/';
nameWeapon.addEventListener('click', function(){
    axios.get(url, {responseType: 'JSON'})
})
.then(function(response){
    if (response.status == 200) {
        
    }
})