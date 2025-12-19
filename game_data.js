// Add JS here
var mottos = [
    "Break it. Loot it. Repeat it.",
    "The faster you smash, the richer you get.",
    "Unleash the Fury. Claim the Fortune.",
    "There's only one way through: Destroy everything.",
    "Upgrade your Guts, upgrade your Grit, upgrade your Grade.",
    "Brains, Brawn, and Bosses: It takes all three.",
    "Master the Mobility, Maximize the Might.",
    "Every run is a test of Strength and Scholarship.",
    "Find the key. Face the boss. Restart richer.",
    "Dungeons are temporary. Loot is eternal.",
    "Ruin leads to Riches. Every time."
];

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
var itm_nm = ["Gold","Food","Potion","Armor","Weapon","Arrows","Bullets","Scrolls","Water"];

var obj_nm = ["Chest","Vase"];
var obj_icn = ["(", "<"];
var obj_icn_o = [")", ">"];
var obj_icn_d = "*";
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
    class: 0,
    gold: 0,
    food: 0,
    potion: 0,
    arrows: 0,
    bullets: 0,
    scrolls: 0,
    water: 0
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
    document.getElementById("pause").style.display = "none";
    document.getElementById("inventory").style.display = "none";
    document.getElementById("attention_class_select").style.display = "none";

    //motto_funny
    var mottox = Math.floor((Math.random() * mottos.length));
    document.getElementById("motto_funny").innerHTML = mottos[mottox];
}

function hud(callout){
    if(callout == 0) {
        player.class = 0;
        document.getElementById("splash").style.display = "none";
        document.getElementById("menu").style.display = "block";

        document.getElementById("pause").style.display = "none";
        document.getElementById("inventory").style.display = "none";
		document.getElementById("name_of_class").innerHTML = "Select a Class";
		document.getElementById("class_description").innerHTML = "its too dangerous to go in without a class";
		document.getElementById("class_icon").innerHTML = "@";
		document.getElementById("class_stats").innerHTML = "Look so many to choose from";
        
    }

    if(callout == 1) {

        if(player.class != 0) {
            document.getElementById("menu").style.display = "none";
            document.getElementById("loading_scene").style.display = "block";

            //start loading animation
            startLoading();
        } else {
            document.getElementById("attention_class_select").style.display = "block";
        }
    }

    if(callout == 2) {
        document.getElementById("loading_scene").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 3) {
        document.getElementById("pause").style.display = "block";
        document.getElementById("game").style.display = "none";
    }

    if(callout == 4) {
        document.getElementById("pause").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 5) {
        document.getElementById("inventory").style.display = "block";
        document.getElementById("game").style.display = "none";
        document.getElementById("plyr_gold_count").innerHTML = "x " + player.gold;
        document.getElementById("plyr_food_count").innerHTML = "x " + player.food;
        document.getElementById("plyr_water_count").innerHTML = "x " + player.water;
        document.getElementById("plyr_potion_count").innerHTML = "x " + player.potion;
        document.getElementById("plyr_arrow_count").innerHTML = "x " + player.arrows;
        document.getElementById("plyr_bullet_count").innerHTML = "x " + player.bullets;
        document.getElementById("plyr_scroll_count").innerHTML = "x " + player.scrolls;

        if (class_data[player.class]) {
            var selected_class = class_data[player.class];
            document.getElementById("plyr_inv_class_name").innerHTML = selected_class.name;
            document.getElementById("plyr_cls_icn").innerHTML = `<a class="icns ${player_colors[player.class]}">@</a>`;
        }

    }

    if(callout == 6) {
        document.getElementById("inventory").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 7 ) {
        document.getElementById("attention_class_select").style.display = "none";
    }

    if(callout == 8 ) {
        document.getElementById("attention_early_development").style.display = "none";
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

    document.documentElement.style.setProperty('--shadow-color', selectedColor);

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
        World()
        hud(2);
    }, 4000);


    setTimeout(() => {
        document.getElementById("myLoadingBar1").style.display = "block";
    }, 4500);
}

