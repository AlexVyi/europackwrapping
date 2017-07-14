/**
 * Created by Alex on 15/07/2017.
 */
var form = document.getElementById("myForm");
function thkx(e) {
    e.preventDefault()
    if (form) {
        alert(location.href)
        window.location.replace("http://localhost:63342/europackwrapping/thankyou.html?_ijt=phsbi8pgu6d41ggvs5mc7uih9");

    }

}