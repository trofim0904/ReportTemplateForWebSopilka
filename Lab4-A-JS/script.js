header = document.getElementById('list');
let ul = document.createElement('ul');
header.appendChild(ul);

let labels = ["Про нас", "Меню", "Бар", "Кухня", "Галерея", "Повернутись до звіту"];
let refs = ["index.html", "page2.html", "page3.html","page4.html","page5.html","../lab4.html"];
for (let i = 0; i < labels.length; i++){
    switch(i) {
    case 2:
        let li1 = document.createElement('li');
        let ul1 = document.createElement('ul');
        ul.appendChild(li1);
        li1.appendChild(ul1);
        for (let m = 0; m < 2; m++){
            let li2 = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute("href", refs[i]);
            a.innerHTML = labels[i];
            li2.appendChild(a);
            ul1.appendChild(li2);
            i++;
        }
        i--;
        break;
    default:
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute("href", refs[i]);
        a.innerHTML = labels[i];
        li.appendChild(a);
        ul.appendChild(li);
    }

}