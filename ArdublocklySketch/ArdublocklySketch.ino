#include <smorphi.h>
#include <Pixy2I2C.h>

Smorphi my_robot;
Pixy2I2C pixy;
int color_signature;
int left_sensor_status;
int right_sensor_status;
int front_sensor_status;
int rear_sensor_status;

void setup() {
  Serial.begin(115200);
  my_robot.BeginSmorphi();
  pixy.init();
}

void loop() {
  pixy.ccc.getBlocks();
  if (pixy.ccc.numBlocks){
  for (i=0; i<pixy.ccc.numBlocks; i++){
  pixy.ccc.blocks[i].print();
  color_signature = pixy.ccc.blocks[i].m_signature;
  }
  }
    int right_sensor_status = my_robot.modulemodule_num_sensor_status(status_num);
  if ((color_signature) == (3)) {
  }


}