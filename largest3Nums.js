/**
 * Created by inktech.n.kikov on 27-Jun-16.
 */
function largest3nums(arr) {
let nums = arr.map(Number);
    let sorted = nums.sort((a,b) => b-a);
    let count = Math.min(3,arr.length);
    for(let n = 0;n < count;n++){
        console.log(sorted[n]);
    }
}
largest3nums(['10','20','55','50','30','5']);