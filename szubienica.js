var password= new Array (20);
var random = Math.floor((Math.random() * 20) + 1);
switch (random) 

password[0] = "Bez pracy nie ma kołaczy"; 
password[1]= "Bogatemu to i byk się ocieli";
password[2] = "Co dwie głowy to nie jedna";
password[3]= "Co nie siłą to rozumem"; 
password[4] = "Co za dużo to nie zdrowo";
password[5]= "Co zaszkodziło to nauczyło";
password[6] = "Czyja rola tego wola"; 
password[7]= "Czuć się jak ryba w wodzie"; 
password[8] = "Dla chcącego nic trudnego"; 
password[9]= "Dobry zwyczaj nie pożyczaj"; 
password[10] = "Drzewa umierają stojąc"; 
password[11]= "Dziecii i ryby głosu nie mają"; 
password[12] = "I kwaśne jabłko robak toczy"; 
password[13]= "Im dalej w las tym więcej dzrew"; 
password[14] = "Idzie luty podkuj buty"; 
password[15]= "Jak cię widzą tak cię piszą";
password[16] = "Jak krew w piach";
password[17] = "Jak kamień w wodę";
password[18] = "Jaki ojciec, taki syn"; 
password[19] = "Jak trwoga to do boga"; 


password = password.toUpperCase();
var length = password.length;
var how_many_mistakes = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");



function type_password()
{
    document.getElementById("board").innerHTML = password;
}
window.onload = start;
var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ż";


function start() {
    var contents_div = "";
    for (i = 0; i <= 34; i++) {
        var element = "lit" + i;
        contents_div = contents_div + '<div class="letters" onclick="check(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
        if ((i + 1) % 7 == 0) contents_div = contents_div + ' <div style="clear:both;"></div>';
    }
    document.getElementById("alphabet").innerHTML = contents_div;
    type_password();
}
String.prototype.setMark = function (space, mark) {
    if (space > this.length - 1) return this.toString();
    else return this.substr(0, space) + mark + this.substr(space + 1);
}
function check(nr) {
    var hit = false;
    for (i = 0; i < length; i++) {
        if (password.charAt(i) == letters[nr]) {
            password1 = password1.setMark(i, letters[nr]);
            hit = true;
        }
    }
    if (hit == true) {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        type_password();
    }
    else {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        //mistake
        how_many_mistake++;
        var Image = "img/s" + how_many_mistake + ".jpg";
        document.getElementById("gibbet").innerHTML = '<img src = "' + Image + '"alt=""/>';

        }

    //win
    if (password == password1)
        document.getElementById("alphabet").innerHTML = "Tak jest! Podano prawidłowe hasło:" + password + '<br/><br/><span class="reset" onclick="location.reload() ">Jeszcze raz?</span>';
   

    //loss
    if (how_many_mistake>=9)
        document.getElementById("alphabet").innerHTML = "Nie udało się!!! Prawidłowe hasło:" + password + '<br/><br/><span class="reset" onclick="location.reload() ">Jeszcze raz?</span>';
}
