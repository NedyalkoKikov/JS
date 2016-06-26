/**
 * Created by inktech.n.kikov on 22-Jun-16.
 */
function blockScope() {
    let x = 5;
    for(let x = 10;x < 30;x++){
        console.log(x);
    }
    console.log(x);
    x = 10;
    console.log(x);
    x = 8;
    console.log(x);
}
blockScope()