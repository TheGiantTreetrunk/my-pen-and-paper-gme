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


var difficulty = 0;
var section = 0;
var enemies_defeated = 0;
var items_opened = 0;
var items_smashed = 0;
var gold_earned = 0;

//rooms and items
var rooms = [];
var room_t = ["Woods","Cavern","Dungeon","Plains"];
var room_template_roof = ["BBBBBBBBBB","GGGGGGGGGG","FFFFFFFFFF","CCCCCCCCCC"];
var room_template_floor = ["DEDHIJDEED","KKKKKKKKKK","##########","AAAAAAAAAA"];
var itm_1t = [];
var itm_2t = [];
var itm_3t = [];
var itm_4t = [];
var itm_1a = [];
var itm_2a = [];
var itm_3a = [];
var itm_4a = [];
var itm_nm = ["Gold","Food","Potion","Armor","Weapon","Arrows","Bullets","Scrolls","Water","Shield"];
var door_checks = [];
var door_check_type = [];
var door_check_cleared = [];

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
var trap_tripped = 0;
var trap_triggered_type = "Nothing";
var trap_roll = [0,1,0,0,0,0,1,0,1,0];
var traps = ["Bookshelf","Vine Snare","Chest","Clown Box","Sudden Darkness","Banquet","Armoury","Cake","Mint","RPS"];
var trap_1 = [];
var trap_2 = [];
var trap_3 = [];
var trap_4 = [];

var trap_1d = [];
var trap_2d = [];
var trap_3d = [];
var trap_4d = [];

//for sudden darkness
var encounter_triggered = 0;
var has_tripped_torch_spot = 0;
var room_torch_location = 0;
var spot_torch_location = 0;


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
    water: 0,
    key: 0,
    lifeup: 0
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

var enemy_nme = ["Ghost","Glarb","Serpant","Golem","Skeleton","Toad","Blob","Ember","Goblin"];
var enemy_hth = [3,4,3,8,4,2,2,2,4];
var enemy_dmg = [3,4,4,6,3,2,4,4,3];
var enemy_arm = [1,2,2,3,1,1,2,1,2];
var enemy_icn = ["&","?","!",".",",","+",";","=","\x5C"];
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
    document.getElementById("qte_bookshelf").style.display = "none";
    document.getElementById("qte_vine_snare").style.display = "none";
    document.getElementById("qte_chest_of_knowledge").style.display = "none";
    document.getElementById("qte_clown_box").style.display = "none";
    document.getElementById("qte_sudden_darkness").style.display = "none";
    document.getElementById("qte_banquet_table").style.display = "none";
    document.getElementById("qte_the_armoury").style.display = "none";
    document.getElementById("qte_the_cake").style.display = "none";
    document.getElementById("qte_the_mint").style.display = "none";
    document.getElementById("qte_the_keypad").style.display = "none";
    document.getElementById("qte_rps").style.display = "none";
    document.getElementById("qte_wack").style.display = "none";
    document.getElementById("MM").style.display = "none";
    document.getElementById("How_To_Play").style.display = "none";
    document.getElementById("support_mm").style.display = "none";
    document.getElementById("How_To_Play_Guide").style.display = "none";
    document.getElementById("how_to_sub").style.display = "none";
    document.getElementById("dungeon_menu").style.display = "none";
    document.getElementById("Merchant_shoppe").style.display = "none";
    document.getElementById("Quest_Board").style.display = "none";
    document.getElementById("quest_0_letter").style.display = "none";
    document.getElementById("The_Locked_Door").style.display = "none";

    //motto_funny
    var mottox = Math.floor((Math.random() * mottos.length));
    document.getElementById("motto_funny").innerHTML = mottos[mottox];
}

function UIX(callout) {//how_to_sub
    if(callout == 0) {
        document.getElementById("tap_to_play").style.display = "none";
        document.getElementById("MM").style.display = "block";
    }

    if(callout == 1) {
        document.getElementById("MM").style.display = "none";
        document.getElementById("how_to_sub").style.display = "block";
        //document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 2) {
        document.getElementById("how_to_sub").style.display = "none";
        document.getElementById("How_To_Play").style.display = "block";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 3) {
        document.getElementById("how_to_sub").style.display = "block";
        document.getElementById("How_To_Play").style.display = "none";
        document.getElementById("motto_funny").style.display = "block";
    }

    if(callout == 4) {
        document.getElementById("How_To_Play_Guide").style.display = "block";
        document.getElementById("how_to_sub").style.display = "none";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 5) {
        document.getElementById("MM").style.display = "block";
        document.getElementById("how_to_sub").style.display = "none";
        document.getElementById("motto_funny").style.display = "block";
    }

    if(callout == 6) {
        document.getElementById("how_to_sub").style.display = "block";
        document.getElementById("How_To_Play_Guide").style.display = "none";
        document.getElementById("motto_funny").style.display = "block";
    }

    if(callout == 7) {
        document.getElementById("support_mm").style.display = "block";
        document.getElementById("MM").style.display = "none";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 8) {
        document.getElementById("MM").style.display = "block";
        document.getElementById("support_mm").style.display = "none";
        document.getElementById("motto_funny").style.display = "block";
    }

    if(callout == 9) {
        document.getElementById("dungeon_menu").style.display = "block";
        document.getElementById("MM").style.display = "none";
        document.getElementById("motto_funny").style.display = "block";
    }

    if(callout == 10){
        document.getElementById("Merchant_shoppe").style.display = "block";
        document.getElementById("splash").style.display = "none";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 11){
        document.getElementById("Quest_Board").style.display = "block";
        document.getElementById("splash").style.display = "none";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 12){
        document.getElementById("quest_0_letter").style.display = "block";
        document.getElementById("Quest_Board").style.display = "none";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 13){
        document.getElementById("quest_0_letter").style.display = "none";
        document.getElementById("Quest_Board").style.display = "block";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 14){
        document.getElementById("Quest_Board").style.display = "none";
        document.getElementById("splash").style.display = "block";
        document.getElementById("motto_funny").style.display = "none";
    }

    if(callout == 15){
        document.getElementById("Merchant_shoppe").style.display = "none";
        document.getElementById("splash").style.display = "block";
        document.getElementById("motto_funny").style.display = "none";
    }

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

        document.getElementById("motto_funny").style.display = "none";
        
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
        
        Overlay.trigger();
        setTimeout(() => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("battle").style.display = "block";
            document.getElementById("game").style.display = "none";
            Battle_System(0);
          }, 1000);
        
    
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

    if(callout == 17) {
        document.getElementById("qte_bookshelf").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 18) {
        document.getElementById("qte_vine_snare").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 19) {
        document.getElementById("qte_sudden_darkness").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 20) {
        document.getElementById("qte_banquet_table").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 21) {
        document.getElementById("qte_the_armoury").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 22) {
        document.getElementById("qte_the_armoury").style.display = "none";
        document.getElementById("game").style.display = "block";
        //hud 13 callout
        data_output(9);
    }

    if(callout == 23) {
        document.getElementById("qte_the_mint").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 24) {
        document.getElementById("qte_the_cake").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 25) {
        document.getElementById("qte_the_keypad").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 26) {
        document.getElementById("qte_rps").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 27) {
        document.getElementById("qte_wack").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    if(callout == 28) {
        document.getElementById("The_Locked_Door").style.display = "block";
        document.getElementById("game").style.display = "none";
    }

    if(callout == 29) {
        document.getElementById("The_Locked_Door").style.display = "none";
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
    }, 4500);


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
        trap_1d = [];
        trap_2d = [];
        trap_3d = [];
        trap_4d = [];


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
            
            trap_1[0] = "Nothing";
            trap_1d.push(0);
            trap_2d.push(0);
            trap_3d.push(0);
            trap_4d.push(0);
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

