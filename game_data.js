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

var quotes = [
    "Our greatest glory is not in never falling, but in rising every time we fall, - Confucius",
    "Fall seven times, stand up eight, - Japaneese Proverb",
    "Success is not final, failure is not fatal: it is the courage to continue that counts, - Winston Churchill",
    "I have not failed. I've just found 10,000 ways that won't work, - Thomas Edison",
    "The best time to plant a tree was 20 years ago. The second best time is now, - Chinese Proverb",
    "Failure is simply the opportunity to begin again, this time more intelligently, - Henry Ford",
    "You have to let your failures teach you, - Barack Obama",
    "I can accept failure, everyone fails at something. But I can't accept not trying, - Michael Jordan",
    "Only those who dare to fail greatly can ever achieve greatly, - Robert F Kennedy",
    "It is hard to fail, but it is worse never to have tried to succeed, - Theodore Rosevelt",
    "It is not the mountain we conquer but ourselves, -  Edmund Hillary",
    "Courage isn't having the strength to go on—it is going on when you don't have strength, - Napoleon Bonaparte",
    "Strength does not come from physical capacity. It comes from an indomitable will, - Mahatma Gandhi",
    "You never know how strong you are, until being strong is your only choice, - Bob Marley",
    "Valor is stability, not of legs and arms, but of courage and the soul, - Michel de Montaigne",
    "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear, - Nelson Mandela",
    "True valor lies between cowardice and rashness, - Miguel de Cervantes",
    "Our own heart, and not other men's opinions, forms our true honor, - Samuel Taylor Coleridge",
    "The secret to happiness is freedom, the secret of freedom is courage, - Thucydides",
    "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others, - Nelson Mandela"
];

var encounter_sentence = [
    "A group of goblins leaps from the ceiling rafters just as you step into a dimly lit chamber.",
    "You pull a gold coin from a fountain, only for the water to solidify into a hostile Elemental.",
    "You try to insert the dungeon key into a door, but the door grows teeth and bites your arm.",
    "You accidentally sneeze while passing a sentient portrait, and the subject climbs out of the frame to demand an apology.",
    "You stumble over a hidden cord, which doesn’t trigger arrows but instead rings a massive 'Dinner Time' bell for the local entities.",
    "You open a supply closet only to find a skeleton mid-way through changing its ribs, and it attacks out of pure embarrassment.",
    "You try to harvest a 'healing herb' for your inventory, but it screams and summons its very angry floral family.",
    "You reach for a glowing treasure chest that turns out to be a very well-disguised, very grumpy entity.",
    "You celebrate finding the key too loudly, and the vibration shakes a nest of giant spiders loose from the ceiling.",
    "You break a decorative vase looking for loot, and the dungeon’s 'Clean-Up Crew' golems arrive to fine you with violence."
];

var section = 0;
var enemies_defeated = 0;
var items_opened = 0;
var items_smashed = 0;
var gold_earned = 0;

//rooms and items
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
var itm_nm = ["Gold","Food","Potion","Armor","Weapon","Arrows","Bullets","Scrolls","Water","Shield"];

//room objects
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

//traps
var trap_roll = [0,1,0,0,0,0,1,0,1,0];
var traps = ["Bookshelf","Vine Snare","Singing Frog","Recursive Chest","Rising Water","Clown Box","Sudden Darkness","Boulders","Glitter Bomb","Everything is Cake!"];
var trap_1 = [];
var trap_2 = [];
var trap_3 = [];
var trap_4 = [];


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
    armor: 0,
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
weapon damage type
weapon handling (1h or 2h)

piercing is health
slashing is mobility
bludgening is strength
stress is academic for shields and armor!
*/
var damage_type = ["Slashing", "Piercing", "Bludgening"];
var weapon_nme = ["Short Sword","Long Sword","Excalibur","Zweihandler","Dagger","Rapier","Katana","Scimitar","Falchion","Arming Swords","Lance","Pike","War Hammer","Axe","Mace","Morning Star","Quarterstaff","Bow","LongBow","Crossbow","Musket"];
var weapon_dmg = [2,3,5,4,1,2,3,2,3,2,3,3,3,2,2,4,1,2,3,4,5];
var weapon_dty = [0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,1,1,1,1];
var weapon_hnd = [1,1,1,2,1,1,1,1,1,2,2,2,2,1,1,2,1,2,2,2,2];

