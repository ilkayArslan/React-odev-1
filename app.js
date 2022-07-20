import getData from "./myModule.js";

function get_Together(){
    getData(1)
    .then(e=> console.log(e));
}
get_Together();
