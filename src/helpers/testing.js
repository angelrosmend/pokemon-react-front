let names = [ "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie"]
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let imgs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10']

const convertArrayToObject = (array, key) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item
    }),
    {}
  );

let results = convertArrayToObject(names, 'id')


function createData( arr1, arr2, arr3){
let data = []
let i = 0;

while(i < arr1.length){
   data.push({id: arr1[i], name: arr2[i], img: arr3[i]})
   i++
 
}
return data
}

let resultData = createData(ids, names, imgs)
