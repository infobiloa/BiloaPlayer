
function getparam(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)}
let s=a=>document.getElementById(a);

let get=()=>{
  getbase();
}
let getbase=()=>{
    let ply = [];
  
  
    ply.id =  s('videourl').value;
      
   
    console.log(ply);
  
    var arr = JSON.stringify(Object.assign({}, ply))
    console.log(btoa(arr));
    window.base =btoa(arr);
    iframe();
    return btoa(arr);
}



let openfluid=()=> { window.open('fluid.html?id='+base)}


let pmsg = 'Copy Embed Code' ;
//Player Embedders

let embedfluid=()=> {
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="fluid.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}




let iframe=()=> {
    s('fluid').src='fluid.html?id='+base;
  
  
}