function Generation(conditional) {
    if(conditional == 0) { // generate the world in a section
        rooms = [];
        itm_1t = [];
        itm_2t = [];
        itm_3t = [];
        itm_4t = [];
        itm_1a = [];
        itm_2a = [];
        itm_3a = [];
        itm_4a = [];
        obj_1 = [];
        obj_2 = [];
        obj_3 = [];
        obj_4 = [];
        obj_1a = [];
        obj_2a = [];
        obj_3a = [];
        obj_4a = [];


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

function World(){
    //show the player what the world looks like
    document.getElementById("game_sene").innerHTML = "##########" + "<br>" + 
    "<a class='brown'>:</a>" + 
    "<a id='plyr_sp1'>_</a><a id='itm_sp1'>1</a>" + 
    "<a id='plyr_sp2'>_</a><a id='itm_sp2'>1</a>" +
    "<a id='plyr_sp3'>_</a><a id='itm_sp3'>1</a>" + 
    "<a id='plyr_sp4'>_</a><a id='itm_sp4'>1</a>" + 
    "<a class='brown'>:</a>" + 
    "<br>" + "##########";

    if(players_pos == 0) {
        document.getElementById("plyr_sp1").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";
    }
    if(players_pos == 1) {
        document.getElementById("plyr_sp2").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";
    }
    if(players_pos == 2) {
        document.getElementById("plyr_sp3").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";
    }
    if(players_pos == 3) {
        document.getElementById("plyr_sp4").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";
    }

    //we need to know the current room of the player is in to pull from the arrays
    var x_known = room;

    //load the items into their spots
    var obj1_name = obj_1[x_known];
    var obj1_index = obj_nm.indexOf(obj1_name);
	if(obj_1a[x_known] == 0) {
		document.getElementById("itm_sp1").innerHTML = obj_icn[obj1_index];
	} else if(obj_1a[x_known] == 1) {
        document.getElementById("itm_sp1").innerHTML = obj_icn_o[obj1_index];
    } else {
		document.getElementById("itm_sp1").innerHTML = obj_icn_d;
	}

    var obj2_name = obj_2[x_known];
    var obj2_index = obj_nm.indexOf(obj2_name);
	if(obj_2a[x_known] == 0) {
		document.getElementById("itm_sp2").innerHTML = obj_icn[obj2_index];
	} else if(obj_2a[x_known] == 1) {
        document.getElementById("itm_sp2").innerHTML = obj_icn_o[obj2_index];
    }else {
		document.getElementById("itm_sp2").innerHTML = obj_icn_d;
	}
	
    var obj3_name = obj_3[x_known];
    var obj3_index = obj_nm.indexOf(obj3_name);
	if(obj_3a[x_known] == 0) {
		document.getElementById("itm_sp3").innerHTML = obj_icn[obj3_index];
     } else if(obj_3a[x_known] == 1) {
        document.getElementById("itm_sp3").innerHTML = obj_icn_o[obj3_index];
    } else {
		document.getElementById("itm_sp3").innerHTML = obj_icn_d;
	}

    var obj4_name = obj_4[x_known];
    var obj4_index = obj_nm.indexOf(obj4_name);
    if(obj_4a[x_known] == 0) {
		document.getElementById("itm_sp4").innerHTML = obj_icn[obj4_index];
	} else if(obj_4a[x_known] == 1) {
        document.getElementById("itm_sp4").innerHTML = obj_icn_o[obj4_index];
    } else {
		document.getElementById("itm_sp4").innerHTML = obj_icn_d;
	}
}


function keydownFunction() {
    let key = event.key;

    if (key == "w" || key == "W") {
        //Game_Command(1);
    }

    if (key == "s" || key == "S") {
        //Game_Command(2);
    }

    if (key == "a" || key == "A") {
        Game_Command(1);
    }

    if (key == "d" || key == "D") {
        Game_Command(2);
    }

    if (key == "o" || key == "O") {
        Game_Command(3);
    }

    if (key == "k" || key == "K") {
        Game_Command(4);
    }

}

function keyupFunction() {
}


function Game_Command(command) {
    if(command == 1) {
        if(players_pos != 0) {
            players_pos -= 1;
            World();
        } else if(room != 0) {
            room -= 1;
            players_pos = 3;
			World();
        }
    }
    if(command == 2) {
        if(players_pos != 3) {
            players_pos += 1; 
            World();
        } else if(players_pos == 3) {
            if(room != 9) {
                room += 1;
                players_pos = 0;
                World();
            }
        }
    }
	if(command == 3) {
		if(players_pos == 0){
			if(obj_1a[room] == 0) {
				var itm_g = itm_1t[room];
				switch(itm_g){
					case "Gold": player.gold += 1; break;
					case "Food": player.food += 1; break;
					case "Potion": player.potion += 1; break;
					case "Arrows": player.arrows += 1; break;
					case "Bullets": player.bullets += 1; break;
					case "Scrolls": player.scrolls += 1; break;
					case "Water": player.water += 1; break;
				}
				obj_1a[room] = 1;
				World();
			}
		}
		if(players_pos == 1){
			if(obj_2a[room] == 0) {
				var itm_g = itm_2t[room];
				switch(itm_g){
					case "Gold": player.gold += 1; break;
					case "Food": player.food += 1; break;
					case "Potion": player.potion += 1; break;
					case "Arrows": player.arrows += 1; break;
					case "Bullets": player.bullets += 1; break;
					case "Scrolls": player.scrolls += 1; break;
					case "Water": player.water += 1; break;
				}
				obj_2a[room] = 1;
				World();
			}
		}
		if(players_pos == 2){
			if(obj_3a[room] == 0) {
				var itm_g = itm_3t[room];
				switch(itm_g){
					case "Gold": player.gold += 1; break;
					case "Food": player.food += 1; break;
					case "Potion": player.potion += 1; break;
					case "Arrows": player.arrows += 1; break;
					case "Bullets": player.bullets += 1; break;
					case "Scrolls": player.scrolls += 1; break;
					case "Water": player.water += 1; break;
				}
				obj_3a[room] = 1;
				World();
			}
		}
		if(players_pos == 3){
			if(obj_4a[room] == 0) {
				var itm_g = itm_4t[room];
				switch(itm_g){
					case "Gold": player.gold += 1; break;
					case "Food": player.food += 1; break;
					case "Potion": player.potion += 1; break;
					case "Arrows": player.arrows += 1; break;
					case "Bullets": player.bullets += 1; break;
					case "Scrolls": player.scrolls += 1; break;
					case "Water": player.water += 1; break;
				}
				obj_4a[room] = 1;
				World();
			}
		}
	}
}
