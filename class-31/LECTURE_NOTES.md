# Hashmaps
## Nomenclature
You will often hear about the same data structure referred to by several different names:
- Hashmap
- Dictionary (especially in Python-land)
  - Key ("definiendum")
  - Value ("definiens")
- Associative Array
  - In a traditional array, the indexes are integers, so the array can be thought of as a hashmap where the keys are integers. (It's actually quite a bit more complicate than this, but for our purposes we'll simplify it)
  - In an associative array or hashmap, the key can be anything.

## Differences between Hashmaps and Objects (in JS)
It is often the case that you'll see a Hashmap approximated in JS as an Object.

### Similarities
- They both have keys/values in pairs
- The value can be anything (number, string, another object, etc.)
- The key has to be unique
- They have basically the same operations:
  - Get a value by its key
  - Update a value by its key
  - Add or insert a key/value pair
  - Delete a key/value pair
(Gee, that looks an awful lot like CRUD!)

### Differences
JavaScript used not to have a built-in Hashmap data type, and for that reason, `Object` was used pretty indiscriminately to approximate it. In modern JS, there is a `Map` type that acts more like a traditional Hashmap.

Differences between `Object` and `Map`:
- There is a literal notation for `Object`: `{ key: value }`. There is no such literal notation for a `Map`: you have to use the constructor `new Map()`.
- An `Object` must have a key that is a `String` (or a `Symbol`, but we hardly ever see that used). The key in a `Map` can be anything (including objects or functions).
- A `Map` has a `size` property. To figure out the "size" or "length" of an `Object`, that is to say, how many items are in it, you have to determine that manually.
- You can iterate over a `Map`. In order to iterate over an `Object`, you have to get its keys into an array somehow (perhaps by using `Object.keys()`) and iterate over that array.
- The keys in a `Map` are ordered. So when you iterate over a `Map`, you get the keys in order of insertion. The keys of an `Object` are not ordered.*
  - Since ES2015, `Object` keys **are** ordered, but you can't count on that behavior since not every JS engine complies with this part of the ES2015 specification.
- `Object`s have prototypes, which means that they are not guaranteed to contain only the keys you put into them. It's possible that you can create an `Object` that has keys that collide with the keys you want to put into it. A `Map`, on the other hand, contains no keys by default, and only contains exactly what you put into it.
- `Map`s perform better with frequent addition/removal of key/value pairs than `Objects` do.

## Using a `Map` in JavaScript
```javascript
// Since there is no literal Map notation, you have to use the "new" constructor.
const myMap = new Map();

// Maps have a size: note, this is not a function, but rather a property of the Map
myMap.size; // returns 0

// To add a key/value pair to a Map, use .set(key, value)
myMap.set('fruitTypes', ['banana', 'orange', 'cherry']);
// Map(1) { 'fruitTypes' => [ 'banana', 'orange', 'cherry' ] }

// Keys can be any type. Here we insert a key with a type of Object:
const myObj = { a: 'b' };
myMap.set(myObj, 'value');
// Map(2) {
//   'fruitTypes' => [ 'banana', 'orange', 'cherry' ],
//   { a: 'b' } => 'value'
// }

// To retrieve a value by its key, use .get(key)
myMap.get('fruitTypes');
// [ 'banana', 'orange', 'cherry' ]
myMap.get(myObj);
// 'value'

// But if we pass a literal object to .get, we won't get back the right thing, because it is a different object (even if it looks identical)
myMap.get({ a: 'b' });
// undefined

// Iterate through a Map
// using for .. of
for (let [key, value] of myMap) {
  console.log(`${key} has the value ${value}`);
}
// fruitTypes has the value banana,orange,cherry
// [object Object] has the value value
// We got "[object Object]" because `${key}` implicitly called .toString() on the object that is the key of that key/value pair

// You can also iterate through a Map with .forEach()
myMap.forEach((value, key) => {
  console.log(`${key} has the value ${value}`);
})
// fruitTypes has the value banana,orange,cherry
// [object Object] has the value value
```
