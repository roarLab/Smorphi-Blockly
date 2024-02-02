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
goog.provide('Blockly.Blocks.smorphi_variables');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/**
 * Common HSV hue for all blocks in this category.
 */
 Blockly.Blocks['serialbt_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BluetoothSerial.available");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['serialbt_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BluetoothSerial.read");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['temp_sensor_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Temp_Sensor_State");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
 Blockly.Blocks['right_sensor_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Right_IR_State");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['left_sensor_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Left_IR_State");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['front_sensor_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Front_IR_State");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['rear_sensor_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rear_IR_State");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};Blockly.Blocks['shape_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Shape_State");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['color_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color_State");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
