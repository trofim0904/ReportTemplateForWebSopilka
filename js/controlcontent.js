let btns = [];
let content = [];
let count;
document.body.onload = function(){
    count = document.querySelectorAll("#left-btns li").length;
    // btns.push(document.getElementById('btn_1'));
    // alert( count );
    // element = document.getElementById(id);
    
    for (let i = 0; i < count; i++) {
        // alert( 'btn_'+ i );
        btns.push(document.getElementById('btn_'+i));
        content.push(document.getElementById('content_'+i));
    }
    // alert( btns );
}


function set_content(id){

    for (let i = 0; i < count; i++) {
        // alert( 'btn_'+ i );
        btns[i].classList.remove("active-btn");
        content[i].classList.remove("active-content");
    }
    btns[id].classList.add("active-btn");
    content[id].classList.add("active-content");
  
}