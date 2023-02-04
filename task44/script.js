var obj1={name:"person1",age:5};
var obj2={age:5,name:"person1"};
var res1 =JSON.stringify (obj1);
var res2 =JSON.stringify (obj2)
if(res1===res2){ 
    console.log("true")
}
else{
    console.log("false")
}

/output    false

/2 )display all country flags
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    for(var i=0;i<data.length;i++){
    console.log(data [i].flag);
}
}
//output
/3 display all country name,region,subregion,population.
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    for(var i=0;i<data.length;i++){
    console.log(data [i].name.common,data [i].region,data[i].subregion,data [i].population);
}
}

