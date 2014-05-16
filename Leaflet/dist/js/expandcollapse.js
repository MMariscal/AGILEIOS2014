function expandCollapse() {
    for (var i=0; i<expandCollapse.arguments.length; i++) {
        var element = document.getElementById(expandCollapse.arguments[i]);
        element.style.display = (element.style.display == "none") ? "block" : "none";
    }
}

function collapse() {
    for (var i=0; i<collapse.arguments.length; i++) {
        var element = document.getElementById(collapse.arguments[i]);
        element.style.display = "none";
    }
}

function expand() {
    for (var i=0; i<expand.arguments.length; i++) {
        var element = document.getElementById(expand.arguments[i]);
        element.style.display = "block";
    }
}

function showPage(page){
    collapse('iframe1','iframe2','iframe3','iframe4','iframe5','iframe6','iframe7');

    collapse('iframeb1','iframeb2');

    if(page=="lunes"){
        expand('iframe1');
    }else if(page=="martes"){
        expand('iframe2');
    }else if(page=="miercoles"){
        expand('iframe3');
    }else if(page=="jueves"){
        expand('iframe4');
    }else if(page=="viernes"){
        expand('iframe5');
    }else if(page=="sabado"){
        expand('iframe6');
    }else if(page=="domingo"){
        expand('iframe7');
    }else if(page=="twitter1"){
        expand('iframeb1');
    }else if(page=="twitter2"){
        expand('iframeb2');
    }
}


function showMenu(menu){
    collapse('menu_programa','menu_twitter');

    if(menu=="programa"){
        expand('menu_programa');
        showPage('miercoles');
    }else if(menu=="twitter"){
        expand('menu_twitter');
        showPage('twitter1');
    }else{
        collapse('menu_programa','menu_twitter');
        showPage('');
    }
}

function selectButton(){
    for (var i=0; i<selectButton.arguments.length; i++) {
        var element = document.getElementById(selectButton.arguments[i]);
        element.style.border = "1px solid #0000ff";
    }
}

function unselectButton(){
    for (var i=0; i<unselectButton.arguments.length; i++) {
        var element = document.getElementById(unselectButton.arguments[i]);
        element.style.border = "0px solid #0000ff";
    }
}