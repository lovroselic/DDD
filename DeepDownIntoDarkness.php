<!doctype html>
<?php include_once $_SERVER['DOCUMENT_ROOT'] . '/Include/globals.php';?>
<?php include_once $GL_root . $GL_path . '/Include/session.php';?>
<html lang="<?php echo $_SESSION['lang']; ?>">

<head>
    <?php include_once $GL_root . $GL_path . '/Include/head_includes.php';?>
    <link href="/CSS/DDID.css" rel="stylesheet" type="text/css">
    <title>Deep Down Into The Darkness</title>
    <link rel="canonical" href="https://www.c00lsch00l.eu/Games/DeepDownIntoDarkness.php">
</head>

<body>
    <?php include_once $GL_root . $GL_path . '/Include/header.php';?>
    <div id="gameResolutionAlert" class="hide_extraLarge hide_large">
        <h3>Resolution too low alert!</h3>
        <p>You are trying to run this game on a device which has insufficient resolution to display the game properly.
            Just so you know ...</p>
    </div>

    <div id="preload" class="hidden"></div>
    <div class="container my-5 p-2 cool_page">
        <!-- CONTENT -->
        <div id="setup">
            <div id="load"></div>

            <div id="SC"></div>
            <h1 id="title" style="font-family: 'Arcade'"></h1>
            <p>Are you brave enough? To descent? To descent deep down into the darkness and claim the legendary
                treasure? Yes? Let's see about that ...</p>
            Hero's name: <input type="text" id="HeroName" value="HERO" maxlength="10" />

            <p id="buttons">
                <input type='button' id='pause' value='Pause Game [F4]' disabled="disabled">
                <input type='button' id='toggleHelp' value='Show/Hide Instructions'>
                <input type='button' id='toggleAbout' value='About'>
            </p>
            <div id="help" class="section">
                <fieldset>
                    <legend>
                        Instructions:
                    </legend>
                    <p><strong>Survival guide:</strong></p>
                    <p>'Train' your hero to adapt to his environmental challenges.</p>
                    <p>Running away is always a possibility.</p>
                    <p>Game will save a checkpoint whenever you descend the stairs to a new level for the first time.
                    </p>
                    <p></p>

                    <p><strong>KEYS:</strong></p>
                    <p>Use cursor keys to move.</p>
                    <p>CTRL ... cast magic.</p>
                    <p>H ... use healing potion</p>
                    <p>M ... use mana potion</p>
                    <p>A, D ... move scroll selection cursor</p>
                    <p>TAB ... level up</p>
                    <p>ENTER ... cast selected scroll</p>
                    <p>F4 ... pause/resume game</p>
                    <p><strong>SCROLLS:</strong></p>

                    <div class="container">
                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/Light.png" alt="Light" title="Light">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Magic lamp: inreased range of map revealing dungeon</p>
                            </div>
                        </div>


                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/DrainMana.png" alt="DrainMana"
                                    title="DrainMana">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Drain Mana: drains mana from all creatures in the area. Also yours!</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/Map.png" alt="Map" title="Map">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Map: reveals the location of the temple or other important areas</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/BoostWeapon.png" alt="BoostWeapon"
                                    title="BoostWeapon">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Increase the damage of your weapon for certain duration.</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/BoostArmor.png" alt="BoostArmor"
                                    title="BoostArmor">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Increase your armor for certain duration.</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/DestroyArmor.png" alt="DestroyArmor"
                                    title="DestroyArmor">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Decrease your opponent's armor in the certain range.</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/DestroyWeapon.png" alt="DestroyWeapon"
                                    title="DestroyWeapon">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Decrease the damage of your opponent's weapons in the certain range.
                                </p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/Cripple.png" alt="Cripple"
                                    title="Cripple">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Cripple: Decrease speed of the nearby monsters.</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/Invisibility.png" alt="Invisibility"
                                    title="Invisibility">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Invisibility: I will let you figure this one by yourself ...</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/MagicBoost.png" alt="Magic Boost"
                                    title="Magic Boost">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Magic Boost: boost your magic abilities for a while</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/Petrify.png" alt="Petrify"
                                    title="Petrify">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Petrify: petrifies all enemies in a certain range</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src=" https://www.c00lsch00l.eu/Games/AA/TeleportTemple.png"
                                    alt="Teleport to Temple" title="Teleport to Temple">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Teleport to the Temple: instant jump to the temple. Could also be on
                                    top
                                    of some
                                    scary monster ...</p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src=" https://www.c00lsch00l.eu/Games/AA/Luck.png" alt="Luck" title="Luck">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Hero's luck is temporarily increased. One of the game's mysteries.
                                </p>
                            </div>
                        </div>

                        <div class="row my-2">
                            <div class="col-1">
                                <image src="https://www.c00lsch00l.eu/Games/AA/HalfLife.png" alt="HalfLife"
                                    title="HalfLife">
                            </div>
                            <div class="col-10 mt-auto">
                                <p>Monster's life energy in the certain range is halved.</p>
                            </div>
                        </div>

                    </div>
                </fieldset>

            </div>
            <div id="about" class="section">
                <fieldset>
                    <legend>
                        About:
                    </legend>
                    <image src="/Images/SoF.png" alt="Sword of Fargoal" class="border border-dark p-1 m-2 float-start"
                        title="Sword of Fargoal">
                        <p> 'Deep Down Into the Darkness' was inspired by C64 classic <a
                                href="https://www.c64-wiki.com/wiki/Sword_of_Fargoal" target="_blank">Sword of
                                Fargoal</a> from 1983, which was itself influenced by 1980 Unix game <a
                                href="https://en.wikipedia.org/wiki/Rogue_(video_game)" target="_blank">Rogue</a>.</p>
                        <p>Features <a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
                                target="_blank">Dijkstra's</a> and <a
                                href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank">A*</a>
                            algorithms for path finding and my own algorithm for procedural dungeon generation.
                        </p>
                </fieldset>
            </div>

            <p class="version cb" id="version"></p>
            <!-- END CONTENT  -->
        </div>
    </div>
    <div class="container">
        <div id="game" class="winTrans"></div>
        <div id="bottom" class="cb" style="margin-top: 720px"></div>
        <div id="temp" class="hidden"></div>
        <div id="temp2" class="hidden"></div>
    </div>

    <?php include_once $GL_root . $GL_path . '/Include/footer.php';?>

    <script src="/JS/LIB/prototypeLIB_2_10.js" type="text/javascript"></script>
    <script src="/JS/LIB/score_1_04.js" type="text/javascript"></script>
    <script src="/JS/LIB/engine_2_40.js" type="text/javascript"></script>
    <script src="/Games/Assets/assets_DDID.js" type="text/javascript"></script>
    <script src="/JS/LIB/maze_2_71.js" type="text/javascript"></script>
    <script src="/Games/Assets/map_DDID.js" type="text/javascript"></script>
    <script src="/JS/LIB/SaveGame_1_01.js" type="text/javascript"></script>
    <script src="/Games/DeepDownIntoTheDarkness.js" type="text/javascript"></script>
</body>

</html>