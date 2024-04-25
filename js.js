function Provera(){
    var uzorak_ime = document.MojaForma.ime.value;
    var uzorak_prezime = document.MojaForma.prezime.value;
    var uzorak_email = document.MojaForma.email.value;
    var uzorak_pass = document.MojaForma.pass.value;
    var uzorak_poruka = document.MojaForma.poruka.value;

    if(uzorak_ime ==="" || uzorak_ime===null){
        alert("Niste uneli ime!");
        return;
    }
    else if(uzorak_prezime ==="" || uzorak_prezime ===null){
        alert("Niste uneli prezime!");
        return;
    }
    else if(uzorak_email ==="" || uzorak_email ===null){
        alert("Niste uneli email!");
        return;
    }
    else if(uzorak_pass ==="" || uzorak_pass ===null){
        alert("Niste uneli šifru!");
        return;
    }
    else if(uzorak_poruka ==="" || uzorak_poruka ===null){
        alert("Niste uneli poruku!");
        return;
    }
    else{
        alert("Poruka je poslata!");
    }
    
}

function Dodaj(){
    alert("Dodali ste artikal u korpu!");
}