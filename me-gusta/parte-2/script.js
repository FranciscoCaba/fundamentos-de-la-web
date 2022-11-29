var count = [9,12,9];

function addLike(element){
    var pos = element.id.substring(element.id.length-1)/1;
    count[pos-1]++;
    var likeCount = document.querySelector("#like-"+element.id);
    likeCount.innerText = count[pos-1] + " like(s)";
}