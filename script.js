

function displayList()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange=function()
    {
        try{
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                console.log(httpRequest.responseText);
                display(httpRequest.responseText)
            }
            else{
                   alert("error from API");

            }
            }
        }

 catch(e){
    alert(e.discrption);
}


try{
    httpRequest.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    httpRequest.send();
}
catch(e){
    alert(e.discrption);
}
    }


function display(data){
    var list = JSON.parse(data);
    let table = document.getElementById("todo");
    for(var i=0;i<list.length;i++){
        let rowcount = table.rows.length;
        var row = table.insertRow(rowcount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML= list[i].id;

        var cell2 = row.insertCell(1);
        cell2.innerHTML=list[i].title;

        var cell3 = row.insertCell(2);
        var element= document.createElement("input");
        element.type="checkbox";

        if(list[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");
        }
        element.addEventListener('change',(event)=>{
            if(event.currentTarget.checked){
                count++;
                checkcounter();
            }else
            {
                count--;
            }
            })
            cell3.appendchild(element);
        }


var count=0;

function checkcounter(){
    let promise = new promise(function(resolve,reject){
    if(count==5){
        resolve("congrats. 5 task have been successfully completed");

    }
    })
    promise.then(function(s){
        alert(s);
    })
}
}

};
