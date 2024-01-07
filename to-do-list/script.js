const inputbox=document.getElementById("input-box");

const listitem=document.getElementById("list-container")

function addTask(){

        if(inputbox.value===""){

            alert("you must enter something");

        }
        else{
            let li=document.createElement("li");

            li.innerHTML=inputbox.value;

            listitem.appendChild(li);

            let span=document.createElement('span');

            span.innerHTML=".\u00d7";

            li.appendChild(span)

                        saveData();

            }

            inputbox.value="";

}


    listitem.addEventListener("click",function(e){

        if(e.target.tagName==='LI'){
            e.target.classList.toggle("checked")

        }
        if(e.target.tagName==='SPAN'){

            e.target.parentElement.remove("li")

            
        }
    })

    function saveData(){
            localStorage.setItem("data",listitem.innerHTML)

        

    }

    function showList(){

   listitem.innerHTML=localStorage.getItem("data")
}

showList();


// const input=document.getElementById("input-box")

// const listcontainer=document.getElementById("list-container")

// function addTask(){

//     if(input.value===''){
//         alert("you must enter something");
//     }
//     else{
//         let li=document.createElement("li");

//         li.innerHTML=input.value;

//         listcontainer.appendChild(li);
//         let span=document.createElement("span")
//         span.innerHTML="\u00d7";
//         li.appendChild(span)
//     }
//     input.value="";
//     saveData();

// }


// listcontainer.addEventListener("click",function(a){
//     if(a.target.tagName === "LI"){
//         a.target.classList.toggle("checked");
//         saveData()
//     }
//     else if(a.target.tagName === ("SPAN")){
//         a.target.parentElement.remove();
//         saveData()
//     }
// },false);


// function saveData(){
//     localStorage.setItem("data",listcontainer.innerHTML)
// }


// function showList(){

//     listcontainer.innerHTML=localStorage.getItem("data")

// }

// showList();








