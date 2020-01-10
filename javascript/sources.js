function showsource(element_id){
document.getElementById(element_id + 'src').style.animation = "spaghettiUp 0.3s ease-in-out";
document.getElementById(element_id + 'src').style.opacity = 0.8;
}
function hidesource(element_id){
document.getElementById(element_id + 'src').style.animation = "spaghettiDown 0.3s ease-in-out";
document.getElementById(element_id + 'src').style.opacity = 0;
}
