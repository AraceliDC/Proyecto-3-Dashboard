let weapon = document.getElementById('weapons')
let button = document.querySelector(".button-content")
let img = document.getElementById('weapon-image')
const nameWeapon = document.querySelector(".name-weapon")



//OBTENER LAS ARMAS POR SU UUID
const fetchWeapon = async() => {
    let weaponValue = document.getElementById('weapons').value 
    try{
        const WEAPON_UUID_API = `https://valorant-api.com/v1/weapons`
        const response = await axios.get(WEAPON_UUID_API)
        const weapons = response.data.data
        const mainWeapon = weapons.find(weapon => weapon.displayName === weaponValue)
     
        if(mainWeapon){
            console.log(mainWeapon)
            getWeaponImage(mainWeapon)
            getChart(mainWeapon)
            nameWeapon.innerHTML = mainWeapon.displayName
            
        }else{
            alert("Arma no encontrada!")
            console.log("arma no encontrada")
        }


    }catch(error){
        console.error("Ocurrio un error xd ", error)
    }
    document.getElementById('weapons').value = ""
    
}

const getWeaponImage = (mainWeapon) =>{
     try {
        img.src = mainWeapon.displayIcon
     } catch (error) {
        console.log("ocurrio un error con la imagen", error)
     }
}
//USAR MAINWEPON PARA QUE CHART MUESTRE SOLO ESOS DATOS

const rellenarArrayDatos =(mainWeapon)=>{
    const arrayDatos = [mainWeapon.weaponStats.magazine.magazineSize]
    console.log(arrayDatos)
}
rellenarArrayDatos()


const ctx = document.getElementById('myChart');
const getChart = (mainWeapon)=>{
    const data = {
        labels: [
          'Daño a Cabeza',
          'Daño al Cuerpo',
          'Daño a Piernas ',
          'Tamaño del Cargador',
          'Tiempo de Recarga',
        ],
        datasets: [{
          label: 'My First Dataset',
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
        new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 300
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







