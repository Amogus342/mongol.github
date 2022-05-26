var slova =[ "жираф", "дыня","гроб", "еж" ];
var slovo = [];
var n =0;
var s="";
var kolv=0;
  alert("iytuiy");
function start(){

  n = Math.floor(Math.random() * 4);
 s= slova[n];

kolv=s.length;
//сначала стираем все старые границы
for (var i=0; i<kolv; i++){
    idtd= document.getElementById("buk"+i);
    idtd.className="downborder";
    }
    //разбиваем слово по буквам
for (var i=0; i<kolv; i++){
slovo[i] = s.slice(i, i+1);
alert(slovo[i]);
}
for (var i=0; i<kolv; i++){
idtd= document.getElementById("buk"+i);
idtd.className="downborder";
}

}
document.addEventListener("keydown", move);
function move(event){
    var b=event.key;
          //бежим в цикле и сравниваем каждую букву
     for (var i = 0; i < kolv; i++) {
       if(String(b).toLocaleLowerCase()==slovo[i]){
   alert("совпало");
   idImg = document.getElementById("buk" + i);
   idImg.innerHTML=String(b).toLocaleUpperCase();
    //=slovo[i]
     }
    }
}