function tgFog(id,t=2000){const e=document.getElementById(id);if(!e)return;e.classList.add('fog-shk');setTimeout(()=>{e.classList.remove('fog-shk');e.classList.add('fog-on');setTimeout(()=>e.classList.remove('fog-on'),t)},250)}


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
    "<a id='door1' class='brown'>:</a>" + 
    "<a id='plyr_sp1'>_</a><a id='itm_sp1'>1</a>" + 
    "<a id='plyr_sp2'>_</a><a id='itm_sp2'>1</a>" +
    "<a id='plyr_sp3'>_</a><a id='itm_sp3'>1</a>" + 
    "<a id='plyr_sp4'>_</a><a id='itm_sp4'>1</a>" + 
    "<a id='door2' class='brown'>:</a>" + 
    "<br>" + "##########";

    if(player.key == 1) {
        document.getElementById("game_has_key_icon").innerHTML = "-";
    } else {
        document.getElementById("game_has_key_icon").innerHTML = "";
    }

    if(player.lifeup == 1) {
        document.getElementById("game_has_life_up").innerHTML = "/";
    } else {
        document.getElementById("game_has_life_up").innerHTML = "";
    }

    if(players_pos == 0) {
        document.getElementById("plyr_sp1").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";

        if(trap_1[room] != "Nothing") {
            //check if the trap was engaged!
            if(trap_1d[room] == 0) {
                //set the encounter
                trap_tripped = 1;
                trap_triggered_type = trap_1[room];
                Encounter();
            }
        }
    }
    if(players_pos == 1) {
        document.getElementById("plyr_sp2").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";
        if(trap_2[room] != "Nothing") {
            //check if the trap was engaged!
            if(trap_2d[room] == 0) {
                //set the encounter
                trap_tripped = 2;
                trap_triggered_type = trap_2[room];
                Encounter();
            }
        }
    }
    if(players_pos == 2) {
        document.getElementById("plyr_sp3").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";
        if(trap_3[room] != "Nothing") {
            //check if the trap was engaged!
            if(trap_3d[room] == 0) {
                //set the encounter
                trap_tripped = 3;
                trap_triggered_type = trap_3[room];
                Encounter();
            }
        }
    }
    if(players_pos == 3) {
        document.getElementById("plyr_sp4").innerHTML = "<a class='" + player_colors[player.class] + "'>@</a>";
        if(trap_4[room] != "Nothing") {
            //check if the trap was engaged!
            if(trap_4d[room] == 0) {
                //set the encounter
                trap_tripped = 4;
                trap_triggered_type = trap_4[room];
                Encounter();
            }
        }
    }

    if(qte_sud_drk == 1) {
        
        /*
            var qte_sud_drk = 0;
            var sud_darkness_torch_location = 0;
            var torch_room_spot = 0;
        */
        if(sud_darkness_torch_location == room) {

            if(torch_room_spot == 0) {
                document.getElementById("plyr_sp1").innerHTML = "a";
                document.getElementById("plyr_sp1").classList.add('yellow');
            }

            if(torch_room_spot == 1) {
                document.getElementById("plyr_sp2").innerHTML = "a";
                document.getElementById("plyr_sp2").classList.add('yellow');
            }
            if(torch_room_spot == 2) {
                document.getElementById("plyr_sp3").innerHTML = "a";
                document.getElementById("plyr_sp3").classList.add('yellow');
            }
            if(torch_room_spot == 3) {
                document.getElementById("plyr_sp4").innerHTML = "a";
                document.getElementById("plyr_sp4").classList.add('yellow');
            }

            if(torch_room_spot == players_pos) {
                sudden_darkness(2);
            }
        }
    }

    if(qte_sud_drk == 0) {
        
        /*
            var qte_sud_drk = 0;
            var sud_darkness_torch_location = 0;
            var torch_room_spot = 0;
        */
        if(sud_darkness_torch_location == room) {

            if(torch_room_spot == 0) {
                document.getElementById("plyr_sp1").classList.remove('yellow');
            }

            if(torch_room_spot == 1) {
                document.getElementById("plyr_sp2").classList.remove('yellow');
            }
            if(torch_room_spot == 2) {
                document.getElementById("plyr_sp3").classList.remove('yellow');
            }
            if(torch_room_spot == 3) {
                document.getElementById("plyr_sp4").classList.remove('yellow');
            }
        }
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
            tgFog('game_view');
            setTimeout(() => {
                room -= 1;
                players_pos = 3;
                World();
            }, 2000);
        }
    }
    if(command == 2) {
        if(players_pos != 3) {
            players_pos += 1; 
            World();
        } else if(players_pos == 3) {
            if(room != 9) {
                tgFog('game_view');
                setTimeout(() => {
                    room += 1;
                    players_pos = 0;
                    World();
                  }, 2000);
            } else if(room == 9) {
                if(player.key == 1) {
                    console.log("checkpoint!");
                    hud(28);
                } else {
                    //
                }
            }
        }
    }
	if(command == 3) {
        rosebud_world_risk_calc.processAction();

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
        rosebud_world_risk_calc.processAction();
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
        player.key = 1;
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

function Encounter() {
    //trap_triggered = 'whatever'
    //var traps = ["Bookshelf","Vine Snare","Chest","Clown Box","Sudden Darkness"];

    if(trap_triggered_type == "Bookshelf"){
        document.getElementById("qte_bookshelf").style.display = "block";
        document.getElementById("game").style.display = "none";
        bookshelf_qte();
    }

    if(trap_triggered_type == "Vine Snare"){
        document.getElementById("qte_vine_snare").style.display = "block";
        document.getElementById("game").style.display = "none";
        vine_qte();
    }

    if(trap_triggered_type == "Chest"){
        //document.getElementById("qte_chest_of_knowledge").style.display = "block";
        //document.getElementById("game").style.display = "none";
    }

    if(trap_triggered_type == "Clown Box"){
        //document.getElementById("qte_clown_box").style.display = "block";
        //document.getElementById("game").style.display = "none";
    }

    if(trap_triggered_type == "Sudden Darkness"){
        if(qte_sud_drk == 0) {
            document.getElementById("qte_sudden_darkness").style.display = "block";
            document.getElementById("game").style.display = "none";
            sudden_darkness(1);
        }
    }

    if(trap_triggered_type == "Banquet"){
        document.getElementById("qte_banquet_table").style.display = "block";
        document.getElementById("game").style.display = "none";
        Banquet(0);
    }

    if(trap_triggered_type == "Armoury"){
        document.getElementById("qte_the_armoury").style.display = "block";
        document.getElementById("game").style.display = "none";
        Armoury(0);
    }

    if(trap_triggered_type == "Cake"){
        document.getElementById("qte_the_cake").style.display = "block";
        document.getElementById("game").style.display = "none";

        qte_CAKE();
    }

    if(trap_triggered_type == "Mint"){
        document.getElementById("qte_the_mint").style.display = "block";
        document.getElementById("game").style.display = "none";
        Mint(0);
    }

    if(trap_triggered_type == "keypad"){
        document.getElementById("qte_the_keypad").style.display = "block";
        document.getElementById("game").style.display = "none";
        initGame();
        
    }

    if(trap_triggered_type == "RPS"){
        document.getElementById("qte_rps").style.display = "block";
        document.getElementById("game").style.display = "none";
        qte_rps(0);
        
    }
}

var qte_book_cur_status = 0;

function bookshelf_qte() {
    document.getElementById("qte_book_push_button").style.display = "block";
    document.getElementById("qte_book_cont_button").style.display = "none";
    document.getElementById("bookshelf").style.color = "#ffffff";
    document.getElementById("qte_bookshelf_text").innerHTML = "An old bookshelf comes falling down towards you!";

     qte_book_cur_status = 75;
    const countdownInterval = setInterval(function() {
        qte_book_cur_status -= 1;
        document.getElementById("qte_bookshelf_meter").value = qte_book_cur_status;
            if (qte_book_cur_status >= 100) {
                clearInterval(countdownInterval); // Stop the interval when count reaches 5

                document.getElementById("qte_bookshelf_text").innerHTML = "You pushed away the bookshelf with ease!";
                document.getElementById("qte_book_push_button").style.display = "none";
                document.getElementById("qte_book_cont_button").style.display = "block";

                document.getElementById("bookshelf").style.color = "#55a049";

                score += 100;

                if(trap_tripped == 1) {
                    trap_1d[room] = 1;
                }
                if(trap_tripped == 2) {
                    trap_2d[room] = 1;
                }
                if(trap_tripped == 3) {
                    trap_3d[room] = 1;
                }
                if(trap_tripped == 4) {
                    trap_4d[room] = 1;
                }
            }

            if(qte_book_cur_status === 0) {
                clearInterval(countdownInterval); // Stop the interval when count reaches 5
                document.getElementById("qte_bookshelf_text").innerHTML = "You've been hurt by the bookshelf!";
                document.getElementById("bookshelf").style.color = "#883232";

                document.getElementById("qte_book_push_button").style.display = "none";
                document.getElementById("qte_book_cont_button").style.display = "block";

                player.health -= 1;

                if(trap_tripped == 1) {
                    trap_1d[room] = 1;
                }
                if(trap_tripped == 2) {
                    trap_2d[room] = 1;
                }
                if(trap_tripped == 3) {
                    trap_3d[room] = 1;
                }
                if(trap_tripped == 4) {
                    trap_4d[room] = 1;
                }
            }
    }, 100);
    
}

function qte_book_increase() {
    if(difficulty == 0) {
        qte_book_cur_status += 5;
    }
}


var qte_vine_cur_status = 0;

function vine_qte() {
    document.getElementById("qte_vine_push_button").style.display = "block";
    document.getElementById("qte_vine_cont_button").style.display = "none";
    document.getElementById("snare").style.color = "#ffffff";
    document.getElementById("qte_vine_snare_text").innerHTML = "You get caught in a old vine snare trap!";

    qte_vine_cur_status = 75;
    const countdownInterval = setInterval(function() {
        qte_vine_cur_status -= 1;
        document.getElementById("qte_vine_meter").value = qte_vine_cur_status;
            if (qte_vine_cur_status >= 100) {
                clearInterval(countdownInterval); // Stop the interval when count reaches 5

                document.getElementById("qte_vine_snare_text").innerHTML = "You escaped the vine snare trap!";
                document.getElementById("qte_vine_push_button").style.display = "none";
                document.getElementById("qte_vine_cont_button").style.display = "block";

                document.getElementById("snare").style.color = "#55a049";

                score += 125;

                if(trap_tripped == 1) {
                    trap_1d[room] = 1;
                }
                if(trap_tripped == 2) {
                    trap_2d[room] = 1;
                }
                if(trap_tripped == 3) {
                    trap_3d[room] = 1;
                }
                if(trap_tripped == 4) {
                    trap_4d[room] = 1;
                }
            }

            if(qte_vine_cur_status === 0) {
                clearInterval(countdownInterval); // Stop the interval when count reaches 5
                document.getElementById("qte_vine_snare_text").innerHTML = "The vine snare fully tightens around your leg and throws you up into the air destroying the trap and hurting you!";
                document.getElementById("snare").style.color = "#883232";

                document.getElementById("qte_vine_push_button").style.display = "none";
                document.getElementById("qte_vine_cont_button").style.display = "block";

                player.health -= 1;

                if(trap_tripped == 1) {
                    trap_1d[room] = 1;
                }
                if(trap_tripped == 2) {
                    trap_2d[room] = 1;
                }
                if(trap_tripped == 3) {
                    trap_3d[room] = 1;
                }
                if(trap_tripped == 4) {
                    trap_4d[room] = 1;
                }
            }
    }, 100);
    
}

function qte_vine_increase() {
    if(difficulty == 0) {
        qte_vine_cur_status += 5;
    }
}


var qte_sud_drk = 0;
var sud_darkness_torch_location = 0;
var torch_room_spot = 0;

function sudden_darkness(conditional) {
    
    if(conditional == 1) {

        if(trap_tripped == 1) {
            trap_1d[room] = 1;
        }
        if(trap_tripped == 2) {
            trap_2d[room] = 1;
        }
        if(trap_tripped == 3) {
            trap_3d[room] = 1;
        }
        if(trap_tripped == 4) {
            trap_4d[room] = 1;
        }

        //lights out
        document.getElementById("game_sene").classList.add('dark_gray');
        document.getElementById("door1").classList.replace('brown', 'dark_brown');
        document.getElementById("door2").classList.replace('brown', 'dark_brown');

        qte_sud_drk = 1;

        //determine what spot to place the torch
        var currentRoom = room;
        let possibleRooms = [];

        if (currentRoom === 8) {
            // Three rooms behind (5, 6, 7) or one room forward (9)
            possibleRooms = [5, 6, 7, 9];
        } else if (currentRoom === 2) {
            // Three rooms ahead (3, 4, 5) or one room behind (1)
            possibleRooms = [1, 3, 4, 5];
        } else {
            // Standard case: two rooms ahead or two rooms behind
            const ahead = currentRoom + 2;
            const behind = currentRoom - 2;

            // Assuming rooms are within a 1-10 range
            if (ahead <= 10) {
                possibleRooms.push(ahead);
            }
            if (behind >= 1) {
                possibleRooms.push(behind);
            }
        }
        
        torch_room_spot = Math.floor(Math.random() * 4);

        if (possibleRooms.length > 0) {
            const randomIndex = Math.floor(Math.random() * possibleRooms.length);
            sud_darkness_torch_location = possibleRooms[randomIndex];
            console.log("Torch placed in room: " + sud_darkness_torch_location);
            console.log("Torch placed in spot: " + torch_room_spot);
        } else {
            // Fallback in case no rooms are possible
            sud_darkness_torch_location = currentRoom;
            console.log("Torch placed in current room (fallback): " + sud_darkness_torch_location);
            console.log("Torch placed in spot: " + torch_room_spot);
        }

        
        
    }

    if(conditional == 2) {
        //lights on
        document.getElementById("game_sene").classList.remove('dark_gray');
        document.getElementById("door1").classList.replace('dark_brown', 'brown');
        document.getElementById("door2").classList.replace('dark_brown', 'brown');

        qte_sud_drk = 0;
        score += 400;
        World();
    }
}

function Banquet(callout) {
    if(callout == 0) {
        document.getElementById("qte_banquet_text").innerHTML = "You've come across a banquet table! Looks like some table scraps are still left over...";
        document.getElementById("qte_banquet_dice_button").style.display = "block";
        document.getElementById("qte_banquet_cont_button").style.display = "none";
    }

    if(callout == 1) {
        if(trap_tripped == 1) {
            trap_1d[room] = 1;
        }
        if(trap_tripped == 2) {
            trap_2d[room] = 1;
        }
        if(trap_tripped == 3) {
            trap_3d[room] = 1;
        }
        if(trap_tripped == 4) {
            trap_4d[room] = 1;
        }
        
        const diceDisplay = document.getElementById('dice-display');
        const roll = Math.floor(Math.random() * 6) + 1;
        const unicodePoint = 0x267F + roll; 

        diceDisplay.textContent = String.fromCodePoint(unicodePoint);

        document.getElementById("qte_banquet_dice_button").style.display = "none";
        document.getElementById("qte_banquet_cont_button").style.display = "block";

        if(roll == 1) {
            document.getElementById("qte_banquet_text").innerHTML = "you rolled a 1";
            score += 20;
            player.health -= 2;
        }
        if(roll == 2) {
            document.getElementById("qte_banquet_text").innerHTML = "you rolled a 2";
            score += 40;
        }
        if(roll == 3) {
            document.getElementById("qte_banquet_text").innerHTML = "you rolled a 3";
            score += 80;
            player.food += 1;
        }
        if(roll == 4) {
            document.getElementById("qte_banquet_text").innerHTML = "you rolled a 4";
            score += 160;
            player.water += 1;
        }
        if(roll == 5) {
            document.getElementById("qte_banquet_text").innerHTML = "you rolled a 5";
            score += 200;
            player.food += 5;
        }
        if(roll == 6) {
            document.getElementById("qte_banquet_text").innerHTML = "you rolled a 6";
            score += 240;
            player.food += 10;
            player.water += 5;
        }
    }
}

function Armoury(callout) {
    if(callout == 0) {
        document.getElementById("qte_armoury_text").innerHTML = "You have discovered a armoury depot! Maybe you can get some new gear in here...";
        document.getElementById("qte_armoury_dice_button").style.display = "block";
        document.getElementById("qte_armoury_cont_button").style.display = "none";
        
        document.getElementById("qte_armoury_lucky_button").style.display = "none";
    }

    if(callout == 1) {
        if(trap_tripped == 1) {
            trap_1d[room] = 1;
        }
        if(trap_tripped == 2) {
            trap_2d[room] = 1;
        }
        if(trap_tripped == 3) {
            trap_3d[room] = 1;
        }
        if(trap_tripped == 4) {
            trap_4d[room] = 1;
        }
        
        const diceDisplay = document.getElementById('dice-display1');
        const roll = Math.floor(Math.random() * 6) + 1;
        const unicodePoint = 0x267F + roll; 

        diceDisplay.textContent = String.fromCodePoint(unicodePoint);

        document.getElementById("qte_armoury_dice_button").style.display = "none";
        document.getElementById("qte_armoury_cont_button").style.display = "block";

        if(roll == 1) {
            document.getElementById("qte_armoury_text").innerHTML = "you rolled a 1";
            score += 40;
            player.health -= 3;
        }
        if(roll == 2) {
            document.getElementById("qte_armoury_text").innerHTML = "you rolled a 2";
            score += 50;
        }
        if(roll == 3) {
            document.getElementById("qte_armoury_text").innerHTML = "you rolled a 3";
            score += 100;
            player.arrows += 5;
            player.bullets += 5;
        }
        if(roll == 4) {
            document.getElementById("qte_armoury_text").innerHTML = "you rolled a 4";
            score += 180;
            player.arrows += 10;
        }
        if(roll == 5) {
            document.getElementById("qte_armoury_text").innerHTML = "you rolled a 5";
            score += 240;
            player.bullets += 10;
        }
        if(roll == 6) {
            document.getElementById("qte_armoury_text").innerHTML = "you rolled a 6";
            score += 300;
            //hide the button to continue and show a transition for the new weapon discovery!
            document.getElementById("qte_armoury_lucky_button").style.display = "block";
            document.getElementById("qte_armoury_cont_button").style.display = "none";
        }
    }
}


function Mint(callout) {
    if(callout == 0) {
        document.getElementById("qte_mint_text").innerHTML = "You've discovered an abandoned mint room. You wonder if there is anything left over from empires past...";
        document.getElementById("qte_mint_dice_button").style.display = "block";
        document.getElementById("qte_mint_cont_button").style.display = "none";
    }

    if(callout == 1) {
        if(trap_tripped == 1) {
            trap_1d[room] = 1;
        }
        if(trap_tripped == 2) {
            trap_2d[room] = 1;
        }
        if(trap_tripped == 3) {
            trap_3d[room] = 1;
        }
        if(trap_tripped == 4) {
            trap_4d[room] = 1;
        }
        
        const diceDisplay = document.getElementById('dice-display2');
        const roll = Math.floor(Math.random() * 6) + 1;
        const unicodePoint = 0x267F + roll; 

        diceDisplay.textContent = String.fromCodePoint(unicodePoint);

        document.getElementById("qte_mint_dice_button").style.display = "none";
        document.getElementById("qte_mint_cont_button").style.display = "block";

        if(roll == 1) {
            document.getElementById("qte_mint_text").innerHTML = "you rolled a 1";
            score += 10;
        }
        if(roll == 2) {
            document.getElementById("qte_mint_text").innerHTML = "you rolled a 2";
            score += 10;
        }
        if(roll == 3) {
            document.getElementById("qte_mint_text").innerHTML = "you rolled a 3";
            score += 100;
            player.gold += 3;
        }
        if(roll == 4) {
            document.getElementById("qte_mint_text").innerHTML = "you rolled a 4";
            score += 180;
            player.gold += 10;
        }
        if(roll == 5) {
            document.getElementById("qte_mint_text").innerHTML = "you rolled a 5";
            score += 240;
            player.gold += 20;
        }
        if(roll == 6) {
            document.getElementById("qte_mint_text").innerHTML = "you rolled a 6";
            score += 300;
            player.gold += 50;
        }
    }
}




/*The Rock Paper Scizzors mechanic */
var playerScore = 0;
var computerScore = 0;

    function play(playerChoice) {
        const choices = ['Shield', 'Sword', 'Musket'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (playerChoice === 'Shield' && computerChoice === 'Musket') ||
            (playerChoice === 'Sword' && computerChoice === 'Shield') ||
            (playerChoice === 'Musket' && computerChoice === 'Sword')
        ) {
            result = "You win this round!";
            playerScore++;
        } else {
            result = "Computer wins this round!";
            computerScore++;
        }

        // Update UI
        document.getElementById('message_rps').innerText = 
            `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
        document.getElementById('score_rps').innerText = 
            `Player: ${playerScore} | Computer: ${computerScore}`;

        // Check for game over
        if (playerScore === 5 || computerScore === 5) {
            

            if(playerScore == 5) {
                qte_rps(1);
                playerScore = 0;
                computerScore = 0;
            }

            if(computerScore == 5) {
                qte_rps(2);
                playerScore = 0;
                computerScore = 0;
            }
        }
    }

    function qte_rps(callout) {
        if(callout == 0) {
            document.getElementById("qte_rps_text").innerHTML = "You've encountered a demon with a gambling addiction and challenges you to Shield, Swords, and Muskets!";
            document.getElementById("qte_rps_shield_button").style.display = "block";
            document.getElementById("qte_rps_sword_button").style.display = "block";
            document.getElementById("qte_rps_musket_button").style.display = "block";
            document.getElementById("rps_table_roll_chart").style.display = "block";

            document.getElementById("qte_rps_lucky_button").style.display = "none";
            document.getElementById("qte_rps_unlucky_button").style.display = "none";
        }

        if(callout == 1) {
            document.getElementById("qte_rps_text").innerHTML = "You won against the Demon!";
            document.getElementById("qte_rps_shield_button").style.display = "none";
            document.getElementById("qte_rps_sword_button").style.display = "none";
            document.getElementById("qte_rps_musket_button").style.display = "none";
            document.getElementById("rps_table_roll_chart").style.display = "none";

            document.getElementById("qte_rps_lucky_button").style.display = "block";
            document.getElementById("qte_rps_unlucky_button").style.display = "none";

            if(trap_tripped == 1) {
                trap_1d[room] = 1;
            }
            if(trap_tripped == 2) {
                trap_2d[room] = 1;
            }
            if(trap_tripped == 3) {
                trap_3d[room] = 1;
            }
            if(trap_tripped == 4) {
                trap_4d[room] = 1;
            }
        }

        if(callout == 2) {
            document.getElementById("qte_rps_text").innerHTML = "The Demon won. Better luck next time...";
            document.getElementById("qte_rps_shield_button").style.display = "none";
            document.getElementById("qte_rps_sword_button").style.display = "none";
            document.getElementById("qte_rps_musket_button").style.display = "none";
            document.getElementById("rps_table_roll_chart").style.display = "none";

            document.getElementById("qte_rps_lucky_button").style.display = "none";
            document.getElementById("qte_rps_unlucky_button").style.display = "block";

            if(trap_tripped == 1) {
                trap_1d[room] = 1;
            }
            if(trap_tripped == 2) {
                trap_2d[room] = 1;
            }
            if(trap_tripped == 3) {
                trap_3d[room] = 1;
            }
            if(trap_tripped == 4) {
                trap_4d[room] = 1;
            }
        }


    }




/*QTE FOR MEMORY CARD GAME */
const board = document.getElementById('chapel-display');
// Card symbols (pairs)
const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cards = [...symbols, ...symbols];
let flippedCards = [];
let matchedCount = 0;
let lockBoard = false;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createCard(symbol) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-face card-front">?</div>
        <div class="card-face card-back">${symbol}</div>
    `;
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (lockBoard || this.classList.contains('flipped')) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    lockBoard = true;
    const [card1, card2] = flippedCards;
    const isMatch = card1.innerHTML === card2.innerHTML;

    if (isMatch) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        resetTurn();
        matchedCount += 2;
        if (matchedCount === cards.length) setTimeout(() => keypad_cleared(), 500);
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    flippedCards = [];
    lockBoard = false;
}

function initGame() {
    document.getElementById("keypad_button").style.display = "none";
    board.innerHTML = '';
    matchedCount = 0;
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach(symbol => {
        board.appendChild(createCard(symbol));
    });
}

function keypad_cleared() {
    document.getElementById("qte_keypad_text").innerHTML = "You've unlocked the door."
    document.getElementById("keypad_button").style.display = "block";
    document.getElementById("chapel-display").innerHTML = "";

    if(trap_tripped == 1) {
        trap_1d[room] = 1;
    }
    if(trap_tripped == 2) {
        trap_2d[room] = 1;
    }
    if(trap_tripped == 3) {
        trap_3d[room] = 1;
    }
    if(trap_tripped == 4) {
        trap_4d[room] = 1;
    }
}
// Start the game on load
//initGame();

//whack a mole style qte challenge!

const qte_whack_holes = document.querySelectorAll(".hole");
        const qte_whack_startButton = document.getElementById("qte_whack_startButton");
        const qte_whack_endButton = document.getElementById("qte_whack_endButton");
        const qte_whack_scoreDisplay = document.getElementById("qte_whack_score");
        const qte_whack_timerDisplay = document.getElementById("qte_whack_timer");

        let qte_whack_timer_val;
        let qte_whack_score_val = 0;
        let qte_whack_countdown;
        let qte_whack_moleInterval;

        // Set the initial state to game over
        let qte_whack_gameOver = true;

        function qte_whack_comeout() {
            qte_whack_holes.forEach(qte_whack_hole => {
                qte_whack_hole.classList.remove('target');
                qte_whack_hole.removeEventListener('click', qte_whack_handleMoleClick);
            });

            let qte_whack_random = qte_whack_holes[Math.floor(Math.random() * 9)];

            qte_whack_random.classList.add('target');
            qte_whack_random.addEventListener('click', qte_whack_handleMoleClick);
        }

        function qte_whack_handleMoleClick() {
            if (!qte_whack_gameOver) {
                qte_whack_score_val++;
                qte_whack_scoreDisplay.textContent = `Score: ${qte_whack_score_val}`;
            }
            this.classList.remove('target');
        }

        function qte_whack_startGame() {
            if (!qte_whack_gameOver) {
                return;
            }

            qte_whack_gameOver = false;
            qte_whack_score_val = 0;
            qte_whack_scoreDisplay.textContent = `Score: ${qte_whack_score_val}`;
            qte_whack_timer_val = 60;
            qte_whack_timerDisplay.textContent = `Time: ${qte_whack_timer_val}s`;

            qte_whack_startButton.disabled = true;
            qte_whack_endButton.disabled = false;

            qte_whack_countdown = setInterval(() => {
                qte_whack_timer_val--;
                qte_whack_timerDisplay.textContent = `Time: ${qte_whack_timer_val}s`;

                if (qte_whack_timer_val <= 0) {
                    clearInterval(qte_whack_countdown);
                    qte_whack_gameOver = true;
                    alert(`Game Over!\nYour final score: ${qte_whack_score_val}`);
                    qte_whack_startButton.disabled = false;
                    qte_whack_endButton.disabled = true;
                }
            }, 1000);

            qte_whack_moleInterval = setInterval(() => {
                if (!qte_whack_gameOver) qte_whack_comeout();
            }, 1000);
        }

        function qte_whack_endGame() {
            clearInterval(qte_whack_countdown);
            clearInterval(qte_whack_moleInterval);
            qte_whack_gameOver = true;
            alert(`Game Ended!\nYour final score: ${qte_whack_score_val}`);
            qte_whack_score_val = 0;
            qte_whack_timer_val = 60;
            qte_whack_scoreDisplay.textContent = `Score: ${qte_whack_score_val}`;
            qte_whack_timerDisplay.textContent = `Time: ${qte_whack_timer_val}s`;
            qte_whack_startButton.disabled = false;
            qte_whack_endButton.disabled = true;
        }


        function qte_CAKE() {
            
            if(trap_tripped == 1) {
                trap_1d[room] = 1;
            }
            if(trap_tripped == 2) {
                trap_2d[room] = 1;
            }
            if(trap_tripped == 3) {
                trap_3d[room] = 1;
            }
            if(trap_tripped == 4) {
                trap_4d[room] = 1;
            }
        }



/*HOW TO PLAY CONTROLS */

// Array for invalid message
let textArray = [
    "Not a valid key!",
    "Sorry try again!",
    "Try W or A or S or D!",
    "Press a valid key!"
  ];
  
  // Function to remove activeKey class to all keys
  // Accepts 1 parameter
  function removeActiveClass(e) {
    // Removes activeKey for everything
    e.target.classList.remove("activeKey");
  }
  
  // Function that selects a random from 0 to array.length
  function randomNumber() {
    // Uses JS Math function
    number = Math.floor(Math.random() * textArray.length);
    // Returns number
    return number;
  }
  
  // Function that calls randomNumber to select a random text
  function randomText() {
    // Assigns randomNumber to index
    index = randomNumber();
    // Returns random string for array
    return textArray[index];
  }
  
  // Function to change the text in message
  function changeText(e) {
    if (e === 87) {
      document.getElementById("message").innerHTML = "The W key Moves Up";
    } else if (e === 65) {
      document.getElementById("message").innerHTML = "The A key Moves Left";
    } else if (e === 83) {
      document.getElementById("message").innerHTML = "The S key Moves Down";
    } else if (e === 68) {
      document.getElementById("message").innerHTML = "The D key Moves Right";
    }else if (e === 75) {
      document.getElementById("message").innerHTML = "The K key Smashes Objects!";
    }else if (e === 79) {
      document.getElementById("message").innerHTML = "The O key Opens Objects!";
    } else {
      // Calls random text
      document.getElementById("message").innerHTML = randomText();
    }
  }
  
  // Function when user presses on a key
  function keyPressed(e) {
    // Assigns key "div" to key
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // Calls changeText to change the text
    changeText(e.keyCode);
    // Only applies activeKey to the keys displayed in browser
    if (
      e.keyCode === 87 ||
      e.keyCode === 65 ||
      e.keyCode === 83 ||
      e.keyCode === 75 ||
      e.keyCode === 79 ||
      e.keyCode === 68
    ) {
      // Adds class activeKey
      key.classList.add("activeKey");
    }
  }
  
  // Creates a const array of all the keys on screen
  const keys = Array.from(document.querySelectorAll(".key"));
  // Listens to the browser and removes activeKey when needed
  keys.forEach(key => key.addEventListener("transitionend", removeActiveClass));
  // Listens to users and when key is pressed calls keyPressed
  window.addEventListener("keydown", keyPressed);


  //////////////////////////////////////////////////////////////////////////////////////////////

  function trackLogin() {
    const displayElement = document.getElementById('login-info');
    const awayElement = document.getElementById('time-away');
    
    // 1. Get current time in milliseconds
    const now = Date.now(); 

    // 2. Retrieve the previous login (stored as a number string)
    const lastLoginMillis = localStorage.getItem('lastLoginMillis');

    if (lastLoginMillis) {
        const lastDate = new Date(parseInt(lastLoginMillis));
        displayElement.innerHTML = `Last login: <b>${lastDate.toLocaleString()}</b>`;

        // 3. Calculate the difference
        const diffInMs = now - parseInt(lastLoginMillis);
        awayElement.innerText = `You were away for: ${formatTime(diffInMs)}`;
    } else {
        displayElement.innerHTML = "Welcome! This is your <b>first visit</b>.";
    }

    // 4. Update localStorage with the current time for next time
    localStorage.setItem('lastLoginMillis', now);
}

// Helper function to turn milliseconds into a readable string
function formatTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m ago`;
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s ago`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s ago`;
    return `${seconds}s ago`;
}

/////////////////////////////////////////////////////////////////////////////////////////


var section_boss = 0;
var player_thp = 0;
var player_stress = 0;
var enemy_thp = 0;
var enemy_stress = 0;

var shields_timeout = 0;
var heal_timeout = 0;
var enemy_shields_timeout = 0;
var enemy_heal_timeout = 0;

var enemy_damage = 0;
var player_damage = 0;

var enemy_absorbed = 0;
var player_absorbed = 0;

var encounter_text = 0;
var enemy_type = 0;

var enemy = {
    health: 10,
    armor: 0
}
function Boss_Battle () {
    document.getElementById("The_Locked_Door").style.display = "none";
    section_boss = 1;
    hud(9);
}

function Battle_System(callout) {
    if(callout == 0) {
    
        enemy_type = Math.floor((Math.random() * enemy_nme.length));
        encounter_text = Math.floor((Math.random() * encounter_sentence.length));

        player_thp = armor_thp[player.armor] + shield_thp[player.shield];
        enemy_thp = enemy_arm[enemy_type];
        
        enemy.health = enemy_hth[enemy_type];
        enemy.armor = enemy_thp; 

        if(section_boss == 1) {
            
            document.getElementById("enemy_battle_icon").className = '';
            enemy_clr = Math.floor(Math.random() * 4) + 1;

            if(enemy_clr == 1) {
                i_typewriter = 0;
                document.getElementById("encounter_battle_test").innerHTML = "";
                txt_typewriter = "An strong " + enemy_nme[enemy_type] + " blocks your path...";
                typeWriter();
                document.getElementById("enemy_battle_icon").className = 'white';
                enemy.health = enemy_hth[enemy_type] * 1;
                enemy.armor = enemy_thp * 1; 
            }

            if(enemy_clr == 2) {
                i_typewriter = 0;
                document.getElementById("encounter_battle_test").innerHTML = "";
                txt_typewriter = "A <a class='green'>dangerous</a> " + enemy_nme[enemy_type] + " blocks your path...";
                typeWriter();
                document.getElementById("enemy_battle_icon").className = 'green';
                enemy.health = enemy_hth[enemy_type] * 1.5;
                enemy.armor = enemy_thp * 1.5; 
            }

            if(enemy_clr == 3) {
                i_typewriter = 0;
                document.getElementById("encounter_battle_test").innerHTML = "";
                txt_typewriter = "A <a class='red'>deadly</a> " + enemy_nme[enemy_type] + " blocks your path...";
                typeWriter();
                document.getElementById("enemy_battle_icon").className = 'red';
                enemy.health = enemy_hth[enemy_type] * 2;
                enemy.armor = enemy_thp * 2; 
            }

            if(enemy_clr == 4) {
                i_typewriter = 0;
                document.getElementById("encounter_battle_test").innerHTML = "";
                txt_typewriter = "A <a class='purple'>super deadly</a> " + enemy_nme[enemy_type] + " blocks your path...";
                typeWriter();
                document.getElementById("enemy_battle_icon").className = 'purple';
                enemy.health = enemy_hth[enemy_type] * 2.5;
                enemy.armor = enemy_thp * 2.5; 
            }

        } else {
            i_typewriter = 0;
            document.getElementById("encounter_battle_test").innerHTML = "";
            txt_typewriter = "A " + enemy_nme[enemy_type] + " blocks your path...";
            typeWriter();
            document.getElementById("enemy_battle_icon").className = '';
        }
        
        Battle_System(1);
    }

    if(callout == 1) {
        //update the UI
            document.getElementById("enemy_battle_icon").innerHTML = enemy_icn[enemy_type];

            i_typewriter = 0;
            document.getElementById("encounter_battle_test").innerHTML = "";
            txt_typewriter = "Select your next move...";
            typeWriter();

            document.getElementById("player_status").innerHTML = "";
            document.getElementById("enemy_status").innerHTML = "";

            document.getElementById("player_battle_health").innerHTML = player.health;
            document.getElementById("enemy_battle_health").innerHTML = (enemy.health || 0);

            document.getElementById("player_battle_armor").innerHTML = player_thp;
            document.getElementById("enemy_battle_armor").innerHTML = (enemy.armor || 0);

            document.getElementById("battle_encounter_button").style.display = "block";
            document.getElementById("battle_encounter_button_victory").style.display = "none";

            document.getElementById("cell_core_battle_1").style.display = "none";
            document.getElementById("cell_core_battle_2").style.display = "none";

            document.getElementById("health_assist").innerHTML = "+10hp (food: " + player.food + ")";

            document.getElementById("primary_weapon").disabled = false;
            document.getElementById("secondary_weapon").disabled = false;
            
            if(shields_timeout <= 0) {
                document.getElementById("shields_assist").disabled = false;
            } else {
                document.getElementById("shields_assist").disabled = true;
            }
            if(heal_timeout <= 0) {
                if(player.food >= 1) {
                document.getElementById("health_assist").disabled = false;
                } else {
                    document.getElementById("health_assist").disabled = true;
                }
            } else {
                document.getElementById("health_assist").disabled = true;
            }



            if(player.health <= 0) {
                //player defeat
                Battle_System(8);

            }

            if(enemy.health <= 0) {
                //enemy defeated.
                Battle_System(7);
            }
    }

    if(callout == 2) {
        //player main attack
        document.getElementById("primary_weapon").disabled = true;
        document.getElementById("secondary_weapon").disabled = true;
        document.getElementById("shields_assist").disabled = true;
        document.getElementById("health_assist").disabled = true;
        
        //if above board just straight up attack the player...
            //when all else fails attack!
            i_typewriter = 0;
            document.getElementById("encounter_battle_test").innerHTML = "";
            txt_typewriter = "You used your " + weapon_nme[player.weapon] + " on the enemy!";
            typeWriter();
            setTimeout(() => {
                // 1. Calculate damage with a fallback check
                let rawDamage = Math.floor((Math.random() * weapon_dmg[player.weapon])) + 1;
            
                // 2. If it's NaN (maybe the weapon name was wrong?), force to 0 and call an alert
                if (Number.isNaN(rawDamage)) {
                    console.error("Combat Error: Weapon damage is NaN. Check weapon keys!");
                    // Optional: Trigger a 'Miss' function here
                    // playerMissedAction(); 
                    player_damage = 0;
                } else {
                    player_damage = rawDamage;
                }
            
                // --- Combat Logic ---
                if (player_damage <= enemy.armor) {
                    enemy.armor -= player_damage;
                } else {
                    let leftoverDamage = player_damage - enemy.armor;
                    enemy.armor = 0;
                    enemy.health -= leftoverDamage;
                }
            
                // Ensure health/armor never display as negative or NaN
                enemy.health = Math.max(0, enemy.health || 0);
                enemy.armor = Math.max(0, enemy.armor || 0);
            
                // Update UI
                document.getElementById("enemy_battle_health").innerHTML = enemy.health;
                document.getElementById("enemy_battle_armor").innerHTML = enemy.armor;
            
                if (enemy.health <= 0) {
                    Battle_System(7); // Enemy defeated
                } else {
                    Battle_System(6); // Continue battle
                }
                
            }, 1000);
    }

    if(callout == 3) {
        //player punch
        document.getElementById("primary_weapon").disabled = true;
        document.getElementById("secondary_weapon").disabled = true;
        document.getElementById("shields_assist").disabled = true;
        document.getElementById("health_assist").disabled = true;
        
        i_typewriter = 0;
        document.getElementById("encounter_battle_test").innerHTML = "";
        txt_typewriter = "You punch the " + enemy_nme[enemy_type] + "!";
        typeWriter();
        
        setTimeout(() => {
            enemy.health -= 1;
            document.getElementById("enemy_battle_health").innerHTML = (enemy.health || 0);
            if(enemy.health <= 0) {
                //enemy defeated.
                Battle_System(7);
            } else {
                Battle_System(6);
            }
        }, 1000);
    }

    if(callout == 4) {
        //player shields up
        document.getElementById("primary_weapon").disabled = true;
        document.getElementById("secondary_weapon").disabled = true;
        document.getElementById("shields_assist").disabled = true;
        document.getElementById("health_assist").disabled = true;

        if(shields_timeout <= 0) {
            i_typewriter = 0;
            document.getElementById("encounter_battle_test").innerHTML = "";
            txt_typewriter = "You use Shields Up to increase your armor!";
            typeWriter();

            setTimeout(() => {
                player_thp = armor_thp[player.armor] + shield_thp[player.shield];
                
                if(player_stress >= 1) {
                    document.getElementById("player_status").innerHTML = "Stressed!";
                    player_stress += 1;
                } else {
                    player_stress += 1;
                }

                shields_timeout == 3;
                Battle_System(6);
            }, 1000);
        }
        
    }

    if(callout == 5) {
        //player health up
        document.getElementById("primary_weapon").disabled = true;
        document.getElementById("secondary_weapon").disabled = true;
        document.getElementById("shields_assist").disabled = true;
        document.getElementById("health_assist").disabled = true;

        if(heal_timeout <= 0) {
            if(player.food >= 1) {

                i_typewriter = 0;
                document.getElementById("encounter_battle_test").innerHTML = "";
                txt_typewriter = "You eat some food and heal up!";
                typeWriter();

                setTimeout(() => {
                    player.food -= 1;
                    player.health += 10;
                    heal_timeout = 3;
                    document.getElementById("health_assist").innerHTML = "+10hp (food: " + player.food + ")";
                    Battle_System(6);
                }, 1000);   
            }
        } 
    }

    if(callout == 6) {
        //the enemy attacks

        //check health 
        if(enemy.health >= 1) {
            if(enemy.health <= (enemy_hth[enemy_type] / 2)) {
                if(enemy_heal_timeout == 0) {
                    //see if one can heal
                    setTimeout(() => {
                        i_typewriter = 0;
                        document.getElementById("encounter_battle_test").innerHTML = "";
                        txt_typewriter = "The " + enemy_nme[enemy_type] + " heals up!";
                        typeWriter();
                        var xxy = Math.floor((Math.random() * 4)) +1;
                        enemy.health += xxy;
                        enemy_heal_timeout = 3;
                        document.getElementById("enemy_battle_health").innerHTML = (enemy.health || 0);
                        document.getElementById("enemy_battle_armor").innerHTML = (enemy.armor || 0);
                    }, 2500);
                } else {
                    if(enemy_shields_timeout == 0) {
                        //see if one can armor up
                        setTimeout(() => {
                            i_typewriter = 0;
                            document.getElementById("encounter_battle_test").innerHTML = "";
                            txt_typewriter = "The " + enemy_nme[enemy_type] + " reinforced their shields!";
                            typeWriter();
                            enemy.armor = enemy_thp[enemy_type];
                            enemy_shields_timeout = 3;
                            document.getElementById("enemy_battle_health").innerHTML = (enemy.health || 0);
                            document.getElementById("enemy_battle_armor").innerHTML = (enemy.armor || 0);
                        }, 2500);
                    } else {
                        //when all else fails attack!
                        setTimeout(() => {
                            i_typewriter = 0;
                            document.getElementById("encounter_battle_test").innerHTML = "";
                            txt_typewriter = "The " + enemy_nme[enemy_type] + " attacks the player!";
                            typeWriter();
                            // 1. Roll the damage
                            enemy_damage = Math.floor((Math.random() * enemy_dmg[enemy_type])) + 1;

                            // 2. The Logic: Check armor first
                            if (enemy_damage <= player.armor) {
                                // Armor absorbs everything
                                player.armor -= enemy_damage;
                            } else {
                                // Armor breaks, calculate the leftover "piercing" damage
                                let leftover = enemy_damage - player.armor;
                                player.armor = 0; // Armor is now empty
                                player.health -= leftover; // Only the leftover hits the health
                            }

                            document.getElementById("enemy_battle_health").innerHTML = (enemy.health || 0);
                            document.getElementById("enemy_battle_armor").innerHTML = (enemy.armor || 0);
                            document.getElementById("player_battle_health").innerHTML = player.health;
                            document.getElementById("player_battle_armor").innerHTML = player_thp;
                        }, 2500);
                    }
                }
            } else {
                //if above board just straight up attack the player...
                //when all else fails attack!
                setTimeout(() => {
                    i_typewriter = 0;
                    document.getElementById("encounter_battle_test").innerHTML = "";
                    txt_typewriter = "The " + enemy_nme[enemy_type] + " attacks the player!";
                    typeWriter();
                    // 1. Roll the damage
                    enemy_damage = Math.floor((Math.random() * enemy_dmg[enemy_type])) + 1;

                    // 2. The Logic: Check armor first
                    if (enemy_damage <= player.armor) {
                        // Armor absorbs everything
                        player.armor -= enemy_damage;
                    } else {
                        // Armor breaks, calculate the leftover "piercing" damage
                        let leftover = enemy_damage - player.armor;
                        player.armor = 0; // Armor is now empty
                        player.health -= leftover; // Only the leftover hits the health
                    }
                    document.getElementById("enemy_battle_health").innerHTML = (enemy.health || 0);
                    document.getElementById("enemy_battle_armor").innerHTML = (enemy.armor || 0);

                    document.getElementById("player_battle_health").innerHTML = player.health;
                    document.getElementById("player_battle_armor").innerHTML = player_thp;
                }, 2500);
            }
        }
        else if(enemy.health <= 0){
            Battle_System(7);
        }

        setTimeout(() => {   
            Battle_System(1);
        }, 4500);
        
    }

    if(callout == 7) {
        //enemy defeated
        
        setTimeout(() => {   
        i_typewriter = 0;
        document.getElementById("encounter_battle_test").innerHTML = "";
        txt_typewriter = "The " + enemy_nme[enemy_type] + " has been defeated!";
        typeWriter();

        document.getElementById("battle_encounter_button_victory").style.display = "block";

        document.getElementById("cell_core_battle_1").style.display = "none";
        document.getElementById("cell_core_battle_2").style.display = "none";
        }, 2500);
        console.log("enemy defeated");
    }

    if(callout == 8) {
        //player is defeated....
        console.log("player defeated");

        setTimeout(() => {   
            i_typewriter = 0;
            document.getElementById("encounter_battle_test").innerHTML = "";
            txt_typewriter = "The player has been defeated!";
            typeWriter();
    
            document.getElementById("cell_core_battle_1").style.display = "none";
            document.getElementById("cell_core_battle_2").style.display = "none";

            Overlay.close();
            hud(11);

            }, 2500);
    }

    if(callout == 9) {
        document.getElementById("battle_encounter_button").style.display = "none";
        document.getElementById("battle_encounter_button_victory").style.display = "none";

        document.getElementById("cell_core_battle_1").style.display = "table-row";
        document.getElementById("cell_core_battle_2").style.display = "table-row";
    }

    if(callout == 10) {
        if(section_boss == 0) {
            //we want to fade out and then go back to the world...
            Overlay.close();
            document.getElementById("battle").style.display = "none";
            document.getElementById("game").style.display = "block";
        }

        if(section_boss == 1) {
            //the player defeated the boss! and the section screen should pop up now...
            Overlay.close();
            document.getElementById("battle").style.display = "none";
            document.getElementById("stage_cleared").style.display = "block";
        }
    }
}


class RetroOverlayModule {
    constructor() {
        this.body = document.body;
        this.canvas = document.getElementById('ra-pixel-canvas');
        this.module = document.getElementById('battle');
        this.gridSize = 400; // 20x20
        this.init();
    }

    init() {
        // Generate the pixel elements
        for (let i = 0; i < this.gridSize; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('ra-pixel');
            // Random stagger for organic digital fill
            pixel.style.transitionDelay = `${Math.random() * 0.4}s`;
            this.canvas.appendChild(pixel);
        }
    }

    trigger() {
        // Step 1: Violent Shake
        this.body.classList.add('ra-glitch-out');

        // Step 2: Pixel Swarm after 400ms
        setTimeout(() => {
            this.body.classList.remove('ra-glitch-out');
            this.body.classList.add('ra-show-pixels');

            // Step 3: Show the Overlay Module
            setTimeout(() => {
                this.module.style.display = 'block';
            }, 500);
        }, 400);
    }

    close() {
        // Hide module and retract pixels
        this.module.style.display = 'none';
        this.body.classList.remove('ra-show-pixels');
    }
}

// Initialize the module
const Overlay = new RetroOverlayModule();


var i_typewriter = 0;
var txt_typewriter = 'Lorem ipsum dummy text blabla.';
var speed_typewriter = 40;

function typeWriter() {

  if (i_typewriter < txt_typewriter.length) {
    document.getElementById("encounter_battle_test").innerHTML += txt_typewriter.charAt(i_typewriter);
    i_typewriter++;
    setTimeout(typeWriter, speed_typewriter);
  }
}


function rosebud_merchant_open_tab(rosebud_merchant_evt, rosebud_merchant_category) {
    var i, rosebud_merchant_list, rosebud_merchant_links;
    
    // Hide all tab content
    rosebud_merchant_list = document.getElementsByClassName("rosebud_merchant_content");
    for (i = 0; i < rosebud_merchant_list.length; i++) {
      rosebud_merchant_list[i].style.display = "none";
    }
    
    // Remove the active class from all buttons
    rosebud_merchant_links = document.getElementsByClassName("rosebud_merchant_links");
    for (i = 0; i < rosebud_merchant_links.length; i++) {
      rosebud_merchant_links[i].className = rosebud_merchant_links[i].className.replace(" active", "");
    }
    
    // Show the specific tab and add active class to the clicked button
    document.getElementById(rosebud_merchant_category).style.display = "block";
    rosebud_merchant_evt.currentTarget.className += " active";
  }
  
  // Automatically open the default tab on load
  document.getElementById("rosebud_merchant_default").click();


  // Encapsulated Wave Logic
const rosebud_world_risk_calc = {
    currentRisk: 0,          // Current percentage chance (0-100)
    baseIncrement: 12,       // Risk added per action
    pityThreshold: 5,        // Max actions allowed before a guaranteed wave
    actionCountSinceWave: 0, // Counter for the pity timer
    totalWavesTriggered: 0,

    /**
     * Call this function whenever the player performs an action 
     * (opens a door, picks up an item, etc.)
     */
    processAction: function() {
        this.actionCountSinceWave++;
        
        // 1. Calculate new risk
        this.currentRisk += this.baseIncrement;
        
        // 2. Roll the dice (1 to 100)
        const roll = Math.floor(Math.random() * 100) + 1;
        
        console.log(`[Rosebud Log] Action: ${this.actionCountSinceWave} | Risk: ${this.currentRisk}% | Roll: ${roll}`);

        // 3. Check for Wave Trigger
        // Trigger if roll is within risk OR if pity timer is hit
        if (roll <= this.currentRisk || this.actionCountSinceWave >= this.pityThreshold) {
            
            const reason = (this.actionCountSinceWave >= this.pityThreshold) ? "PITY TIMER" : "RNG ROLL";
            this.triggerWave(reason);
            
        } else {
            console.log("Status: The dungeon remains silent...");
        }
    },

    triggerWave: function(reason) {
        this.totalWavesTriggered++;
        
        // Output for your use
        //console.warn(`[Rosebud Event] !!! WAVE TRIGGERED via ${reason} !!!`);
        //console.log(`Total Waves this run: ${this.totalWavesTriggered}`);

        // 4. Reset state
        this.currentRisk = 0;
        this.actionCountSinceWave = 0;
        hud(9);
    }
};

// Example Usage:
// rosebud_world_risk_calc.processAction();