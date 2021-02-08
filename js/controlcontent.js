let btns = [];
let content = [];
document.body.onload = function(){
    
    // btns.push(document.getElementById('btn_1'));
    // alert( btns );
    // element = document.getElementById(id);
    for (let i = 0; i < 8; i++) {
        // alert( 'btn_'+ i );
        btns.push(document.getElementById('btn_'+i));
        content.push(document.getElementById('content_'+i));
    }
    // alert( btns );
}


function set_content(id){

    for (let i = 0; i < 8; i++) {
        // alert( 'btn_'+ i );
        btns[i].classList.remove("active-btn");
        content[i].classList.remove("active-content");
    }
    btns[id].classList.add("active-btn");
    content[id].classList.add("active-content");
  
}