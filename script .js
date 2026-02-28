function checkLocation(){

    if(!navigator.geolocation){
        alert("Geolocation not supported!");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position){
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            console.log(lat, lon);

            if(lat >= 30.268 && lat <= 30.272 && lon >= 77.047 && lon <= 77.051){
                alert("Inside MMU Mullana ✅");
                window.location.href = "dashboard.html";
            } 
            else{
                alert("Access allowed only inside MMU Mullana ❌");
            }
        },

        function(error){
            if(error.code === error.PERMISSION_DENIED){
                alert("Location permission denied ❌");
            } 
            else{
                alert("Location error: " + error.message);
            }
        }
    );
}