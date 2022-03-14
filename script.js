function zamanbul(){
    if(saat.value>6 &&saat.value<11){
        document.getElementById("sonuç").innerHTML="günaydın";
    }
    else if(saat.value>11 &&saat.value<19){
        document.getElementById("sonuç").innerHTML="iyi öğlenler";
    }
    else if(saat.value>19 &&saat.value<23){
        document.getElementById("sonuç").innerHTML="iyi akşamlar";
    }
    else if(saat.value>23 &&saat.value<6){
        document.getElementById("sonuç").innerHTML="iyi geceler";
    }
    else{
        document.getElementById("sonuç").innerHTML="yanlış değer";
    }
}