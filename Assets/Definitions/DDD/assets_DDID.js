//Assets for DDD
/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";
console.log("%cAssets for Deep Down Into Darkness ready.", "color: orange");

var LoadTextures = [
  //wall
  { srcName: "Textures/Wall/BlackBrickWall.jpg", name: "BlackBrickWall" },
  { srcName: "Textures/Wall/BlackBrickWall2.jpg", name: "BlackBrickWall2" },
  { srcName: "Textures/Wall/BlackWall.jpg", name: "BlackWall" },
  { srcName: "Textures/Wall/BlackWall2.jpg", name: "BlackWall2" },
  { srcName: "Textures/Wall/BrickWall.jpg", name: "BrickWall" },
  { srcName: "Textures/Wall/BrickWall2.jpg", name: "BrickWall2" },
  { srcName: "Textures/Wall/BrickWall3.jpg", name: "BrickWall3" },
  { srcName: "Textures/Wall/BrickWall4.jpg", name: "BrickWall4" },
  { srcName: "Textures/Wall/BrickWall5.jpg", name: "BrickWall5" },
  { srcName: "Textures/Wall/BrickWall6.jpg", name: "BrickWall6" },
  { srcName: "Textures/Wall/BrickWall7.jpg", name: "BrickWall7" },
  { srcName: "Textures/Wall/BrokenRuin.jpg", name: "BrokenRuin" },
  { srcName: "Textures/Wall/CastleWall.jpg", name: "CastleWall" },
  { srcName: "Textures/Wall/DungeonFloor.jpg", name: "DungeonFloor" },
  { srcName: "Textures/Wall/DungeonFloor2.jpg", name: "DungeonFloor2" },
  { srcName: "Textures/Wall/DungeonWall.jpg", name: "DungeonWall" },
  { srcName: "Textures/Wall/DungeonWall2.jpg", name: "DungeonWall2" },
  { srcName: "Textures/Wall/DungeonWall3.jpg", name: "DungeonWall3" },
  { srcName: "Textures/Wall/FloorDg1.jpg", name: "FloorDg1" },
  { srcName: "Textures/Wall/Fog.png", name: "Fog" },
  { srcName: "Textures/Wall/LavaWall.jpg", name: "LavaWall" },
  { srcName: "Textures/Wall/LavaWall2.jpg", name: "LavaWall2" },
  { srcName: "Textures/Wall/MorgueFloor.jpg", name: "MorgueFloor" },
  { srcName: "Textures/Wall/OldWall.jpg", name: "OldWall" },
  { srcName: "Textures/Wall/RockFloor.jpg", name: "RockFloor" },
  { srcName: "Textures/Wall/RockWall.jpg", name: "RockWall" },
  { srcName: "Textures/Wall/SlateWall.jpg", name: "SlateWall" },
  { srcName: "Textures/Wall/StoneFloor.jpg", name: "StoneFloor" },
  { srcName: "Textures/Wall/StoneFloor2.jpg", name: "StoneFloor2" },
  { srcName: "Textures/Wall/StoneFloor3.jpg", name: "StoneFloor3" },
  { srcName: "Textures/Wall/StoneFloor4.jpg", name: "StoneFloor4" },
  { srcName: "Textures/Wall/StoneFloor5.jpg", name: "StoneFloor5" },
  { srcName: "Textures/Wall/StoneWall.jpg", name: "StoneWall" },
  { srcName: "Textures/Wall/StoneWall2.jpg", name: "StoneWall2" },
  { srcName: "Textures/Wall/StoneWall3.jpg", name: "StoneWall3" },
  { srcName: "Textures/Wall/StoneWall3b.jpg", name: "StoneWall3b" },
  { srcName: "Textures/Wall/StoneWall4.jpg", name: "StoneWall4" },
  { srcName: "Textures/Wall/StoneWall5.jpg", name: "StoneWall5" },
  { srcName: "Textures/Wall/ThatchFloor.jpg", name: "ThatchFloor" },
  { srcName: "Textures/Wall/TileFloor.jpg", name: "TileFloor" },
  { srcName: "Textures/Wall/TlakFloor.jpg", name: "TlakFloor" },
  { srcName: "Textures/Wall/TlakFloor2.jpg", name: "TlakFloor2" },
  { srcName: "Textures/Wall/TlakFloor2b.jpg", name: "TlakFloor2b" },
  { srcName: "Textures/Wall/TlakFloor3.jpg", name: "TlakFloor3" },
  { srcName: "Textures/Wall/TlakFloor4.jpg", name: "TlakFloor4" },
  { srcName: "Textures/Wall/TlakFloor4b.jpg", name: "TlakFloor4b" },
  { srcName: "Textures/Wall/WallDG1.jpg", name: "WallDG1" },
  { srcName: "Textures/Wall/WhiteCeramicWall.jpg", name: "WhiteCeramicWall" },
  { srcName: "Textures/Wall/WhiteCeramicWall2.jpg", name: "WhiteCeramicWall2" },
  { srcName: "Textures/Wall/WhiteWall.jpg", name: "WhiteWall" },
  { srcName: "Textures/Wall/YellowBrick.jpg", name: "YellowBrick" },

  //title
  { srcName: "Textures/Title/DDD_title.jpg", name: "DDID_Cover" },
];
var LoadSprites = [

  //keys
  { srcName: "Sprites/Keys/GoldKeySmall.png", name: "goldKey" },
  { srcName: "Sprites/Keys/SilverKeySmall.png", name: "silverKey" },
  { srcName: "Sprites/Keys/GoldKey.png", name: "GoldKeyBig" },
  { srcName: "Sprites/Keys/SilverKey.png", name: "SilverKeyBig" },

  //scrolls
  { srcName: "Sprites/Scrolls/SCR_BoostArmor.png", name: "SCR_BoostArmor" },
  { srcName: "Sprites/Scrolls/SCR_BoostWeapon.png", name: "SCR_BoostWeapon" },
  { srcName: "Sprites/Scrolls/SCR_Cripple.png", name: "SCR_Cripple" },
  { srcName: "Sprites/Scrolls/SCR_DestroyArmor.png", name: "SCR_DestroyArmor" },
  { srcName: "Sprites/Scrolls/SCR_DestroyWeapon.png", name: "SCR_DestroyWeapon" },
  { srcName: "Sprites/Scrolls/SCR_DrainMana.png", name: "SCR_DrainMana" },
  { srcName: "Sprites/Scrolls/SCR_HalfLife.png", name: "SCR_HalfLife" },
  { srcName: "Sprites/Scrolls/SCR_Invisibility.png", name: "SCR_Invisibility" },
  { srcName: "Sprites/Scrolls/SCR_Light.png", name: "SCR_Light" },
  { srcName: "Sprites/Scrolls/SCR_Luck.png", name: "SCR_Luck" },
  { srcName: "Sprites/Scrolls/SCR_MagicBoost.png", name: "SCR_MagicBoost" },
  { srcName: "Sprites/Scrolls/SCR_Map.png", name: "SCR_Map" },
  { srcName: "Sprites/Scrolls/SCR_Petrify.png", name: "SCR_Petrify" },
  { srcName: "Sprites/Scrolls/SCR_TeleportTemple.png", name: "SCR_TeleportTemple" },

  //doors
  { srcName: "Sprites/Doors/stairs_entrance.png", name: "Entrance" },
  { srcName: "Sprites/Doors/stairs_open.png", name: "Exit" },
  { srcName: "Sprites/Doors/door.png", name: "Door" },
  { srcName: "Sprites/Doors/gate48.png", name: "Gate" },
  { srcName: "Sprites/Doors/temple.png", name: "temple" },

  // items
  { srcName: "Sprites/Items/scroll32.png", name: "Scroll" },
  { srcName: "Sprites/Items/goldBarSmall.png", name: "Gold" },
  { srcName: "Sprites/Items/skull_old.png", name: "Skull" },
  { srcName: "Sprites/Items/coins2.png", name: "Coin" },
  { srcName: "Sprites/Items/grave.png", name: "Grave" },
  { srcName: "Sprites/Items/chest32.png", name: "Chest" },
  { srcName: "Sprites/Items/sword4.png", name: "Sword" },
  { srcName: "Sprites/Items/shield32.png", name: "Shield" },
  { srcName: "Sprites/Items/Mana.png", name: "Mana" },
  { srcName: "Sprites/Items/bluePotion24.png", name: "BluePotion" },
  { srcName: "Sprites/Items/potion24.png", name: "RedPotion" },
  { srcName: "Sprites/Items/Lantern32.png", name: "Lamp" },

  //UI
  { srcName: "Sprites/UI/divLineB.png", name: "LineBottom" },
  { srcName: "Sprites/UI/divLineT.png", name: "LineTop" },

  //skills
  { srcName: "Sprites/Skills/Agility.png", name: "Agility" },
  { srcName: "Sprites/Skills/Magic.png", name: "Magic" },
  { srcName: "Sprites/Skills/Heart.png", name: "Heart" },


];

