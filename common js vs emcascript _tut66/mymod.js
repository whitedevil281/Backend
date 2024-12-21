export function print(e){//named export

    for (let i = 0; i < 5; i++) {
        console.log(e);
    }
}

export let  a = 5
export let b = 5
export let c = 5

let obj = {
    x:1,
    y:2
}
export default obj // default export