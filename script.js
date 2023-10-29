var button= document.querySelector("#btn")
var followtag= document.querySelector(".follow")
flag=0;

button.addEventListener("click", function(){
    if(flag==0){followtag.innerHTML="FOLLOWING"
    followtag.style.color="green"
    button.innerHTML="UNFOLLOW"
    button.style.backgroundColor="grey"
    flag=1;
    }
    else{
        
        followtag.innerHTML="NOT FOLLOWING"
        followtag.style.color="red"
        button.innerHTML="FOLLOW"
        button.style.backgroundColor="rgb(5, 191, 228)"
        flag=0;
    }

})