/*Armor Class

armor names
armor temporary hit points
armor stress value

*/

var armor_nme = ["Simple Clothes","Padded Gambeson","Leather Coat","Mail Hauberk","Brigandine","Cuirass 'Breastplate'","Field Plate '3/4 Harness'","Gothic Harness 'Full Plate'"];
var armor_thp = [0,1,2,3,3,4,5,6];
var armor_stv = [1,2,4,6,6,8,10,12];

/*Shield Class

shield names
shield temporary hit points
shield stress value

*/

var shield_nme = ["None","Buckler","Targe","Round","Heater","Kite","Rotella","Passive"];
var shield_thp = [0,1,1,2,2,2,3,4];
var shield_stv = [0,2,2,4,4,4,6,8];


//coconut.png shit right here...
var new_gear_call = 0;
var weapon_roll = 0;
var armor_roll = 0;
var shield_roll = 0;

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
    document.getElementById("notification_new_weapon_or_shield").style.display = "none";

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
        document.getElementById("game").style.display = "none";
        document.getElementById("battle").style.display = "none";
        document.getElementById("stage_cleared").style.display = "none";
        document.getElementById("defeat").style.display = "none";
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
            startLoading(0);
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

        document.getElementById("plyr_weapon_name").innerHTML = weapon_nme[player.weapon];
        document.getElementById("plyr_armor_name").innerHTML = armor_nme[player.armor];
        document.getElementById("plyr_shield_name").innerHTML = shield_nme[player.shield];

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

    if(callout == 9) {//Game Encounter!!!!!
        document.getElementById("menu").style.display = "none";
        document.getElementById("battle").style.display = "block";
        document.getElementById("game").style.display = "none";
    
    }

    if(callout == 10) {//victory condition!
        document.getElementById("battle").style.display = "none";
        document.getElementById("game").style.display = "none";
        document.getElementById("stage_cleared").style.display = "block";
        document.getElementById("stage_cleared_text").innerHTML = "Section " + section + " cleared!";
    }

    if(callout == 11) {//Defeat condition!
        document.getElementById("battle").style.display = "none";
        document.getElementById("game").style.display = "none";
        document.getElementById("defeat").style.display = "block";
    }

    if(callout == 12) {//victory but transition to a new section!
        document.getElementById("loading_scene").style.display = "block";
        document.getElementById("stage_cleared").style.display = "none";

        //start loading animation
        startLoading(1);
    }

    if(callout == 13) {//found a new weapon
        /*
        Weapon class

        weapon names
        weapon damage (how many d6 to roll)
        weapon ability (what value of the HAMS system to grab from)
        weapon damage type
        weapon handling (1h or 2h)

        piercing is health
        slashing is mobility
        bludgening is strength
        stress is academic for shields and armor!

        var damage_type = ["Slashing", "Piercing", "Bludgening"];
        var weapon_nme = ["Short Sword","Long Sword","Excalibur","Zweihandler","Dagger","Rapier","Katana","Scimitar","Falchion","Arming Swords","Lance","Pike","War Hammer","Axe","Mace","Morning Star","Quarterstaff","Bow","LongBow","Crossbow","Musket"];
        var weapon_dmg = [2,3,5,4,1,2,3,2,3,2,3,3,3,2,2,4,1,2,3,4,5];
        var weapon_dty = [0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,1,1,1,1];
        var weapon_hnd = [1,1,1,2,1,1,1,1,1,2,2,2,2,1,1,2,1,2,2,2,2];

        */

        //roll as to what the player got
        new_gear_call = 1;
        weapon_roll = Math.floor((Math.random() * weapon_nme.length));

        //now we will display it in the window

        document.getElementById("notification_new_gear_text").innerHTML = "You have found a new " + weapon_nme[weapon_roll] + "!";
        
        document.getElementById("old_item").innerHTML = weapon_nme[player.weapon];
        document.getElementById("new_item").innerHTML = weapon_nme[weapon_roll];

        document.getElementById("old_item_dmg").innerHTML = weapon_dmg[player.weapon];
        document.getElementById("new_item_dmg").innerHTML = weapon_dmg[weapon_roll];
        document.getElementById("modifier_1").innerHTML = "Damage";

        document.getElementById("old_item_dmg_ty").innerHTML = damage_type[weapon_dty[player.weapon]];
        document.getElementById("new_item_dmg_ty").innerHTML = damage_type[weapon_dty[weapon_roll]];
        document.getElementById("modifier_2").innerHTML = "Damage Type";

        document.getElementById("old_item_handling").innerHTML = weapon_hnd[player.weapon] + " Handed";
        document.getElementById("new_item_handling").innerHTML = weapon_hnd[weapon_roll] + " Handed";
        document.getElementById("modifier_3").innerHTML = "Handling";
    
    }

    if(callout == 14) {//found a new piece of armor
        /*
          Armor Class

          armor names
          armor temporary hit points
          armor stress value


          var armor_nme = ["Simple Clothes","Padded Gambeson","Leather Coat","Mail Hauberk","Brigandine","Cuirass 'Breastplate'","Field Plate '3/4 Harness'","Gothic Harness 'Full Plate'"];
          var armor_thp = [0,1,2,3,3,4,5,6];
          var armor_stv = [1,2,4,6,6,8,10,12];

        */

        //roll as to what the player got
        new_gear_call = 2;
        armor_roll = Math.floor((Math.random() * armor_nme.length));

        //now we will display it in the window

        document.getElementById("notification_new_gear_text").innerHTML = "You have found a new " + armor_nme[armor_roll] + "!";
        
        document.getElementById("old_item").innerHTML = armor_nme[player.armor];
        document.getElementById("new_item").innerHTML = armor_nme[armor_roll];

        document.getElementById("old_item_dmg").innerHTML = armor_thp[player.armor];
        document.getElementById("new_item_dmg").innerHTML = armor_thp[armor_roll];
        document.getElementById("modifier_1").innerHTML = "Temp. Hp";

        document.getElementById("old_item_dmg_ty").innerHTML = armor_stv[player.armor];
        document.getElementById("new_item_dmg_ty").innerHTML = armor_stv[armor_roll];
        document.getElementById("modifier_2").innerHTML = "Stress Value";

        document.getElementById("old_item_handling").innerHTML = "";
        document.getElementById("new_item_handling").innerHTML = "";
        document.getElementById("modifier_3").innerHTML = "";
    }

    if(callout == 15) {//found a new shield
        /*
            Shield Class

            shield names
            shield temporary hit points
            shield stress value


            var shield_nme = ["None","Buckler","Targe","Round","Heater","Kite","Rotella","Passive"];
            var shield_thp = [0,1,1,2,2,2,3,4];
            var shield_stv = [0,2,2,4,4,4,6,8];
        */

        //roll as to what the player got  var yy3 = Math.floor((Math.random() * (10 - 1)) + 1);
        new_gear_call = 3;
        shield_roll = Math.floor((Math.random() * shield_nme.length) + 1);

        //now we will display it in the window

        document.getElementById("notification_new_gear_text").innerHTML = "You have found a new " + shield_nme[shield_roll] + "!";
        
        document.getElementById("old_item").innerHTML = shield_nme[player.shield];
        document.getElementById("new_item").innerHTML = shield_nme[shield_roll];

        document.getElementById("old_item_dmg").innerHTML = shield_thp[player.shield];
        document.getElementById("new_item_dmg").innerHTML = shield_thp[shield_roll];
        document.getElementById("modifier_1").innerHTML = "Temp. Hp";

        document.getElementById("old_item_dmg_ty").innerHTML = shield_stv[player.shield];
        document.getElementById("new_item_dmg_ty").innerHTML = shield_stv[shield_roll];
        document.getElementById("modifier_2").innerHTML = "Stress Value";

        document.getElementById("old_item_handling").innerHTML = "";
        document.getElementById("new_item_handling").innerHTML = "";
        document.getElementById("modifier_3").innerHTML = "";
    }

    if(callout == 16) {//were simply closing the new item section / popup!
        document.getElementById("notification_new_weapon_or_shield").style.display = "none";
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
        document.getElementById("class_stats").innerHTML = `<a class='red icns'>~</a> ${player_class_health_value[player.class]}<a class='white icns'> }</a> ${player_class_academic_value[player.class]} <a class='yellow icns'>|</a> ${player_class_mobility_value[player.class]} <a class='purple icns'>{</a> ${player_class_strength_value[player.class]}`;
    }

    const selectedColor = window.getComputedStyle(button_element.querySelector('a')).color;

    document.documentElement.style.setProperty('--shadow-color', selectedColor);

    const dpadButtons = document.querySelectorAll('.dpad-btn, .dpad-center');
    dpadButtons.forEach(button => button.style.backgroundColor = selectedColor);

    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => button.style.backgroundColor = selectedColor);
}

