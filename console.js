const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'dick', age: 40, nervous: false };
const baz = { name: 'harry', age: 50, nervous: true };

// Bad ways to logs to console
console.log(foo);
console.log(bar);
console.log(baz);

console.log('%c My Friends', 'color: orange; font-weight: bold;');
console.log({ foo, bar, baz });

console.table([foo, bar, baz]);

// Console.time
console.time('looper');

let i = 0;
while (i < 1000000) {
  i++;
}

console.timeEnd('looper')

// Stack trace logs
const deleteMe = () => console.trace('bye bye database');

deleteMe();
deleteMe();