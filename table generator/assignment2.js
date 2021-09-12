function CreateTable(){
    if(document.getElementById("tableArea").contains(document.getElementById("table"))){
        document.getElementById("table").remove();
    }//drop table if exists -> avoid duplicate

    var row = document.getElementById("size").value;
    var column = document.getElementById("size").value;

    var table = document.createElement("table");//create table by id
    table.id = "table";
    document.getElementById("tableArea").appendChild(table);//add sub-elements to table element

    for(var r = 0; r < row; r++){
        var x = document.getElementById("table").insertRow(r);//insertRow = add rows to table 添加行
        x.id = "newtr";
        for(var c = 0; c < column; c++){
            var y = x.insertCell(c);//insertCell = add cells to rows 添加单元格
            var writer = r + 1;
            var writec = c + 1;
            y.innerHTML = writer + ", " + writec;
            y.id = "newtd";
        }
    }    
}
document.getElementById("create").addEventListener("click", CreateTable, false);

function ClearInput(){//clear input content only
    document.getElementById("size").value=null;
}
document.getElementById("clear").addEventListener("click", ClearInput, false);