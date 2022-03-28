
const array1 = ['a','b','c'];

function forEach(element) {array1.forEach(element)


console.log(element);

};



const array2 = [1, 4, 9, 16]

function map(map1) {array2.map


  console.log(map1)
}


function filter() {

  const words = ['Celtics', 'Ravens', 'LilGiants', 'Volunteers', 'Mountaineers', 'BadnewsBears'];

  const result = words.filter(word => word.length > 6);

  console.log(result);
}

function every() {

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1= [1,30, 39,29,10,13]

}

function some() {

  const even = (element) => element % 2 === 0;

  console.log(array.some(even));


}

// function majority() {





// }

// function once() {

// }

// function groupBy() {

// }

// function arrayToObject() {

}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
