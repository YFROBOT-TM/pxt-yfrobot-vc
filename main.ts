/** 
 * @file YFVC
 * @brief YFROBOT Offline speech recognition module makecode Package.
 * @n This is a MakeCode graphics programming extension for YFROBOT Offline speech recognition module.
 * 
 * @copyright    YFROBOT,2023
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](yfrobot@qq.com)
 * @date  2023-11-30
*/

//% color="#45b787" weight=7 icon="\uf12e"
namespace YFVC {

    /**
     * Init serial.
     * @param tx the TX pin for YFVC (no work), eg: DigitalPin.P1 
     * @param rx the RX pin for YFVC, eg: DigitalPin.P0
     */
    //% blockId="YFVC_create"  weight=100 blockGap=8
    //% block="Init serial redirect to TX %tx| RX %rx at baud rate 9600"
    //% inlineInputMode=inline
    export function initSerial(tx: DigitalPin, rx: DigitalPin): void {
        serial.redirect( tx, rx, BaudRate.BaudRate9600)
    }

    /**
     * get the data from the speech recognition module.
     */
    //% blockID="YFVC_get_data" weight=90 blockGap=15
    //% block="get speech recognition module"
    //% inlineInputMode=inline
    export function readData(): number {
        let list = 1;
        let text_list: Buffer = null;
        text_list = serial.readBuffer(5);
        list = text_list[1]
        if(list != 1){
            return list;
        } else 
            return 1;
    }
}