var LoadSequences = [
  { srcName: "Sequences/SHIP_exp", name: "ShipExp", type: "png", count: 8 },
  { srcName: "Sequences/ALIEN_exp", name: "AlienExp", type: "png", count: 6 }
];
var LoadSheetSequences = [
  { srcName: "SheetSequences/MagicOrb2.png", count: 9, name: "MagicOrb" },
  { srcName: "SheetSequences/RedMagic.png", count: 4, name: "RedMagic" },
  { srcName: "SheetSequences/Fizzle.png", count: 10, name: "Fizzle" }
];
var LoadSheets = [
  { srcName: "/Sheets/ghost1", type: "png", count: 4, name: "Ghosty" },
  { srcName: "/Sheets/Ghost4", type: "png", count: 4, name: "Ghost" },
  { srcName: "/Sheets/ghost3", type: "png", count: 4, name: "ScaryGhost" },
  { srcName: "/Sheets/gandalf", type: "png", count: 4, name: "Wizard" },
  { srcName: "/Sheets/skelly4", type: "png", count: 4, name: "ZombieGirl" },
  { srcName: "/Sheets/death2", type: "png", count: 4, name: "Death2" },
  { srcName: "/Sheets/death1", type: "png", count: 4, name: "Death" },
  { srcName: "/Sheets/skelly5", type: "png", count: 3, name: "BigHead" },
  { srcName: "/Sheets/skelly1", type: "png", count: 4, name: "Wanderer" },
  { srcName: "/Sheets/skeleton10", type: "png", count: 3, name: "SkeletonBoss" },
  { srcName: "/Sheets/CoinBoss", type: "png", count: 4, name: "Puffy" },
  { srcName: "/Sheets/skeleton9", type: "png", count: 4, name: "SkeletonWarrior" },
  { srcName: "/Sheets/dragon2", type: "png", count: 3, name: "LittleDragon" },
  { srcName: "/Sheets/devil", type: "png", count: 4, name: "Devil" },
  { srcName: "/Sheets/skeleton8", type: "png", count: 4, name: "SkeletonBoss2" },
  { srcName: "/Sheets/Ghost2", type: "png", count: 4, name: "UglyGhost" },
  { srcName: "/Sheets/zombie2", type: "png", count: 3, name: "Ghoul" },
  { srcName: "/Sheets/behemoth", type: "png", count: 4, name: "Behemoth" }
];
var ExtendSheetTag = [];
var LoadPacks = [
  { srcName: "/Packs/KnightCoated.png", count: 4, name: "KnightCoated" },
  { srcName: "/Packs/KnightSprites2.png", count: 4, name: "Knight" },
  { srcName: "/Packs/KnightSpritesInvisible2.png", count: 4, name: "KnightInvisible" },
  { srcName: "/Packs/Croc.png", count: 5, name: "Croc" },
  { srcName: "/Packs/LittleGreenSnake.png", count: 4, name: "LittleGreenSnake" },
  { srcName: "/Packs/GreenSnake.png", count: 4, name: "Snake" },
  { srcName: "/Packs/PurpleSnake.png", count: 4, name: "PurpleSnake" },
  { srcName: "/Packs/BlackSnake.png", count: 4, name: "BlackSnake" },
  { srcName: "/Packs/Sorceress.png", count: 6, name: "Sorceress" },
  { srcName: "/Packs/Scorpion.png", count: 6, name: "Scorpion" },
  { srcName: "/Packs/Spiders.png", count: 6, name: "Spider" },
  { srcName: "/Packs/Bony.png", count: 9, name: "Bony" },
  { srcName: "/Packs/Black Wolf.png", count: 3, name: "BlackWolf" },
  { srcName: "/Packs/WhiteWolf.png", count: 4, name: "WhiteWolf" },
  { srcName: "/Packs/LittleSkelly.png", count: 3, name: "LittleSkelly" },
  { srcName: "/Packs/Skeletona.png", count: 4, name: "Skeletona" },
  { srcName: "/Packs/BlueDevil.png", count: 4, name: "BlueDevil" },
  { srcName: "/Packs/Badger.png", count: 3, name: "Badger" },
  { srcName: "/Packs/Fox.png", count: 4, name: "Fox" },
  { srcName: "/Packs/Flamy.png", count: 4, name: "Flamy" },
  { srcName: "/Packs/GreenPuffer.png", count: 4, name: "GreenPuffer" },
  { srcName: "/Packs/GreenSkelly.png", count: 3, name: "GreenSkelly" },
  { srcName: "/Packs/GreenZombie.png", count: 3, name: "GreenZombie" },
  { srcName: "/Packs/Bat.png", count: 3, name: "Bat" },
  { srcName: "/Packs/Lizzie.png", count: 3, name: "Lizzy" },
  { srcName: "/Packs/Ogre.png", count: 4, name: "Ogre" },
  { srcName: "/Packs/ColoredDevil.png", count: 3, name: "ColoredEvil" },
  { srcName: "/Packs/Skelegoat.png", count: 3, name: "SkeleGoat" },
  { srcName: "/Packs/IceBeast.png", count: 4, name: "IceBeast" },
  { srcName: "/Packs/RedDragon.png", count: 3, name: "RedDragon" },
  { srcName: "/Packs/JadeBat.png", count: 3, name: "JadeBat" },
  { srcName: "/Packs/RedEye.png", count: 3, name: "RedEye" },
  { srcName: "/Packs/Blacky.png", count: 3, name: "Blacky" },
  { srcName: "/Packs/Whitey.png", count: 3, name: "Whitey" },
  { srcName: "/Packs/BrownDragon.png", count: 4, name: "BrownDragon" },
  { srcName: "/Packs/Hellrat.png", count: 8, name: "HellRat" },
  { srcName: "/Packs/BeastKid.png", count: 3, name: "BeastKid" },
  { srcName: "/Packs/GreenSpider.png", count: 3, name: "GreenSpider" }
];
var LoadRotated = [];
var LoadExtWasm = [];
var LoadAudio = [
  { srcName: "Explosion1.mp3", name: "Explosion" },
  { srcName: "Failed magic.mp3", name: "MagicFail" },
  { srcName: "Cast.mp3", name: "MagicCast" },
  { srcName: "Power up.mp3", name: "PowerUp" },
  { srcName: "Level up.mp3", name: "LevelUp" },
  { srcName: "Pick up gold.mp3", name: "Pick" },
  { srcName: "Evil laughter.mp3", name: "EvilLaughter" },
  { srcName: "Chest.mp3", name: "Chest" },
  { srcName: "Scroll.mp3", name: "Scroll" },
  { srcName: "Potion.mp3", name: "Potion" },
  { srcName: "Chirp.mp3", name: "Chirp" },
  { srcName: "OpenGate.mp3", name: "OpenGate" },
  { srcName: "Swallow.mp3", name: "Swallow" },
  { srcName: "Keys.mp3", name: "Keys" },
  { srcName: "UpStairs.mp3", name: "UpStairs" },
  { srcName: "DownStairs.mp3", name: "DownStairs" },
  { srcName: "UseScroll.mp3", name: "UseScroll" },
  { srcName: "fight.mp3", name: "Fight" },
  { srcName: "Temple.mp3", name: "Temple" },
  { srcName: "death.mp3", name: "Death" },
  { srcName: "ClosedDoor.mp3", name: "ClosedDoor" },
  { srcName: "Look Me In The Eye, Demon - LaughingSkull.mp3", name: "Title" }
];
var LoadFonts = [
  { srcName: "ArcadeClassic.ttf", name: "Arcade" },
  { srcName: "emulogic.ttf", name: "Emulogic" },
  { srcName: "Adore64.ttf", name: "Adore" },
  { srcName: "adrip.ttf", name: "Drip" }
];


