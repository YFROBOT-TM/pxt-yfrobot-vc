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
     * @param tx the TX pin for YFVC (no work), eg: SerialPin.P1 
     * @param rx the RX pin for YFVC, eg: SerialPin.P0
     */
    //% blockId="YFVC_create"  weight=100 blockGap=8
    //% block="Init serial redirect to TX %tx| RX %rx at baud rate 9600"
    //% tx.fieldEditor="gridpicker" tx.fieldOptions.columns=3
    //% rx.fieldEditor="gridpicker" rx.fieldOptions.columns=3
    //% inlineInputMode=inline
    export function initSerial(tx: SerialPin, rx: SerialPin): void {
        serial.redirect( tx, rx, BaudRate.BaudRate9600);
    }

    /**
     * get the data from the speech recognition module.
     */
    //% blockID="YFVC_get_data" weight=90 blockGap=15
    //% block="get speech recognition module"
    //% inlineInputMode=inline
    export function readData(): number {
        let data = 1;
        let data_list: Buffer = null;
        data_list = serial.readBuffer(5);
        data = data_list[1];
        if(data != 1){
            return data;
        } else 
            return 1;
    }
}
