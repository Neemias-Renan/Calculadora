
let soluction = 0;

function AddNumber(num){
    document.getElementById("view").innerText += num;
}

function Ac(){
    array = document.getElementById("view").innerText.split("").slice(0, -1);
    document.getElementById("view").innerText = array.join("");
}

function SaveNumber(){
    document.getElementById("subview").innerHTML += document.getElementById("view").innerText;
    ClearView();
}

function ClearSubview(){
    document.getElementById("subview").innerHTML = "";
    soluction = 0;
}

function ClearView(){
    document.getElementById("view").innerHTML = "";
}

function CalcOperation(operation){
    switch(operation){
        case 1:
            if(soluction === 1){ ClearSubview(); }
            SaveNumber();
            document.getElementById("subview").innerHTML += "<span> + </span>";
            break;
        case 2:
            if(soluction === 1){ ClearSubview(); }
            SaveNumber();
            document.getElementById("subview").innerHTML += "<span> - </span>";
            break;
        case 3:
            if(soluction === 1){ ClearSubview(); }
            SaveNumber();
            document.getElementById("subview").innerHTML += "<span> * </span>";
            break;
        case 4:
            if(soluction === 1){ ClearSubview(); }
            SaveNumber();
            document.getElementById("subview").innerHTML += "<span> / </span>";
            break; 
        case 5:
            if(soluction === 1){ ClearSubview(); }
            SaveNumber();
            document.getElementById("subview").innerHTML += "<span> % </span>";
            break;
        case 6:
            if(soluction !== 1){
                SaveNumber();
                Result();
                soluction = 1;
            }
            break;
    }   
}

function Result(){
    document.getElementById("view").innerText = eval( document.getElementById("subview").innerText );
}

function Reset(){
    ClearView();
    ClearSubview();
}

function convertNumber(){
    document.getElementById("view").innerText = document.getElementById("view").innerText * -1;
}