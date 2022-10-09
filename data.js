//const data = 'data'
//const data = () => {console.log('function data')}
/**/
let data = [
    {name: 'Array.at(index)',
    description:'takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.',
    example:    'const array1 = [5, 12, 8, 130, 44]; console.log(array1.at(3)) \/\/130'},
    {name: 'Array.concat(arrays)',
    description:'used to merge two or more arrays.  This method does not change the existing arrays, but instead returns a new array.',
    example:'const array3 = array1.concat(array2)'},
    {name: 'Array.prototype.entries()',
    description:'method returns a new Array Iterator object that contains the key/value pairs for each index in the array.',
    example:`const array1 = ['a', 'b', 'c']
    const iterator1 = array1.entries();
    console.log(iterator1.next().value);
    \/\/ expected output: Array [0, "a"]
    console.log(iterator1.next().value);
    \/\/ expected output: Array [1, "b"]`},
    {name: 'Array.prototype.every()',
    description:'method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
    example:    `const isBelowThreshold = (currentValue) => currentValue < 40;
    const array1 = [1, 30, 39, 29, 10, 13];
    console.log(array1.every(isBelowThreshold));
    \/\/ expected output: true`},
    {name: 'Array.prototype.fill()',
    description:'method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.',
    example:    `const array1 = [1, 2, 3, 4];
    // fill with 0 from position 2 until position 4
    console.log(array1.fill(0, 2, 4));
    // expected output: [1, 2, 0, 0]`},
    {name: 'Array.prototype.filter()',
    description:'method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.',
    example:    `const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);
    
    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]`},
    {name: 'Array.prototype.find()',
    description:'method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.',
    example:    `const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);
    
    console.log(found);
    // expected output: 12`},
    {name: 'Array.prototype.findIndex()',
    description:'method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.',
    example:    `const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;
    
    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3`},
    {name: 'Array.prototype.findLast()',
    description:'method returns the value of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.',
    example:    `const array1 = [5, 12, 50, 130, 44];

    const found = array1.findLast((element) => element > 45);
    
    console.log(found);
    // expected output: 130`},
    {name: 'Array.prototype.findLastIndex()',
    description:'method returns the index of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.',
    example:    `const array1 = [5, 12, 50, 130, 44];

    const isLargeNumber = (element) => element > 45;
    
    console.log(array1.findLastIndex(isLargeNumber));
    // expected output: 3  (of element with value: 130)`},
    {name: 'Array.prototype.flat()',
    description:'method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
    example: `const arr1 = [0, 1, 2, [3, 4]];

    console.log(arr1.flat());
    // expected output: [0, 1, 2, 3, 4]
    
    const arr2 = [0, 1, 2, [[[3, 4]]]];
    
    console.log(arr2.flat(2));
    // expected output: [0, 1, 2, [3, 4]]`   },
    {name: 'Array.prototype.flatMap()',
    description:'method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.',
    example: `const arr1 = [1, 2, [3], [4, 5], 6, []];

    const flattened = arr1.flatMap(num => num);
    
    console.log(flattened);
    // expected output: Array [1, 2, 3, 4, 5, 6]`   },
    {name: 'Array.prototype.forEach()',
    description:'method executes a provided function once for each array element.',
    example: `const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));
    
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"`   },
    {name: 'Array.from()',
    description:'static method creates a new, shallow-copied Array instance from an iterable or array-like object.',
    example: `console.log(Array.from('foo'));
    // expected output: Array ["f", "o", "o"]
    
    console.log(Array.from([1, 2, 3], x => x + x));
    // expected output: Array [2, 4, 6]`   },
    {name: 'Array.prototype.group()',
    description:`Experimental method groups the elements of the calling array according to the string values returned by a provided testing function. The returned object has separate properties for each group, containing arrays with the elements in the group.
    This method should be used when group names can be represented by strings. If you need to group elements using a key that is some arbitrary value, use Array.prototype.groupToMap() instead.`,
    example: ``   },
    {name: 'Array.prototype.includes()',
    description:'method determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
    example: `const array1 = [1, 2, 3];

    console.log(array1.includes(2));
    // expected output: true
    
    const pets = ['cat', 'dog', 'bat'];
    
    console.log(pets.includes('cat'));
    // expected output: true
    
    console.log(pets.includes('at'));
    // expected output: false`   },
    {name: 'Array.prototype.indexOf()',
    description:'method returns the first index at which a given element can be found in the array, or -1 if it is not present.',
    example: `const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));
    // expected output: 1
    
    // start from index 2
    console.log(beasts.indexOf('bison', 2));
    // expected output: 4
    
    console.log(beasts.indexOf('giraffe'));
    // expected output: -1`   },
    {name: 'Array.isArray()',
    description:'static method determines whether the passed value is an Array.',
    example: ``   },
    {name: 'Array.prototype.join()',
    description:'method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.',
    example: `const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"
    
    console.log(elements.join(''));
    // expected output: "FireAirWater"
    
    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"`   },
    {name: 'Array.prototype.keys()',
    description:'method returns a new Array Iterator object that contains the keys for each index in the array.',
    example: `const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys();
    
    for (const key of iterator) {
      console.log(key);
    }
    
    // expected output: 0
    // expected output: 1
    // expected output: 2`   },
    {name: 'Array.prototype.lastIndexOf()',
    description:'method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.',
    example: `const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    console.log(animals.lastIndexOf('Dodo'));
    // expected output: 3
    
    console.log(animals.lastIndexOf('Tiger'));
    // expected output: 1`   },
    {name: 'Array.prototype.map()',
    description:'method creates a new array populated with the results of calling a provided function on every element in the calling array.',
    example: `const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]`   },
    {name: 'Array.of()',
    description:'method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.',
    example: `Array.of(7); // [7]
    Array(7); // array of 7 empty slots
    
    Array.of(1, 2, 3); // [1, 2, 3]
    Array(1, 2, 3);    // [1, 2, 3]`   },
    {name: 'Array.prototype.pop()',
    description:'method removes the last element from an array and returns that element. This method changes the length of the array.',
    example: `const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    console.log(plants.pop());
    // expected output: "tomato"
    
    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
    
    plants.pop();
    
    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage"]`   },
    {name: 'Array.prototype.push()',
    description:'method adds one or more elements to the end of an array and returns the new length of the array.',
    example: `const animals = ['pigs', 'goats', 'sheep'];

    const count = animals.push('cows');
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]
    
    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]`   },
    {name: 'Array.prototype.reduce()',
    description:'method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.',
    example: `const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    
    console.log(sumWithInitial);
    // expected output: 10`   },
    {name: 'Array.prototype.reduceRight()',
    description:'method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.',
    example: `const array1 = [[0, 1], [2, 3], [4, 5]];

    const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
    
    console.log(result);
    // expected output: Array [4, 5, 2, 3, 0, 1]`   },
    {name: 'Array.prototype.reverse()',
    description:'method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.',
    example: `const array1 = ['one', 'two', 'three'];
    console.log('array1:', array1);
    // expected output: "array1:" Array ["one", "two", "three"]
    
    const reversed = array1.reverse();
    console.log('reversed:', reversed);
    // expected output: "reversed:" Array ["three", "two", "one"]
    
    // Careful: reverse is destructive -- it changes the original array.
    console.log('array1:', array1);
    // expected output: "array1:" Array ["three", "two", "one"]`   },
    {name: 'Array.prototype.shift()',
    description:'method removes the first element from an array and returns that removed element. This method changes the length of the array.',
    example: `const array1 = [1, 2, 3];

    const firstElement = array1.shift();
    
    console.log(array1);
    // expected output: Array [2, 3]
    
    console.log(firstElement);
    // expected output: 1
    `   },
    {name: 'Array.prototype.slice()',
    description:'method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.',
    example: `const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]
    
    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]
    
    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]
    
    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]
    
    console.log(animals.slice(2, -1));
    // expected output: Array ["camel", "duck"]
    
    console.log(animals.slice());
    // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]`   },
    {name: 'Array.prototype.some()',
    description:`method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.`,
    example: `const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element) => element % 2 === 0;
    
    console.log(array.some(even));
    // expected output: true`   },
    {name: 'Array.prototype.sort()',
    description:'method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.',
    example: `const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]
    
    const array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
    // expected output: Array [1, 100000, 21, 30, 4]`   },
    {name: 'Array.prototype.splice()',
    description:'method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().',
    example: `const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // inserts at index 1
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]
    
    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]
    `   },
    {name: 'Array.prototype.toLocaleString()',
    description:'method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").',
    example: `const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
    
    console.log(localeString);
    // expected output: "1,a,12/21/1997, 2:12:00 PM",
    // This assumes "en" locale and UTC timezone - your results may vary`   },
    {name: 'Array.prototype.toString()',
    description:'method returns a string representing the specified array and its elements.',
    example: `const array1 = [1, 2, 'a', '1a'];

    console.log(array1.toString());
    // expected output: "1,2,a,1a"`   },
    {name: 'Array.prototype.unshift()',
    description:'method adds one or more elements to the beginning of an array and returns the new length of the array.',
    example: `const array1 = [1, 2, 3];

    console.log(array1.unshift(4, 5));
    // expected output: 5
    
    console.log(array1);
    // expected output: Array [4, 5, 1, 2, 3]`   },
    {name: 'Array.prototype.values()',
    description:'method returns a new array iterator object that iterates the value of each index in the array.',
    example: `const array1 = ['a', 'b', 'c'];
    const iterator = array1.values();
    
    for (const value of iterator) {
      console.log(value);
    }
    
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"`   },
    {name: '',
    description:'',
    example: ``   },
    {name: '',
    description:'',
    example: ``   },
]
   


export default data
                               
/* "Array.at(index)"={ description:"takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.",
    example: },
    "Array.concat(arrays)":"used to merge two or more arrays.  This method does not change the existing arrays, but instead returns a new array."*/