/*:
 * @plugindesc Skip Title if no saves; otherwise show Load screen. 
 * @author Jerry
 * @help This plugin does not provide plugin commands.
 * 



*/
(() => {
  const _start = Scene_Boot.prototype.start;
  Scene_Boot.prototype.start = function() {
    _start.call(this);

    if (DataManager.isAnySavefileExists()) {
      SceneManager.goto(Scene_Load);   // let players pick a save
    } else {
      DataManager.setupNewGame();      // fresh game
      SceneManager.goto(Scene_Map);
    }
  };
})();
// This plugin is released under the MIT License.