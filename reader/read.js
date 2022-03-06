const MainImage = document.getElementById("MainImage");
var currentPage = 1;
var currentRead = "kanin";
function imageset(com, page){
    switch(com){
        case "add":
            currentPage += page;
            break;
        case "detract":
            currentPage -= page;
            break;
        case "set":
            currentPage = page;
            break;
        default:
            console.error(com + " is not a thing yo.")
            break;
    }
    MainImage.src = `reader/comics/${currentRead}/${currentRead}_${currentPage}.png`;
}