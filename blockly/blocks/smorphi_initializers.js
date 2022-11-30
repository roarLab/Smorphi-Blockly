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

goog.provide('Blockly.Blocks.smorphi_initializers');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.Events');


/**
 * Common HSV hue for all blocks in this category.
 */
 Blockly.Blocks['initialize_smorphi'] = {
    /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Initialize Smorphi");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};
Blockly.Blocks['initialize_bluetooth'] = {
  /**
 * Block for if/elseif/else condition.
 * @this Blockly.Block
 */
init: function() {
  this.setHelpUrl('http://www.example.com/');
  this.setColour(120);
  this.appendDummyInput()
  .appendField(new Blockly.FieldDropdown([["Initialize bluetooth- Smorphi2", "'smorphi2'"], ["Initialize bluetooth- Smorphi", "'smorphi'"]]), "NAME");
     // .appendField("Initialize Bluetooth");
  this.setPreviousStatement(true, "null");
  this.setNextStatement(true, "null");
  this.setTooltip('');
}
};
Blockly.Blocks['initialize_pixycam'] = {
  /**
 * Block for if/elseif/else condition.
 * @this Blockly.Block
 */
init: function() {
  this.setHelpUrl('http://www.example.com/');
  this.setColour(120);
  this.appendDummyInput()
      .appendField("Initialize PixyCam");
  this.setPreviousStatement(true, "null");
  this.setNextStatement(true, "null");
  this.setTooltip('');
}
};
Blockly.Blocks['initialize_temp_sensors'] = {
  /**
 * Block for if/elseif/else condition.
 * @this Blockly.Block
 */
init: function() {
  this.setHelpUrl('http://www.example.com/');
  this.setColour(120);
  this.appendDummyInput()
      .appendField("Initialize Temperature Sensor");
  this.setPreviousStatement(true, "null");
  this.setNextStatement(true, "null");
  this.setTooltip('');
}
};

Blockly.Blocks['initialize_sensors'] = {
  init: function() {
    this.appendStatementInput("Initialize_sensors")
        .setCheck("String")
        .appendField("Initialize_Sensors");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sensor_name_'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["front_IR", "front_sensor_status"], ["rear_IR", "rear_sensor_status"], ["left_IR", "left_sensor_status"], ["right_IR", "right_sensor_status"]]), "Ir-Sensor");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// Blockly.Blocks['sensor_name'] = {
//   init: function() {
//     this.appendValueInput("Module_number")
//         .setCheck("String")
//         .appendField(new Blockly.FieldDropdown([["Left_IR module no:", "left_sensor_status"], ["Rear_IR module no:", "rear_sensor_status"], ["Right_IR module no:", "right_sensor_status"], ["Front_IR module no:", "front_sensor_status"]]), "Module no:");
//     this.appendValueInput("NAME")
//         .setCheck("String")
//         .appendField("                    status no:");
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(120);
//     this.setTooltip('');
//     this.setHelpUrl('http://www.example.com/');
//   }
// };
Blockly.Blocks['number_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "number");
    this.setOutput(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['new_ir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("sensor_name"), "sensor_name")
        .appendField(new Blockly.FieldTextInput("module_num"), "module_num")
        .appendField(new Blockly.FieldTextInput("status_num"), "status_num");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['left_ir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Left_IR")
        .appendField(new Blockly.FieldTextInput("module_num"), "module_num")
        .appendField(new Blockly.FieldTextInput("status_num"), "status_num");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['right_ir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Right_IR")
        .appendField(new Blockly.FieldTextInput("module_num"), "module_num")
        .appendField(new Blockly.FieldTextInput("status_num"), "status_num");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['front_ir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Front_IR")
        .appendField(new Blockly.FieldTextInput("module_num"), "module_num")
        .appendField(new Blockly.FieldTextInput("status_num"), "status_num");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['rear_ir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rear_IR")
        .appendField(new Blockly.FieldTextInput("module_num"), "module_num")
        .appendField(new Blockly.FieldTextInput("status_num"), "status_num");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};