testNum = (num) => {
  new Promise((resolve, reject) => {
    if(typeof num === 'number') {
      setTimeout(() => { resolve(num); }, 1000);
    } else {
      setTimeout(() => { reject(num); }, 1000);
    }
  })
  .then((num) => num >= 10 ? console.log(`${num} is greater than or equal to 10`)
                           : console.log(`${num} is less 10`))
  .catch((error) => {console.log(`${num} is not a number!`)});
}

testNum(10);


const arr1 = ['birds', 'dogs', 'leopard'];

makeAllCaps = (array) => {
  new Promise((resolve, reject) => {
    const stringCheck = array.map(element => typeof element !== 'string')
    if(!stringCheck.includes(true)) {
      const upArray = array.map(el => typeof el === 'string' && el.toUpperCase())
      setTimeout(() => { resolve(upArray); }, 1000);
    } else {
      setTimeout(() => { reject(array); }, 1000);
    }
  })
  .then(newArray => console.log(newArray))
  .catch(error => console.log(`${array} one of these things is not like the others!`))
}

makeAllCaps(arr1)

const arr2 = ['leopard', 'dogs', 134, 'birds'];

sortWords = (array) => {
  new Promise((resolve, reject) => {
    const stringCheck = array.map(element => typeof element !== 'string')
    if(!stringCheck.includes(true)) {
      const upArray = array.sort((a,b) => {
        return b < a;
      })
      setTimeout(() => { resolve(upArray); }, 1000);
    } else {
      setTimeout(() => { reject(array); }, 1000);
    }
  })
  .then(newArray => console.log(newArray))
  .catch(error => console.log(`${array} one of these things is not like the others!`))
}

sortWords(arr2);
