const MainImage = document.getElementById("MainImage");
var currentPage = 1;
var currentRead = "kanin";
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
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    MainImage.style.width = "80%"
    console.log("user is using phone")
}