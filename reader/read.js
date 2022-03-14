const MainImage = document.getElementById("MainImage");
var currentPage = 1;
var lastPagenumber = 0;
var currentRead = "kanin";
var OnLastPage = false;
function imageset(com, page){
    switch(com){
        case "add":
            currentPage += page;
            break;
        case "set":
            currentPage = page;
            break;
        default:
            console.error(com + " is not a thing yo.")
            break;
    }
    if (currentPage <= 0) currentPage = 1;
    MainImage.src = `reader/comics/${currentRead}/${currentRead}_${currentPage}.png`;
    if (!OnLastPage) lastPagenumber = Number(String(MainImage.src.split(currentRead+"_")[1]).split(".png")[0])-1;
}
MainImage.onerror = function() {
    console.log("No more pages/page failed to load")
    MainImage.src = `reader/end.png`;
    currentPage = lastPagenumber+1;
    OnLastPage = true;
    /*currently this cant be set back to false, but it 
    works probably as a check for the last page, which then uses that 
    value for the rest of the session, idk if thats good enough though
    
    I checked, thats xcsatcly what it does, pretty cool lol
    */
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    MainImage.style.width = "80%"
    console.log("user is using phone")
}