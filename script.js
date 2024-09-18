// faq function 
function toggleAnswer(id) {
    var answer = document.getElementById('answer' + id);
    var faq = answer.parentElement;

    faq.classList.toggle('active');
}
// end 



// click to scroll 
document.getElementById("GETINTOUCH").addEventListener("click", function(){
    document.getElementById("GetITcontainer").scrollIntoView({
        behavior: "smooth"
      });
})
// end 


// project done by clement lotus mollick (Ollyo) 