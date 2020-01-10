function showsource(element_id){
document.getElementById(element_id + 'src').style.opacity = 0.8;
document.getElementById(element_id + 'src').style.animation = "spaghettiUp ease-in-out 0.3s";
}
function hidesource(element_id){
document.getElementById(element_id + 'src').style.opacity = 0;
document.getElementById(element_id + 'src').style.animation = "spaghettiDown ease-in-out 0.3s";
}
