let firstName=document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let rollNo = document.getElementById('rollNo');
let studentList= document.getElementById("students-list")
let=document.getElementById("text")

let stdObj={"firstName":"","lastName":"","rollNo":"","edit":false};

stdList=[];

function empty(){
    alert("Please fill in all fields")
}

function emptyTheInputField(){
    firstName.value=""; 
    lastName.value="";
    rollNo.value="";
    edit=false;
}


function printData(){
    var data="";
    for (let i = 0; i <stdList.length ; i++) {
if(stdList[i]["edit"]){
    data+="<tr><td>"+stdList[i]["firstName"]+"</td><td>"+stdList[i]["lastName"]+"</td><td>"+stdList[i]["rollNo"]+"</td><td><a href='#' onclick='updateRecord("+i+")' class='btn btn-success btn-sm edit sm-mb-2'>Update</a><a href='#' onclick='deleteRecord("+i+")' class='btn btn-danger btn-sm edit ''>Delete</a></td></tr>"        
}else{
    data+="<tr><td>"+stdList[i]["firstName"]+"</td><td>"+stdList[i]["lastName"]+"</td><td>"+stdList[i]["rollNo"]+"</td><td><a href='#' onclick='editRecord("+i+")' class='btn btn-warning btn-sm edit sm-mb-2'>Edit</a><a href='#' onclick='deleteRecord("+i+")' class='btn btn-danger btn-sm edit ''>Delete</a></td></tr>"        

}
    }
    studentList.innerHTML=data;
}

function addRecord(){
    stdObj={"firstName":firstName.value,"lastName":lastName.value,"rollNo":rollNo.value,"edit":false};
    console.log("ss");
    // stdObj["firstName"]=firstName.value;
    // stdObj["lastName"]=lastName.value;
    // stdObj["rollNo"]=rollNo.value;
    console.log(stdObj);
    stdList.push(stdObj);
    console.log(stdList);
    console.log(stdList);
 
    printData();


}

function  onSubmit(){
    // alert();
    if(firstName.value==""|| lastName.value==""||rollNo.value==""){
        console.log("if");
        empty()
    }
else{
    console.log("else");
    addRecord();
    console.log("ot");
    
    emptyTheInputField();

}

}


function deleteRecord(i){
console.log(i);

stdList.splice(i,1);
console.log(stdList);
printData();

}

function editRecord(i){
    
    let name1= 
    "<input type= 'text' value='"+stdList[i]['firstName']+"' name='text' id='fName' placeholder= 'Enter first name' class='form-control'>"
    let name2= 
    "<input type= 'text' value='"+stdList[i]['lastName']+"'  name='text' id='lName' placeholder= 'Enter last name' class='form-control'>"
    let name3= 
    "<input type='text' value='"+stdList[i]['rollNo']+"'  name='text' id='rNo' placeholder= 'Enter roll no' class='form-control'>"

    // prompt("firstName",stdList[i]['firstName']); 
    // let name2= prompt("lastName",stdList[i]['lastName']); 
    // let name3= prompt("rollNo",stdList[i]['rollNo']); 
    stdObj={"firstName":name1,"lastName":name2,"rollNo":name3,"edit":true };
    stdList[i]=stdObj;

    printData();
    

}



function updateRecord(i){
    
    let firstName=document.getElementById('fName');
let lastName = document.getElementById('lName');
let rollNo = document.getElementById('rNo');

    let name1= firstName.value;
    let name2= lastName.value;
    let name3= rollNo.value;

    console.log(name1);
    console.log(name2);
    console.log(name3);
    stdObj={"firstName":name1,"lastName":name2,"rollNo":name3,"edit":false};
    stdList[i]=stdObj;
    
    printData();
}






