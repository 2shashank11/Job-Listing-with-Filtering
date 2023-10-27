var filterList=[];
var closebtn= document.querySelectorAll(".close");

$(".filter-tablet").on('click', function () {
    var tagTemplate = document.getElementById("template-node");
    const cloneElm = tagTemplate.content.cloneNode(true);


    if (filterList.indexOf(this.innerHTML)==-1){
        appendFilterTags(cloneElm, this.innerHTML);
        closebtn= document.querySelectorAll(".close");
        console.log(closebtn);
    }
    
    removeFilterTags();
});


// for(var i=0; i<closebtn.length; i++){
//     console.log("inside"+closebtn);
//     closebtn[i].addEventListener("click", function(){
//         this.parentElement.style.display="none";

//         const index=filterList.indexOf(tagName);
//         if(index !== -1){
//             filterList.splice(index, 1);
//             console.log("done"+filterList);
//         }
//     })
// }

function appendFilterTags(cloneElm, tagName){
    cloneElm.querySelector(".filter-name").innerHTML=tagName;
    cloneElm.querySelector(".close").innerHTML='✕';
    document.querySelector('.tags').appendChild(cloneElm);
    filterList.push(tagName);
    //console.log(filterList);
}

function removeFilterTags(){
    //console.log("inside"+closebtn);
    //console.log(filterList);
    closebtn= document.querySelectorAll(".close");
    for(var i=0; i<closebtn.length; i++){
        closebtn[i].addEventListener("click", () => {
            console.log(this.parentElement);
            let tagName=this.parentElement.querySelector(".filter-name").innerHTML;
            this.parentElement.style.display="none";
            const index=filterList.indexOf(tagName);
            console.log(tagName);
            if(index !== -1){
                filterList.splice(index, 1);
                console.log("done"+filterList);
            }
        })
    }

    
}