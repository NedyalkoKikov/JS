/**
 * Created by inktech.n.kikov on 26-Jun-16.
 */
function push() {
   let list = [];
    list.push("pesho","gosho","stamat","unifrii");
    list.push("klqnko");
    list.push(22);
    list.unshift(20);
    
    console.log(list.join("-"));

}
push();