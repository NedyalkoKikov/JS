/**
 * Created by inktech.n.kikov on 26-Jun-16.
 */
function Arr() {
    let arr = [100,200,5,300];
    arr.push(55);
    
    arr.sort((a,b)=>a-b);
    console.log(arr);
}
function descendingSort() {
    let arr = [100,200,5,300];
    arr.push(43);
    arr.push(new Date())
    arr.sort((a,b)=>b-a);
    console.log(arr);
}
Arr();
descendingSort();