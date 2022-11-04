/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.smorphi_action');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.Events');


/**
 * Common HSV hue for all blocks in this category.
 */
 Blockly.Blocks['robot_motion'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["Move_Forward", "MoveForward"], ["Move_Backward", "MoveBackward"], ["Move_Right", "MoveRight"], ["Move_Left", "MoveLeft"], ["Rotate_Right", "CenterPivotRight"], ["Rotate_Left", "CenterPivotLeft"], ["Stop", "stopSmorphi"]]), "NAME");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['robot_shape'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["I_shape", "I"], ["O_shape", "O"], ["L_shape", "L"], ["J_shape", "J"], ["T_shape", "T"], ["S_shape", "S"], ["Z_shape", "Z"]]), "NAME");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['sm_reset'] = {
  init: function() {
    this.appendValueInput()
        .appendField(new Blockly.FieldDropdown([["sm_resetM1", "sm_reset_M1"], ["sm_resetM2", "sm_reset_M2"], ["sm_resetM3", "sm_reset_M3"], ["sm_resetM4", "sm_reset_M4"]]), "NAME");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks.smorphi_action.HUE = 330;

Blockly.Blocks['motion_set_type'] = {
  /**
   * Block for variable casting.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
    this.setColour(Blockly.Blocks.smorphi_action.HUE);
    this.appendValueInput('VARIABLE_SETTYPE_INPUT');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_VAR_AS)
        .appendField(new Blockly.FieldDropdown(
                         Blockly.Types.getValidTypeArray()),
                     'VARIABLE_SETTYPE_TYPE');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ARD_VAR_AS_TIP);
  },
  /**
   * Assigns a type to the block based on the selected type to cast.
   * @return {!string} Blockly type for this block configuration.
   * @this Blockly.Block
   */
  getBlockType: function() {
    var blocklyTypeKey = this.getFieldValue('VARIABLE_SETTYPE_TYPE');
    return Blockly.Types[blocklyTypeKey];
  }
};

// Blockly.Blocks['forward_motion'] = {
//   init: function() {
//     this.appendValueInput("NAME")
//         .setCheck("Number")
//         .appendField("Move_Forward");
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(20);
//     this.setTooltip('');
//     this.setHelpUrl('http://www.example.com/');
//   }
// };
Blockly.Blocks.smorphi_action.HUE = 140;

Blockly.Blocks['smorphi_time_delay'] = {
  /**
   * Delay block definition
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/Delay');
    this.setColour(Blockly.Blocks.smorphi_action.HUE);
    this.appendValueInput('DELAY_TIME_MILI')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_TIME_DELAY);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_TIME_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_TIME_DELAY_TIP);
  }
};

/*
Blockly.Blocks['backward_motion'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Move_Backward");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['right_motion'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Move_Right");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['left_motion'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Move_Left");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['pivot_left'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Rotate_Left");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['pivot_right'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Pivot_Right");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['stop_motion'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Stop");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

*/






