/**
 * Created by inktech.n.kikov on 26-Jun-16.
 */
function arrStrings() {
    let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    console.log(weekDays);
    for(let week = 0;week < weekDays.length;week++){
        console.log("today is" + " " + weekDays[week]);
    }
}
arrStrings();