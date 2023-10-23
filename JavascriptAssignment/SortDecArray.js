function sortDecending(array){
    let size = array.length;
    let swapped;

    do {
        swapped = false;
        for(let i=0; i<size-1; i++){
            if(array[i] < array[i+1]){

                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);

    return array;
}

let numbers = [5, 2, 9, 1, 5, 6];
let sortedArray = sortDecending(numbers);
console.log("Sorted Array in Decending Order: "+ sortedArray.join(', '));