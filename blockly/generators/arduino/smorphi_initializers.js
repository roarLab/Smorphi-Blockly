/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for the logic blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.smorphi_initializers');

goog.require('Blockly.Arduino');

Blockly.Arduino['initialize_smorphi'] = function(block) {
  /**
 * Code generator to create if/if else/else statement.
 * Arduino code: loop { if (X)/else if ()/else { X } }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
  var smorphiName = 'my_robot';
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.addInclude('smorphi', '#include <smorphi.h>');
  Blockly.Arduino.addDeclaration('smorphi_', 'Smorphi ' + smorphiName + ';');
  //Blockly.Arduino.addDeclaration('smorphi_1', 'String last_action = "";');
  Blockly.Arduino.addSetup('smorphi_', 'Serial.begin(115200);');
  Blockly.Arduino.addSetup('smorphi_1', 'my_robot.BeginSmorphi();');
  var code = '';
  return code;
};
Blockly.Arduino['initialize_bluetooth'] = function(block) {
  /**
 * Code generator to create if/if else/else statement.
 * Arduino code: loop { if (X)/else if ()/else { X } }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
  var BtName = 'SerialBT';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.addInclude('bluetooth', '#include "BluetoothSerial.h"');
  Blockly.Arduino.addInclude('esp_bt', '#include "esp_bt_main.h"');
  Blockly.Arduino.addInclude('esp_gap_bt', '#include "esp_gap_bt_api.h"');
  Blockly.Arduino.addInclude('esp_bt_device', '#include "esp_bt_device.h"');
  Blockly.Arduino.addInclude('if', '#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)');
  Blockly.Arduino.addInclude('error', '#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it');
  Blockly.Arduino.addInclude('endif', '#endif');
  Blockly.Arduino.addDeclaration('bt_', 'BluetoothSerial ' + BtName + ';');
  //Blockly.Arduino.addDeclaration('smorphi_1', 'String last_action = "";');
  Blockly.Arduino.addSetup('bt_', 'SerialBT.begin('+dropdown_name+');');
  Blockly.Arduino.addSetup('bt_1', 'Wire.begin(); ');
  var code = '';
  return code;
};

Blockly.Arduino['initialize_pixycam'] = function(block) {
  /**
 * Code generator to create if/if else/else statement.
 * Arduino code: loop { if (X)/else if ()/else { X } }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
  var pixyName = 'pixy';
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.addInclude('pixy', '#include <Pixy2ICSP_ESP32.h>');
  Blockly.Arduino.addDeclaration('pixy_', 'Pixy2ICSP_ESP32 ' + pixyName + ';');
  Blockly.Arduino.addDeclaration('smorphi_1', 'int color_signature;');
  //Blockly.Arduino.addSetup('pixy_', 'Serial.begin(115200);');
  Blockly.Arduino.addSetup('pixy_1', 'pixy.init();');
  var code = 'pixy.ccc.getBlocks();\n'+ 'if (pixy.ccc.numBlocks){\n'+'for (int i=0; i<pixy.ccc.numBlocks; i++){\n'+
      'pixy.ccc.blocks[i].print();\n'+'color_signature = pixy.ccc.blocks[i].m_signature;\n}\n}\n';
  return code;
};

Blockly.Arduino['initialize_temp_sensors'] = function(block) {
  /**
 * Code generator to create if/if else/else statement.
 * Arduino code: loop { if (X)/else if ()/else { X } }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
  //var pixyName = 'pixy';
  // TODO: Assemble JavaScript into code variable.
  Blockly.Arduino.addInclude('pixy', '#include <OneWire.h>');
  Blockly.Arduino.addInclude('pixy', '#include <DallasTemperature.h>');
  Blockly.Arduino.addDeclaration('temp_', '#define ONE_WIRE_BUS_16');
  Blockly.Arduino.addDeclaration('temp_1', 'OneWire oneWire(ONE_WIRE_BUS);');
  Blockly.Arduino.addDeclaration('temp_2', 'DallasTemperature tempsensors(&oneWire);');
  //Blockly.Arduino.addSetup('pixy_', 'Serial.begin(115200);');
  Blockly.Arduino.addSetup('temp_1', 'tempsensors.begin();');
  var code = 'tempsensors.requestTemperatures();\n';
  return code;
};


Blockly.Arduino['initialize_sensors'] = function(block) {
  var statements_initialize_sensors = Blockly.Arduino.statementToCode(block, 'Initialize_IR_sensors');
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.addDeclaration( 'left_ir','int'+' left_sensor_status;');
  Blockly.Arduino.addDeclaration( 'right_ir','int'+' right_sensor_status;');
  Blockly.Arduino.addDeclaration( 'front_ir','int'+' front_sensor_status;');
  Blockly.Arduino.addDeclaration( 'rear_ir','int'+' rear_sensor_status;');
  var code = statements_initialize_sensors;//Blockly.Arduino.valueToCode(block, 'Initialize_sensors', Blockly.Arduino.ORDER_ATOMIC);
  return code;
};
/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
// Blockly.Arduino['sensor_name_'] = function(block) {
//   var dropdown_ir_sensor = block.getFieldValue('Ir-Sensor');
//   // TODO: Assemble Arduino into code variable.
//   Blockly.Arduino.addDeclaration( dropdown_ir_sensor,'int'+' '+ dropdown_ir_sensor +';');
//   code ='';
//   return code;
// };
// Blockly.Arduino['sensor_name'] = function(block) {
//   var dropdown_module_no_ = block.getFieldValue('Module no:');
//   var value_module_number = Blockly.Arduino.valueToCode(block, 'Module_number', Blockly.Arduino.ORDER_ATOMIC);
//   var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
//   // TODO: Assemble Arduino into code variable.
//   Blockly.Arduino.addDeclaration( dropdown_module_no_,'int'+' '+ dropdown_module_no_ +';');
//   var code = 'int '+ dropdown_module_no_+ '= my_robot.module'+value_module_number+'_sensor_status('+value_name+');';
//   return code;
// };
Blockly.Arduino['number_input'] = function(block) {
  var text_number = block.getFieldValue('number');
  // TODO: Assemble Arduino into code variable.
  var code = text_number;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
Blockly.Arduino['new_ir'] = function(block) {
  var text_sensor_name = block.getFieldValue('sensor_name');
  var text_module_num = block.getFieldValue('module_num');
  var text_status_num = block.getFieldValue('status_num');
  // TODO: Assemble Arduino into code variable.
  //Blockly.Arduino.addDeclaration( text_module_num,'int'+' left_sensor_status;');
  //var state = 'int left_ir';
  var code = 'int '+text_sensor_name+' = my_robot.module'+text_module_num+'_sensor_status('+text_status_num+');\n';
  return code;
};
Blockly.Arduino['left_ir'] = function(block) {
  var text_module_num = block.getFieldValue('module_num');
  var text_status_num = block.getFieldValue('status_num');
  // TODO: Assemble Arduino into code variable.
  //Blockly.Arduino.addDeclaration( text_module_num,'int'+' left_sensor_status;');
  //var state = 'int left_ir';
  var code = 'int left_sensor_status = my_robot.module'+text_module_num+'_sensor_status('+text_status_num+');\n';
  return code;
};
Blockly.Arduino['right_ir'] = function(block) {
  var text_module_num = block.getFieldValue('module_num');
  var text_status_num = block.getFieldValue('status_num');
  // TODO: Assemble Arduino into code variable.
  //Blockly.Arduino.addDeclaration( text_module_num,'int'+' right_sensor_status;');
  var code = 'int right_sensor_status = my_robot.module'+text_module_num+'_sensor_status('+text_status_num+');\n';
  return code;
};
Blockly.Arduino['front_ir'] = function(block) {
  var text_module_num = block.getFieldValue('module_num');
  var text_status_num = block.getFieldValue('status_num');
  // TODO: Assemble Arduino into code variable.
 // Blockly.Arduino.addDeclaration( text_module_num,'int'+' front_sensor_status;');
  var code = 'int front_sensor_status = my_robot.module'+text_module_num+'_sensor_status('+text_status_num+');\n';
  return code;
};
Blockly.Arduino['rear_ir'] = function(block) {
  var text_module_num = block.getFieldValue('module_num');
  var text_status_num = block.getFieldValue('status_num');
  // TODO: Assemble Arduino into code variable.
  //Blockly.Arduino.addDeclaration( text_module_num,'int'+' rear_sensor_status;');
  var code = 'int rear_sensor_status = my_robot.module'+text_module_num+'_sensor_status('+text_status_num+');\n';
  return code;
};