function startLoading(conditional) {
    if(conditional == 0) {
        Generation(0);
    }

    if(conditional == 1) {
        Generation(1);
    }

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
    if(conditional == 0) { // generate the world from start
        section = 0;
    }

    if(conditional == 1) { // generate the world add another section
        section += 1;
    }

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
        trap_1 = [];
        trap_2 = [];
        trap_3 = [];
        trap_4 = [];


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

            var da_traps_1 = Math.floor((Math.random() * trap_roll.length));
            if(trap_roll[da_traps_1] == 1) {
                var x_traps_1 = Math.floor((Math.random() * traps.length));
                trap_1.push(traps[x_traps_1]);
            } else {
                trap_1.push("Nothing");
            }
            
            var da_traps_2 = Math.floor((Math.random() * trap_roll.length));
            if(trap_roll[da_traps_2] == 1) {
                var x_traps_2 = Math.floor((Math.random() * traps.length));
                trap_2.push(traps[x_traps_2]);
            } else {
                trap_2.push("Nothing");
            }

            var da_traps_3 = Math.floor((Math.random() * trap_roll.length));
            if(trap_roll[da_traps_3] == 1) {
                var x_traps_3 = Math.floor((Math.random() * traps.length));
                trap_3.push(traps[x_traps_3]);
            } else {
                trap_3.push("Nothing");
            }

            var da_traps_4 = Math.floor((Math.random() * trap_roll.length));
            if(trap_roll[da_traps_4] == 1) {
                var x_traps_4 = Math.floor((Math.random() * traps.length));
                trap_4.push(traps[x_traps_4]);
            } else {
                trap_4.push("Nothing");
            }
        }

        //Add the key
        var yy2 = Math.floor((Math.random() * 4) + 1);
        var yy3 = Math.floor((Math.random() * (10 - 1)) + 1);

        if(yy2 == 1) {
            itm_1t[yy3] = "Key";
        }

        if(yy2 == 2) {
            itm_2t[yy3] = "Key";
        }

        if(yy2 == 3) {
            itm_3t[yy3] = "Key";
        }

        if(yy2 == 4) {
            itm_4t[yy3] = "Key";
        }
}

