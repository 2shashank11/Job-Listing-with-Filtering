var filterList=['Frontend', 'Senior', 'HTML', 'CSS', 'Javascript', 'React', 'Python', 'Midweight', 'Fullsatck', 'Junior', 'Saas', 'Ruby', 'Ror', 'Backend'];
var closebtn= document.querySelectorAll(".close");

var allRoles = ['Frontend', 'Senior', 'HTML', 'CSS', 'Javascript', 'React', 'Python', 'Midweight', 'Fullsatck', 'Junior', 'Saas', 'Ruby', 'Ror', 'Backend'];

//document.getElementsByClassName("tags-head").style.display="none";
filterList=[];

$(".filter-tablet").on('click', function () {
    //document.getElementsByClassName("tags-head").style.display="block";
    //filterList=[];
    var tagTemplate = document.getElementById("template-node");
    const cloneElm = tagTemplate.content.cloneNode(true);

    if (filterList.indexOf(this.innerHTML)==-1){
        appendFilterTags(cloneElm, this.innerHTML);
        closebtn= document.querySelectorAll(".close");
        console.log(closebtn);
    }

    removeFilterTags();
    updateCards();
});

function clearFilters(){
        let tags=document.getElementsByClassName("tags");
        console.log("here");
        console.log(tags);        

        for(let i=1; i<tags[0].childElementCount; i++){
            console.log(tags[0].children[i]);
            tags[0].children[i].remove();
            i--;
        }

        closebtn= document.querySelectorAll(".close");
    
        filterList=allRoles;
        updateCards();
        filterList=[];

        //document.getElementsByClassName("tags-head").style.display="hidden";
}



function appendFilterTags(cloneElm, tagName){
    cloneElm.querySelector(".filter-name").innerHTML=tagName;
    cloneElm.querySelector(".close").innerHTML='✕';
    document.querySelector('.tags').appendChild(cloneElm);
    filterList.push(tagName);
    updateCards();
}

function removeFilterTags(){

    for(let i=0; i<closebtn.length; i++){
        closebtn[i].addEventListener("click", function(){
            console.log(this.parentElement);
            let tagName=this.parentElement.querySelector(".filter-name").innerHTML;
            this.parentElement.remove();
            const index=filterList.indexOf(tagName);
            console.log(tagName);

            if(index !== -1){
                filterList.splice(index, 1);
            }

            updateCards();
            
            if(filterList.length===0){
                filterList=allRoles;
                updateCards();
                filterList=[];
                //document.getElementsByClassName("tags-head").style.display="hidden";
            }
            
        })
    }
}

function updateCards(){

    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach(function(jobCard) {
        jobCard.style.display = "none";
    });

    for(let i=0; i<filterList.length; i++){

        const jobCardsActive=document.querySelectorAll("." + filterList[i]);
        jobCardsActive.forEach(function(card){
            if (window.innerWidth < 775){
                card.parentElement.parentElement.style.display="block";
            }
            else{
                card.parentElement.parentElement.style.display="flex";
            }
            
        })
    }
}
