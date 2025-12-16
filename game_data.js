// Add JS here
var section = 0;
var rooms = [];
var room_t = ["Woods","Cavern","Dungeon","Plains"];
var itm_1t = [];
var itm_2t = [];
var itm_3t = [];
var itm_4t = [];
var itm_1a = [];
var itm_2a = [];
var itm_3a = [];
var itm_4a = [];
var itm_nm = ["Gold","Food","Potion","Armor","Weapon","Arrows","Bullets","Scrolls"];

var obj_nm = ["Chest","Barrel","Vase","Safe"];
var obj_1 = [];
var obj_2 = [];
var obj_3 = [];
var obj_4 = [];
var obj_1a = [];
var obj_2a = [];
var obj_3a = [];
var obj_4a = [];


var room = 0;
var score = 0;
var gold = 0;

var players_pos = 0;


var player = {
    icon: "@",
    health: 10,
    academic: 10,
    mobility: 10,
    strength: 10,
    shield: 0,
    weapon: 1,
    class: 0
};


var player_class = ["Hooman","Fighter","Alchemist","Theologian","Ranger","Monk","Knight","Hedge Mage","Troubadour","Artillerist"];
var player_cls_val = [];
var player_colors = ["white","red","blue","white","green","yellow","purple","lime","cyan","magenta"];
var player_class_health = [0,10,10,10,10,10,10,10,10,10];
var player_class_academic = [0,10,10,10,10,10,10,10,10,10];
var player_class_mobility = [0,10,10,10,10,10,10,10,10,10];
var player_class_strength = [0,10,10,10,10,10,10,10,10,10];
var player_class_health_value = [0,5,0,2,1,1,3,1,1,0];
var player_class_academic_value = [0,0,3,2,0,0,-1,2,1,3];
var player_class_mobility_value = [0,0,0,0,1,3,-1,1,1,-1];
var player_class_strength_value = [0,1,-1,0,1,0,1,0,0,0];


var class_data = {
    1: { name: "Fighter", description: "High Health/Strength (Tank)" },
    2: { name: "Alchemist", description: "Pure Academic (Glass Cannon)" },
    3: { name: "Theologian", description: "Balanced Support" },
    4: { name: "Ranger", description: "Balanced Skirmisher" },
    5: { name: "Monk", description: "Pure Mobility (Evasion)" },
    6: { name: "Knight", description: "Durable Tank (Health/Strength)" },
    7: { name: "Hedge Mage", description: "Versatile Caster" },
    8: { name: "Troubadour", description: "Jack of All Trades" },
    9: { name: "Artillerist", description: "Focused Academic, Frail" }
};

/*Weapon class

weapon names
weapon damage (how many d6 to roll)
weapon ability (what value of the HAMS system to grab from)
weapon requirement
weapon requirement value
weapon damage type
weapon handling (1h or 2h)
*/

var weapon_nme = ["Short Sword","Long Sword","Excalibur","Zweihandler","Dagger","Rapier","Katana","Scimitar","Falchion","Arming Swords","Lance","Pike","War Hammer","Axe","Mace","Morning Star","Quarterstaff","Bow","LongBow","Crossbow","Musket"];
var weapon_dmg = [2,3,5,4,1,2,3,2,3,2,3,3,3,2,2,4,1,2,3,4,5];
var weapon_abi = [4,3];
var weapon_req = [];
var weapon_rev = [];
var weapon_dty = [];
var weapon_hnd = [1,1,1,2,1,1,1,1,1,2,2,2,2,1,1,2,1,2,2,2,2];

/*Armor Class

armor names
armor temporary hit points
armor requirement
armor requirement value

*/

var armor_nme = ["Simple Clothes","Padded Gambeson","Leather Coat","Mail Hauberk","Brigandine","Cuirass 'Breastplate'","Field Plate '3/4 Harness'","Gothic Harness 'Full Plate'"];
var armor_thp = [];
var armor_req = [];
var armor_rev = [];

/*Shield Class

shield names
shield temporary hit points
shield requirement
shield requirement value

*/

var shield_nme = ["Simple Shield","Buckler"];
var shield_thp = [];
var shield_req = [];
var shield_rev = [];


var enemy_nme = ["Ghost","Glarb"];
var enemy_hth = [5,8];
var enemy_dmg = [1,2];
var enemy_icn = ["&","$"];
var enemy_clr = [0,0];

