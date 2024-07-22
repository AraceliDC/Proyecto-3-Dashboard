let img = document.getElementById('weapon-image')
let warningMelee = document.querySelector(".meleeWarning")
let nameWeapon = document.querySelector(".name-weapon")
let nameWPN = document.querySelector(".name-wpn")
let borderWPN = document.querySelector(".border")

let chartWeapon;

//OBTENER LAS ARMAS POR SU UUID
const fetchWeapon = async() => {
    let weaponValue = document.getElementById('weapons').value
    weaponValue = cleanText(weaponValue)
    try{

        const WEAPON_UUID_API = `https://valorant-api.com/v1/weapons`
        const response = await axios.get(WEAPON_UUID_API)
        
        const weapons = response.data.data
        const mainWeapon = weapons.find(weapon => weapon.displayName === weaponValue)


        if(mainWeapon){

            if (weaponValue == ""){
                nameWPN.style.opacity = 0;
                nameWPN.style.visibility = "hidden";
                
                borderWPN.style.opacity = 0;
                //borderWPN.style.visibility = "hidden";

            }else{
                nameWPN.style.opacity = 1;
                nameWPN.style.visibility = "visible";
                
                borderWPN.style.opacity = 1;
                //borderWPN.style.visibility = "visible";
            }

            if(mainWeapon.displayName == "Melee"){
                //chartWeapon.destroy()
                nameWeapon.innerHTML = "Melee"
                warningMelee.style.opacity = 1;
                warningMelee.style.visibility = "visible"; 
            } else{
                warningMelee.style.opacity = 0;
                warningMelee.style.visibility = "hidden"; 
            }

            console.log(mainWeapon)
            getWeaponImage(mainWeapon)
            getChart(mainWeapon)
            nameWeapon.innerHTML = mainWeapon.displayName


           
        }

       


    }catch(error){
        console.error("Ocurrió un error ", error)
       
    }
    //document.getElementById('weapons').value = ""
    
}

const getWeaponImage = (mainWeapon) =>{
     try {
        img.src = mainWeapon.displayIcon
     } catch (error) {
        console.log("ocurrio un error con la imagen", error)
     }
}

const ctx = document.getElementById('myChart');
const getChart = (mainWeapon)=>{

    Chart.defaults.font.family = "DIN Next LT Pro Bold";
    Chart.defaults.font.size = 22;
    Chart.defaults.color = "white";

    if(chartWeapon){
        chartWeapon.destroy()
    }

    const data = {
        labels: [
          'Daño a Cabeza',
          'Daño al Cuerpo',
          'Daño a Piernas ',
          'Tamaño del Cargador',
          'Tiempo de Recarga',
        ],
        datasets: [{
          label: 'Estadísticas del Arma',
          data: [mainWeapon.weaponStats.damageRanges[0].headDamage,
                 mainWeapon.weaponStats.damageRanges[0].bodyDamage,
                 mainWeapon.weaponStats.damageRanges[0].legDamage, 
                 mainWeapon.weaponStats.magazineSize, 
                 mainWeapon.weaponStats.reloadTimeSeconds],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
        ]
      };
     try {

    
        chartWeapon = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 300,
                        grid: {
                            color: "white"
                        },
                        ticks: {
                            stepSize: 50,
                            backdropColor: "#0F1822",
                            color: "white"
                        },
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }
                    }
                },
                elements: {
                  line: {
                    borderWidth: 3
                  }
                }
              },
          });
     } catch (error) {
        
     }
}

const cleanText = (weaponValue) => {
    weaponValue = weaponValue.replaceAll(" ", "")
    let result = weaponValue.charAt(0).toUpperCase() + weaponValue.slice(1).toLowerCase()
    console.log(result)
    return result
}





