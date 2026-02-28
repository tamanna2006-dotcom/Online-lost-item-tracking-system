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

            // TEMP: always allow (for testing)
            alert("Location detected ✅");
            window.location.href = "dashboard.html";
        },

        function(error){
            if(error.code === error.PERMISSION_DENIED){
                alert("Location permission denied ❌");
            } else {
                alert("Location error: " + error.message);
            }
        }
    );
}