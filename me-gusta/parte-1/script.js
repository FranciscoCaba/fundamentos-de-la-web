var count = 3;

function addLike(element){
    count++;
    var likeCount = document.querySelector("#like-"+element.id);
    likeCount.innerText = count + " like(s)";
}