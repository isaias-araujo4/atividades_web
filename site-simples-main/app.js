'use strict'
const switcher = document.querySelector('.bnt');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var classname = document.body.className;
    if(classname == "ligth=theme") {
        this.textcontent = "dark";
    }
    else{
        this.textcontent = "light";
    }

    console.log('current class name: ' + classname);
});