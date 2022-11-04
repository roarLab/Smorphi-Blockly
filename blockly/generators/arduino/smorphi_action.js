/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for the logic blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.smorphi_action');

goog.require('Blockly.Arduino');

Blockly.Arduino['robot_motion'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'my_robot.'+dropdown_name+'('+value_name+');\n';
  return code;
};
Blockly.Arduino['robot_shape'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  //var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'my_robot.'+dropdown_name+'();\n';
  return code;
};
Blockly.Arduino['sm_reset'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'my_robot.'+dropdown_name+'();\n';
  return code;
};
Blockly.Arduino['motion_set_type'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

// Blockly.Arduino['forward_motion'] = function(block) {
//   var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
//   // TODO: Assemble Arduino into code variable.
//   var code = 'my_robot.MoveForward('+value_name+');';
//   return code;
// };

Blockly.Arduino['smorphi_time_delay'] = function(block) {
  var delayTime = Blockly.Arduino.valueToCode(
      block, 'DELAY_TIME_MILI', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'delay(' + delayTime + ');\n';
  return code;
};