function World(){
    document.getElementById("game_special_items_checklist").innerHTML = "<a id='game_has_key_icon' class='white icns'>-</a><a id='game_has_life_up' class='yellow icns'>/</a>";
    document.getElementById("player_game_score").innerHTML = "Score " + score;
    //show the player what the world looks like
    document.getElementById("game_player_stats_ui").innerHTML = 
                    "<a id='game_ui_super_size_health' class='red icns'>~</a>" + player.health +
                    " <a id='game_ui_super_size_academic' class='white icns'> }</a>" + player.academic +
                    " <a id='game_ui_super_size_mobility' class='yellow icns'>|</a>" + player.mobility +
                    " <a id='game_ui_super_size_strength' class='purple icns'>{</a>" + player.strength;

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
					case "Gold": player.gold += 1; data_output(1); break;
					case "Food": player.food += 1; data_output(2); break;
					case "Potion": player.potion += 1; data_output(3); break;
					case "Arrows": player.arrows += 1; data_output(4); break;
					case "Bullets": player.bullets += 1; data_output(5); break;
					case "Scrolls": player.scrolls += 1; data_output(6); break;
					case "Water": player.water += 1; data_output(7); break;
                    case "Key": console.log("key!"); data_output(8); break;
                    case "Armor": data_output(9); break;
                    case "Weapon": data_output(10); break;
                    case "Shield": data_output(11); break;
				}
				obj_1a[room] = 1;
				World();
			}
		}
		if(players_pos == 1){
			if(obj_2a[room] == 0) {
				var itm_g = itm_2t[room];
				switch(itm_g){
					case "Gold": player.gold += 1; data_output(1); break;
					case "Food": player.food += 1; data_output(2); break;
					case "Potion": player.potion += 1; data_output(3); break;
					case "Arrows": player.arrows += 1; data_output(4); break;
					case "Bullets": player.bullets += 1; data_output(5); break;
					case "Scrolls": player.scrolls += 1; data_output(6); break;
					case "Water": player.water += 1; data_output(7); break;
                    case "Key": console.log("key!"); data_output(8); break;
                    case "Armor": data_output(9); break;
                    case "Weapon": data_output(10); break;
                    case "Shield": data_output(11); break;
				}
				obj_2a[room] = 1;
				World();
			}
		}
		if(players_pos == 2){
			if(obj_3a[room] == 0) {
				var itm_g = itm_3t[room];
				switch(itm_g){
					case "Gold": player.gold += 1; data_output(1); break;
					case "Food": player.food += 1; data_output(2); break;
					case "Potion": player.potion += 1; data_output(3); break;
					case "Arrows": player.arrows += 1; data_output(4); break;
					case "Bullets": player.bullets += 1; data_output(5); break;
					case "Scrolls": player.scrolls += 1; data_output(6); break;
					case "Water": player.water += 1; data_output(7); break;
                    case "Key": console.log("key!"); data_output(8); break;
                    case "Armor": data_output(9); break;
                    case "Weapon": data_output(10); break;
                    case "Shield": data_output(11); break;
				}
				obj_3a[room] = 1;
				World();
			}
		}
		if(players_pos == 3){
			if(obj_4a[room] == 0) {
				var itm_g = itm_4t[room];
				switch(itm_g){
					case "Gold": player.gold += 1; data_output(1); break;
					case "Food": player.food += 1; data_output(2); break;
					case "Potion": player.potion += 1; data_output(3); break;
					case "Arrows": player.arrows += 1; data_output(4); break;
					case "Bullets": player.bullets += 1; data_output(5); break;
					case "Scrolls": player.scrolls += 1; data_output(6); break;
					case "Water": player.water += 1; data_output(7); break;
                    case "Key": console.log("key!"); data_output(8); break;
                    case "Armor": data_output(9); break;
                    case "Weapon": data_output(10); break;
                    case "Shield": data_output(11); break;
				}
				obj_4a[room] = 1;
				World();
			}
		}
	}
    if(command == 4) {
        if(players_pos == 0){
            if(obj_1a[room] == 0) {
                if(Math.random() < 0.5){
                    var itm_g = itm_1t[room];
                    switch(itm_g){
                        case "Gold": player.gold += 1; data_output(1); break;
                        case "Food": player.food += 1; data_output(2); break;
                        case "Potion": player.potion += 1; data_output(3); break;
                        case "Arrows": player.arrows += 1; data_output(4); break;
                        case "Bullets": player.bullets += 1; data_output(5); break;
                        case "Scrolls": player.scrolls += 1; data_output(6); break;
                        case "Water": player.water += 1; data_output(7); break;
                        case "Key": console.log("key!"); data_output(8); break;
                        case "Armor": data_output(9); break;
                        case "Weapon": data_output(10); break;
                        case "Shield": data_output(11); break;
                    }
                }else if(itm_1t[room] == "Key") {
                    data_output(8);
                } else {
                    data_output(0);
                }
                obj_1a[room] = 2;
                World();
            }
        }
        if(players_pos == 1){
            if(obj_2a[room] == 0) {
                if(Math.random() < 0.5){
                    var itm_g = itm_2t[room];
                    switch(itm_g){
                        case "Gold": player.gold += 1; data_output(1); break;
                        case "Food": player.food += 1; data_output(2); break;
                        case "Potion": player.potion += 1; data_output(3); break;
                        case "Arrows": player.arrows += 1; data_output(4); break;
                        case "Bullets": player.bullets += 1; data_output(5); break;
                        case "Scrolls": player.scrolls += 1; data_output(6); break;
                        case "Water": player.water += 1; data_output(7); break;
                        case "Key": console.log("key!"); data_output(8); break;
                        case "Armor": data_output(9); break;
                        case "Weapon": data_output(10); break;
                        case "Shield": data_output(11); break;
                    }
                }else if(itm_2t[room] == "Key") {
                    data_output(8);
                } else {
                    data_output(0);
                }
                obj_2a[room] = 2;
                World();
            }
        }
        if(players_pos == 2){
            if(obj_3a[room] == 0) {
                if(Math.random() < 0.5){
                    var itm_g = itm_3t[room];
                    switch(itm_g){
                        case "Gold": player.gold += 1; data_output(1); break;
                        case "Food": player.food += 1; data_output(2); break;
                        case "Potion": player.potion += 1; data_output(3); break;
                        case "Arrows": player.arrows += 1; data_output(4); break;
                        case "Bullets": player.bullets += 1; data_output(5); break;
                        case "Scrolls": player.scrolls += 1; data_output(6); break;
                        case "Water": player.water += 1; data_output(7); break;
                        case "Key": console.log("key!"); data_output(8); break;
                        case "Armor": data_output(9); break;
                        case "Weapon": data_output(10); break;
                        case "Shield": data_output(11); break;
                    }
                }else if(itm_3t[room] == "Key") {
                    data_output(8);
                } else {
                    data_output(0);
                }
                obj_3a[room] = 2;
                World();
            }
        }
        if(players_pos == 3){
            if(obj_4a[room] == 0) {
                if(Math.random() < 0.5){
                    var itm_g = itm_4t[room];
                    switch(itm_g){
                        case "Gold": player.gold += 1; data_output(1); break;
                        case "Food": player.food += 1; data_output(2); break;
                        case "Potion": player.potion += 1; data_output(3); break;
                        case "Arrows": player.arrows += 1; data_output(4); break;
                        case "Bullets": player.bullets += 1; data_output(5); break;
                        case "Scrolls": player.scrolls += 1; data_output(6); break;
                        case "Water": player.water += 1; data_output(7); break;
                        case "Key": console.log("key!"); data_output(8); break;
                        case "Armor": data_output(9); break;
                        case "Weapon": data_output(10); break;
                        case "Shield": data_output(11); break;
                    }
                } else if(itm_4t[room] == "Key") {
                    data_output(8);
                } else {
                    data_output(0);
                }
                obj_4a[room] = 2;
                World();
            }
        }
    }
}


