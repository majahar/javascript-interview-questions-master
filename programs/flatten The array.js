
// flatten the array

function flatten (data){
    let newArr = [];
    data.forEach(val => {
        if(Array.isArray(val)){
            newArr.push(...flatten(val))
        }else{
            newArr.push(val)
        }
        })
return newArr;
}

console.log(flatten([1,2,[3,6,5,7,[1,7,8]],7,5]))