//////////////////////////////////////////////////////////////////////////
const FORM_WEDGE = {
  HERO: `
    <img id = 'form_pic1'/>
    <hr>
    <span>Available points: <span id = 'hero_points'></span></span>
    <hr>
    <br/>
    <img id = 'pic_sword'/><span>Sword:&nbsp&nbsp&nbsp<span id='hero_sword'></span></span>
    <input type = 'button' value = 'Sword' id = "form_inc_weapon" class = 'form skill'/>
    <br/>
    <img id = 'pic_shield'/><span>Shield:&nbsp&nbsp<span id='hero_shield'></span></span>
    <input type = 'button' value = 'Shield' id = "form_inc_armor" class = 'form skill'/>
    <br/>
    <img id = 'pic_agility'/><span>Agility: <span id='hero_agility'></span></span>
    <input type = 'button' value = 'Agility' id = "form_inc_agility" class = 'form skill'/>
    <br/>
    <img id = 'pic_magic'/><span>Magic:&nbsp&nbsp&nbsp<span id='hero_magic'></span></span>
    <input type = 'button' value = 'Magic' id = "form_inc_magic" class = 'form skill'/>
    <br/>
    <input type = 'button' value = 'Done' id = "form_done" class = 'form' style='margin: 24px'/>
  `,
  hero: function () {
    $(SPRITE.Knight_front_0).replaceAll("#form_pic1");
    $(SPRITE.Sword)
      .replaceAll("#pic_sword")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Shield)
      .replaceAll("#pic_shield")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Agility)
      .replaceAll("#pic_agility")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Magic)
      .replaceAll("#pic_magic")
      .css({ width: "16px", height: "16px" });
    $(".skill").on("click", GAME.CLICK.manageCharacter);
    $("#form_done").on("click", GAME.charDone);
  },
  TEMPLE: `
    <img id = 'form_pic1'/>
    <input type = 'button' value = 'Sacrifice 1000 gold' id = "form_sacrifice_gold" class = 'form' style='margin: 24px'/>
    <span style = 'color: #CFB53B'>Gold: <span id = 'hero_gold' style = 'color: #CFB53B'></span></span>
    <hr>
    <span>Available points: <span id = 'hero_points'></span></span>
    <hr>
    <br/>
    <img id = 'pic_heart'/><span>Health:&nbsp&nbsp<span id='hero_vitality'></span></span>
    <input type = 'button' value = 'Health' id = "form_inc_maxHealth" class = 'form skill'/>
    <br/>
    <img id = 'pic_mana'/><span>Mana:&nbsp&nbsp&nbsp&nbsp<span id='hero_mana'></span></span>
    <input type = 'button' value = 'Mana' id = "form_inc_maxMana" class = 'form skill'/>
    <br/>
    <img id = 'pic_sword'/><span>Sword:&nbsp&nbsp&nbsp<span id='hero_sword'></span></span>
    <input type = 'button' value = 'Sword' id = "form_inc_weapon" class = 'form skill'/>
    <br/>
    <img id = 'pic_shield'/><span>Shield:&nbsp&nbsp<span id='hero_shield'></span></span>
    <input type = 'button' value = 'Shield' id = "form_inc_armor" class = 'form skill'/>
    <br/>
    <img id = 'pic_agility'/><span>Agility: <span id='hero_agility'></span></span>
    <input type = 'button' value = 'Agility' id = "form_inc_agility" class = 'form skill'/>
    <br/>
    <img id = 'pic_magic'/><span>Magic:&nbsp&nbsp&nbsp<span id='hero_magic'></span></span>
    <input type = 'button' value = 'Magic' id = "form_inc_magic" class = 'form skill'/>
    <br/>
    <input type = 'button' value = 'Leave Temple' id = "form_leavetemple" class = 'form' style='margin: 24px'/>
  `,
  temple: function () {
    $(SPRITE.Knight_front_0)
      .replaceAll("#form_pic1")
      .css({ position: "relative", top: "16px", left: "0px" });
    $("#form_sacrifice_gold").on("click", GAME.CLICK.sacrificeGold);
    $(SPRITE.Heart)
      .replaceAll("#pic_heart")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Mana)
      .replaceAll("#pic_mana")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Sword)
      .replaceAll("#pic_sword")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Shield)
      .replaceAll("#pic_shield")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Agility)
      .replaceAll("#pic_agility")
      .css({ width: "16px", height: "16px" });
    $(SPRITE.Magic)
      .replaceAll("#pic_magic")
      .css({ width: "16px", height: "16px" });
    $(".skill").on("click", GAME.CLICK.manageTemple);
    $("#form_leavetemple").on("click", GAME.leaveTemple);
  },
  FIGHT: `
    <div class='fightWindow'>
      <p id ="fight_Hero_name"></p>
      <img id = 'form_pic1'/>
      <hr>
      <p class = 'attr'>Sword: <span id='hero_sword'></span></p>
      <p class = 'attr'>Shield:&nbsp <span id='hero_shield'></span></p>
      <p class = 'attr'>Agility: <span id='hero_agility'></span></p>
      <p class = 'attr'>Health: </p>
      <div id = "hero_health" class="healthbar"></div>
      <hr>
    </div>
    <div class='fightWindow'>
      <p id = 'monsterName'>Monster</p>
      <img id = 'form_pic2'/>
      <hr class = 'rightAttr'>
      <p class = 'attr rightAttr'>Attack: <span id = "enemy_weapon"></span></p>
      <p class = 'attr rightAttr'>Armor: <span id = "enemy_armor"></span></p>
      <p class = 'attr rightAttr'>Agility: <span id = "enemy_agility"></span></p>
      <p class = 'attr rightAttr'>Health: </p>
      <div id = "enemy_health" class="healthbar rightAttr"></div>
      <hr class = 'rightAttr'>
    </div>
    <div id ="scrollPanel">
      <input type="image" id = "redPotion" src="" title = "Drink health potion"/>
      <span class = "scroll_counter" id = "count_redPotion">#</span>
      <input class="scroll" type="image" id = "SCR_BoostWeapon" src="" title = "Increase your sword skill"/>
      <span class = "scroll_counter" id = "count_BoostWeapon">#</span>
      <input class="scroll" type="image" id = "SCR_BoostArmor" src="" title = "Increase your armor"/>
      <span class = "scroll_counter" id = "count_BoostArmor">#</span>
      <input class="scroll" type="image" id = "SCR_DestroyWeapon" src="" title = "Destroy your enemy's weapon"/>
      <span class = "scroll_counter" id = "count_DestroyWeapon">#</span>
      <input class="scroll" type="image" id = "SCR_DestroyArmor" src="" title = "Destroy your enemy's armor"/>
      <span class = "scroll_counter" id = "count_DestroyArmor">#</span>
      <input class="scroll" type="image" id = "SCR_HalfLife" src="" title = "Halve your enemy's health"/>
      <span class = "scroll_counter" id = "count_HalfLife">#</span>      

    </div>
    <hr>
    <div id = "Console" style = "overflow-y: auto; height: 200px"></div>
    <hr>
    <div id = "fight_buttons" style="color: #888">
      <input type = 'button' value = 'Make Turn' id = "form_make_turn" class = 'form' style='margin: 8px' title='Click to make next turn'/>
      <input type = 'button' value = 'Flee' id = "form_flee" class = 'form' style='margin: 8px' title='Flee or die trying'/>
      <input type = 'checkbox' value = 'Quick resolve' id = "form_quick_resolve" class = 'form' style='margin: 8px; font-size: 14px' title="Don't interfere, just let it go"./>Quick resolve
      <input type = 'button' value = 'Continue' id = "form_continue" class = 'form' style='margin: 8px' disabled='true' title='Continue the adventure'/>
    </div>
  `,
  fight: function (enemy) {
    $("#fight_Hero_name").html(HERO.name);
    $(".fightWindow").css({ width: `${INI.FIGHT_PANEL_WIDTH / 2}px` });
    $("#monsterName").html(enemy.title);
    let HeroSprite = SPRITE.Knight_front_0;
    $(HeroSprite)
      .replaceAll("#form_pic1")
      .css({
        position: "relative",
        top: `2px`,
        left: `${(INI.FIGHT_PANEL_WIDTH / 2 - HeroSprite.width) / 2}px`
      });
    let enemySprite =
      SPRITE[enemy.actor.class + "_front_0"] || SPRITE[enemy.actor.class];
    let corr = Math.floor((48 - enemySprite.height) / 2);
    $(enemySprite)
      .replaceAll("#form_pic2")
      .css({
        position: "relative",
        top: `${corr + 2}px`,
        left: `${(INI.FIGHT_PANEL_WIDTH / 2 - enemySprite.width) / 2}px`
      });
    $(".rightAttr").css({ position: "relative", top: `${2 * corr}px` });
    ENGINE.addCanvas("hero_health", INI.FIGHT_PANEL_WIDTH / 2 - 10, 20);
    ENGINE.addCanvas("enemy_health", INI.FIGHT_PANEL_WIDTH / 2 - 10, 20);
    $("#SCR_BoostWeapon").attr("src", SPRITE.SCR_BoostWeapon.src);
    $("#SCR_BoostArmor").attr("src", SPRITE.SCR_BoostArmor.src);
    $("#SCR_DestroyWeapon").attr("src", SPRITE.SCR_DestroyWeapon.src);
    $("#SCR_DestroyArmor").attr("src", SPRITE.SCR_DestroyArmor.src);
    $("#SCR_HalfLife").attr("src", SPRITE.SCR_HalfLife.src);
    $("#redPotion").attr("src", SPRITE.RedPotion.src);
    $("#form_make_turn").on("click", GAME.turn);
    $("#form_continue").on("click", GAME.endFight);
    $("#redPotion").on("click", GAME.CLICK.usePotion);
    $(".scroll").on("click", GAME.CLICK.useScroll);
    $("#form_flee").on("click", GAME.fleeFight);
  }
};
