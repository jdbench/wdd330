
createFooterYear();

function createFooterYear(){
    let d = new Date();
    let yyyy = d.getFullYear();
    //find span
    let yearSpan = document.getElementById("year");
    //place current year in span
    yearSpan.innerHTML = yyyy;
}