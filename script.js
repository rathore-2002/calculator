let str='';
let screen=document.querySelector('.display');
// let button=document.getElementsByTagName('box1');
screen.addEventListener('click',function(e){
    console.log('You entered the screen');
});
let button=document.getElementsByClassName('item');
for(let i=0;i<button.length;i++){
    let btn= button[i].innerText;
    button[i].addEventListener('click',function(e){
        if(btn==='AC'){
            str='';
            screen.innerHTML='';
        }
        else if(btn==='+/-'){
            str=-str;
            screen.innerHTML=str;
        }
        else if(btn=='%'){
            str=str%100;
            screen.innerHTML(str);
        }
        else if(btn!=='='){
            str+=btn;
            screen.innerHTML=str;
        }
        else if (btn=='='){
            // console.log(str);
            let show =eval(str);
            str=show;
            screen.innerHTML=show;
            console.log(show);
        }
        else{
            screen.innerHTML('NaN');
        }
    });
}