function data_output(infor) {
    document.getElementById("ingame_notification_on_loot").style.opacity = 1;

    if(infor == 0) {
        //destroyed item
        document.getElementById("ingame_notification_on_loot").innerHTML = "You smash the box!";
    }

    if(infor == 1) {
        //gold
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some Gold! (+1)";
    }
    if(infor == 2) {
        //food
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some Food! (+1)";
    }
    if(infor == 3) {
        //potion
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some Potions! (+1)";
    }
    if(infor == 4) {
        //arrows
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some Arrows! (+1)";
    }
    if(infor == 5) {
        //bullets
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some Bullets! (+1)";
    }
    if(infor == 6) {
        //scrolls
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some Scrolls! (+1)";
    }
    if(infor == 7) {
        //water
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some Water! (+1)";
    }
    if(infor == 8) {
        //key
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found the Key!";
    }
    if(infor == 9) {
        //weapon
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found a new weapon!";
        document.getElementById("notification_new_weapon_or_shield").style.display = "block";
        hud(13);
    }
    if(infor == 10) {
        //armor
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found some armor!";
        document.getElementById("notification_new_weapon_or_shield").style.display = "block";
        hud(14);
    }
    if(infor == 11) {
        //shield
        document.getElementById("ingame_notification_on_loot").innerHTML = "You found a shield!";
        document.getElementById("notification_new_weapon_or_shield").style.display = "block";
        hud(15);
    }

    setTimeout(() => {
        document.getElementById("ingame_notification_on_loot").style.opacity = 0;
    }, 1500);
}

function accept_new_item() {
    
    if(new_gear_call == 1) {
        //weapon
        if(weapon_hnd[weapon_roll] == 2) {
            if(player.shield == 0) {
                player.weapon = weapon_roll;
            } else {
                player.weapon = weapon_roll;
                player.shield = 0;
            }
        } else {
            player.weapon = weapon_roll;
        }
        
    }
    if(new_gear_call == 2) {
        //armor
        player.armor = armor_roll;
    }
    if(new_gear_call == 3) {
        //shield
        if(weapon_hnd[player.weapon] == 1) {
            player.shield = shield_roll;
        } else {
            //can't grab item
        }
    }

    document.getElementById("notification_new_weapon_or_shield").style.display = "none";
}