

const fetchWeapon = async() => {
   let weapon = document.getElementById('weapons').value
   let img = document.getElementById('weapon-image')
    try {
        const url = `https://valorant-api.com/v1/weapons/${weapon}`;
        const response = await axios.get(url)
        const imgWeapon = response.data.data.displayIcon
        console.log(imgWeapon)
        
        img.src = imgWeapon
    } catch (error) {
        console.log('ha fallado', error)
    }
}


