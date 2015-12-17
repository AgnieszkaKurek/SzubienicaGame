var haslo = "-----------------------------------";
var random = Math.floor((Math.random() * 20) + 1);
switch (random) {
    var haslo1 = new Array(20);
    haslo1[1] = "Bez pracy nie ma kołaczy"; break;
    haslo1[2]= "Bogatemu to i byk się ocieli"; break;
    haslo1[3] = "Co dwie głowy to nie jedna"; break;
    haslo1[4]= "Co nie siłą to rozumem"; break;
    haslo1[5] = "Co za dużo to nie zdrowo"; break;
    haslo1[6]= "Co zaszkodziło to nauczyło"; break;
    haslo1[7] = "Czyja rola tego wola"; break;
    haslo1[8]= "Czuć się jak ryba w wodzie"; break;
    haslo1[9] = "Dla chcącego nic trudnego"; break;
    haslo1[10]= "Dobry zwyczaj nie pożyczaj"; break;
    haslo1[11] = "Drzewa umierają stojąc"; break;
    haslo1[12]= "Dziecii i ryby głosu nie mają"; break;
    haslo1[13] = "I kwaśne jabłko robak toczy"; break;
    haslo1[14]= "Im dalej w las tym więcej dzrew"; break;
    haslo1[15] = "Idzie luty podkuj buty"; break;
    haslo1[16]= "Jak cię widzą tak cię piszą"; break;
    haslo1[17] = "Jak krew w piach"; break;
    haslo1[18] = "Jak kamień w wodę"; break;
    haslo1[19] = "Jaki ojciec, taki syn"; break;
    haslo1[20] = "Jak trwoga to do boga"; break;
    default: haslo = "";

}

haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var ile_skuch = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");



function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}
window.onload = start;
var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ż";


function start() {
    var tresc_diva = "";
    for (i = 0; i <= 34; i++) {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + ' <div style="clear:both;"></div>';
    }
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}
String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}
function sprawdz(nr) {
    var trafiona = false;
    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona == true) {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        wypisz_haslo();
    }
    else {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        //skucha
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src = "' + obraz + '"alt=""/>';

        }

    //wygrana 
    if (haslo == haslo1)
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło:" + haslo + '<br/><br/><span class="reset" onclick="location.reload() ">Jeszcze raz?</span>';
   

    //przegrana
    if (ile_skuch>=9)
        document.getElementById("alfabet").innerHTML = "Nie udało się!!! Prawidłowe hasło:" + haslo + '<br/><br/><span class="reset" onclick="location.reload() ">Jeszcze raz?</span>';
}
