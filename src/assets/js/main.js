function noti() {
    alert("Made By ppzh0");
    alert("...");
    alert("Thanks for visiting ;)");
}

function clickAlert() {
    alert("This is not available yet!");
}

function reload() {
    window.location.reload();
}

function crd() {
    alert("Nah, this option is not avaiable yet!")
}

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
    alert("This website is still under developement, some functions might not work!");
    localStorage.setItem('alerted', 'yes');
}