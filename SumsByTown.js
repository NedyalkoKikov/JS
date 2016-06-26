/**
 * Created by inktech.n.kikov on 26-Jun-16.
 */
function calcSum(arr) {
    let objects = arr.map(JSON.parse);
    let sums = {};
    for(let obj of objects){
        sums[obj.town] = sums[obj.town] || 0;
        sums[obj.town] += obj.income;
    }
    let towns = Object.keys(sums);
    towns.sort();
    for(let t of towns){
        console.log(`${t} -> ${sums[t]}`);
    }
}
calcSum([
    '{"town":"Sofia","income":200}',
    '{"town":"Varna","income":50}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}',
]);