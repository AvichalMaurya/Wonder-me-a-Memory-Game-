alert("Welcome to the Wonder Me Game! You will be shown 9 random images. Try to remember them and then click 'Play' to proceed.");
let all_card_imglink={
    1:"https://th.bing.com/th/id/OIP.YCysWiDN5r1qyfByFbx2kwHaEo?w=289&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    2:"https://th.bing.com/th/id/OIP.TaAjGWRRmTpDu5OeHQ7UgQHaEo?w=290&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    3:"https://th.bing.com/th/id/OIP.m7qq6kb9S5JTho8o141npwHaEK?w=315&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    4:"https://th.bing.com/th/id/OIP.XOK1Dzbq5ognvOMdlkV6DAHaEK?w=306&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    5:"https://th.bing.com/th/id/OIP.aUKExo8ule-kidLzckKKiQHaEK?w=305&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    6:"https://th.bing.com/th/id/OIP.XDbwHyaeldBkWawoOPB0BgHaEK?w=310&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    7:"https://th.bing.com/th/id/OIP.kTBy7qKkEaDmnYFxfVuDDAHaEo?w=294&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    8:"https://th.bing.com/th/id/OIP.zyRuQTQc38qzFkCCO66i8gHaEo?w=279&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    9:"https://th.bing.com/th/id/OIP.cjw-WvyZduBn9tPRSThK5AHaEM?w=284&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    10:"https://th.bing.com/th/id/OIP.Jf-KpTfcN1R3EGobwHhRzAHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    11:"https://th.bing.com/th/id/OIP.SyX369wWMlfSv4cCVkPHwwHaEJ?w=313&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    12:"https://th.bing.com/th/id/OIP.TovjDePnha1X97KNr6c3FAHaEC?w=323&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    13:"https://th.bing.com/th/id/OIP.WsLotFbciOouldRCTpBnNgHaEo?w=282&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    14:"https://th.bing.com/th/id/OIP.2xhoOawnzuD0WAm0Zx8SPgHaEK?w=311&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    15:"https://th.bing.com/th/id/OIP.RG1laGZYFYFPZc0vcjLeXgHaEK?w=311&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    16:"https://th.bing.com/th/id/OIP.TRnoXLjxnhqpxPIb7TIHCgHaEo?w=300&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    17:"https://th.bing.com/th/id/OIP.-YAGmLvdc3a657FjHMS9YgHaEo?w=292&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    18:"https://th.bing.com/th/id/OIP.neBjuJE079Nh_WyXvdf-4QAAAA?w=324&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    19:"https://th.bing.com/th/id/OIP.W3QIhHqc0dM4xTk7cRxHSgHaEK?w=324&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    20:"https://th.bing.com/th/id/OIP.wPHCZIKIuhqaNKnQp0jyvAHaE8?w=295&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    21:"https://th.bing.com/th/id/OIP.Qgu17T8e3mUc8yRrgTqyawHaEo?w=315&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    22:"https://th.bing.com/th/id/OIP.nHBarAAfjL5TrdlSR_1pywHaE7?w=294&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    23:"https://th.bing.com/th/id/OIP.-tGmSVNyZHv7zBkRQDwOBQHaEr?w=311&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    24:"https://th.bing.com/th/id/OIP.JVOhjP8QiaUG4y7IifKA9AHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    25:"https://th.bing.com/th/id/OIP.H5SjGpCDWfw_LesDlrigkQHaEK?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    26:"https://th.bing.com/th/id/OIP.JQYIM8y_BlXxijWs4WFdGwHaEK?w=290&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    27:"https://th.bing.com/th/id/OIP._5E2y95ZyDX1DTmZGBTPmQHaEC?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    28:"https://th.bing.com/th/id/OIP.oJbEpGNa_b0A1TvoDQqXYAHaEo?w=275&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    29:"https://th.bing.com/th/id/OIP.GEeJYPdz-TgxBYFDIigQawHaE7?w=274&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    30:"https://th.bing.com/th/id/OIP.5fTqEFu2e2nPw7l_AAEBswHaEK?w=326&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    31:"https://th.bing.com/th/id/OIP.F_iSkf34OtkX7HPonDOfXgHaEJ?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    32:"https://th.bing.com/th/id/OIP.Byb03rsM45z8q71qKQWHIQHaEo?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    33:"https://th.bing.com/th/id/OIP.CVljQxINMglHkgGqFWUBqAHaEc?w=284&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    34:"https://th.bing.com/th/id/OIP.75ySIAYLAMtmIabaBQJIOwHaE8?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    35:"https://th.bing.com/th/id/OIP.gEncNMziXDypsoAtjTaOsgHaEK?w=304&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    36:"https://th.bing.com/th/id/OIP.1TM4Rksemzcuwo6EASvL0wHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
}
let all_cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
let selected_cards = [];
//to select 9 random cards from the all_cards array
while (selected_cards.length < 9) {
  let random_index = Math.floor(Math.random() * all_cards.length);
  if (selected_cards.indexOf(all_cards[random_index]) === -1) {
    selected_cards.push(all_cards[random_index]);
  }
}
// to display the selected cards in the remember-obj class and respective ids
for (let i = 0; i < selected_cards.length; i++) {
    let card_holder = document.getElementById(`remember-obj-${i+1}`);
    let selected_img = all_card_imglink[selected_cards[i]];
    card_holder.innerHTML = `<img src="${selected_img}">`;
}
//to start game
let lives=3;
let correctchosen=0;
function startGame() {
    //function to check if card clicked is thr correct one or not
    function cardcheck(cardvalue){
        console.log("done");
        if (selected_cards.includes(cardvalue)){
            document.getElementById(`all-card-button-${cardvalue}`).style.border= "2px solid green";
            correctchosen=correctchosen+1;
            if (correctchosen==9){
                alert("You Won!!");
                document.getElementsByClassName("find-div")[0].remove();
            }
        }
        else{
            document.getElementById(`all-card-button-${cardvalue}`).style.border= "2px solid red";
            lives=lives-1;
            if(lives==-1){
                alert("You Lost");
                document.getElementsByClassName("find-div")[0].remove();
            }
            else{
                score.innerHTML=`   Lives:${lives}`;
            }
        }
        }
    //to display score board
    let score=document.getElementsByClassName("score-board")[0];
    score.innerHTML=`   Lives:${lives}`;
    alert("Game started!");
    //removing random selected cards
    document.getElementsByClassName("remember-container")[0].remove();
    //creating div for game container
    let elementfind = document.createElement("div");
    elementfind.className = "find-div";
    let title = document.createElement("h2");
    title.className = "find-title";
    title.textContent = "Find the cards you remember!";
    elementfind.appendChild(title);
    //creating card container
    let all_cards_container=document.createElement("div");
    all_cards_container.className="all-cards-container";
    //suffling cards
    let suffle_cards = [];
    while (suffle_cards.length < 36) {
    let random_index = Math.floor(Math.random() * all_cards.length);
        if (suffle_cards.indexOf(all_cards[random_index]) === -1) {
            suffle_cards.push(all_cards[random_index]);
        }
    }
    //putting suffle cards in a container and putting the container in all-cards-container.
    for (let i = 0; i < suffle_cards.length; i++) {
    let all_card_holder = document.createElement("button");
    all_card_holder.className="all-card-button";
    all_card_holder.id= `all-card-button-${suffle_cards[i]}`;
    all_card_holder.onclick = function() {
        cardcheck(suffle_cards[i]);
        };
    all_card_holder.value=`${suffle_cards[i]}`;
    let suffle_img = all_card_imglink[suffle_cards[i]];
    all_card_holder.innerHTML = `<img src="${suffle_img}" alt="card">`;
    all_cards_container.appendChild(all_card_holder);
    }
    elementfind.append(all_cards_container);
    let bbody= document.body;
    bbody.appendChild(elementfind);
}

