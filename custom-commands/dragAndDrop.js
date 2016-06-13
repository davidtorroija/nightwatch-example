/**
 * Simple example of custom command. This command will
 * check if there's a onbeforeunload handler in the target web page
 * and return the result
 */
/* global window */

module.exports.command = function(source, dest, callback) {
  var self = this;

  this.moveToElement(source,  10,  10)
  // .pause(800)
  // .moveTo(1,  1)
  .mouseButtonDown(0)
  .pause(500)
  // .moveTo('div.widget-container.ui-sortable',10,  1)
  .moveToElement(dest,  10,  10)
  // .pause(800)
  .mouseButtonUp(0)

  return this;
};