function Start() {
    document.getElementById("splash").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("loading_scene").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("battle").style.display = "none";
    document.getElementById("stage_cleared").style.display = "none";
    document.getElementById("defeat").style.display = "none";
}

function hud(callout){
    if(callout == 0) {
        document.getElementById("splash").style.display = "none";
        document.getElementById("menu").style.display = "block";
		document.getElementById("name_of_class").innerHTML = "";
		document.getElementById("class_description").innerHTML = "";
		document.getElementById("class_icon").innerHTML = "";
		document.getElementById("class_stats").innerHTML = "";
    }

    if(callout == 1) {
        document.getElementById("menu").style.display = "none";
        document.getElementById("loading_scene").style.display = "block";

        //start loading animation
        startLoading();
    }

    if(callout == 2) {
        document.getElementById("loading_scene").style.display = "none";
        document.getElementById("game").style.display = "block";
    }
}

function class_selection(class_num, button_element) {
    var buttons = document.querySelectorAll('.class_select');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });
    button_element.classList.add('selected');

    player.class = class_num;

    if (class_data[class_num]) {
        var selected_class = class_data[class_num];
        document.getElementById("name_of_class").innerHTML = selected_class.name;
        document.getElementById("class_description").innerHTML = selected_class.description;
        document.getElementById("class_icon").innerHTML = `<a class='${player_colors[class_num]}'>@</a>`;
        document.getElementById("class_stats").innerHTML = `<a class='red'>~</a> ${player_class_health_value[player.class]}<a class='white'> }</a> ${player_class_academic_value[player.class]} <a class='yellow'>|</a> ${player_class_mobility_value[player.class]} <a class='purple'>{</a> ${player_class_strength_value[player.class]}`;
    }

    const selectedColor = window.getComputedStyle(button_element.querySelector('a')).color;

    const dpadButtons = document.querySelectorAll('.dpad-btn, .dpad-center');
    dpadButtons.forEach(button => button.style.backgroundColor = selectedColor);

    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => button.style.backgroundColor = selectedColor);
}

function startLoading() {
    Generation(0);
    const bar = document.getElementById('myLoadingBar');
    
    bar.classList.add('is-loading');

    setTimeout(() => {
        bar.classList.remove('is-loading'); 
        bar.style.width = '0%'; 
        
        document.getElementById("myLoadingBar1").style.display = "none";
        hud(2);
    }, 4000);
}

function Generation(conditional) {
    if(conditional == 0) {
        for (var i = 0; i < 10; i++) {
            var level_playarea = Math.floor((Math.random() * room_t.length));
            rooms.push(room_t[level_playarea]);

            var itm1x = Math.floor((Math.random() * itm_nm.length));
            itm_1t.push(itm_nm[itm1x]);
            itm_1a.push(0);

            var obj_1x = Math.floor((Math.random() * obj_nm.length));
            obj_1.push(obj_nm[obj_1x]);
            obj_1a.push(0);

            var itm2x = Math.floor((Math.random() * itm_nm.length));
            itm_2t.push(itm_nm[itm2x]);
            itm_2a.push(0);
            
            var obj_2x = Math.floor((Math.random() * obj_nm.length));
            obj_2.push(obj_nm[obj_2x]);
            obj_2a.push(0);

            var itm3x = Math.floor((Math.random() * itm_nm.length));
            itm_3t.push(itm_nm[itm3x]);
            itm_3a.push(0);

            var obj_3x = Math.floor((Math.random() * obj_nm.length));
            obj_3.push(obj_nm[obj_3x]);
            obj_3a.push(0);

            var itm4x = Math.floor((Math.random() * itm_nm.length));
            itm_4t.push(itm_nm[itm4x]);
            itm_4a.push(0);

            var obj_4x = Math.floor((Math.random() * obj_nm.length));
            obj_4.push(obj_nm[obj_4x]);
            obj_4a.push(0);
        }
    }
}


function keydownFunction() {
    let key = event.key;

    if (key == "w" || key == "W") {
        Game_Command(1);
    }

    if (key == "s" || key == "S") {
        Game_Command(2);
    }

    if (key == "a" || key == "A") {
        Game_Command(4);
    }

    if (key == "d" || key == "D") {
        Game_Command(3);
    }

    if (key == "o" || key == "O") {
        Game_Command(5);
    }

    if (key == "k" || key == "K") {
        Game_Command(6);
    }

}

function keyupFunction() {
}
