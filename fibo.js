// function fibonacci(n){
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fibonacci(8));



class Fibonacci {
	constructor (value) {
		this.index = value;
		this.number = 1;
		this.counter()
	}

	counter() {
		let prevNumber = 1;		
		for (let i = 3; i <= this.index; i++) {
			let nextNumber = prevNumber + this.number;
			prevNumber = this.number;
			this.number = nextNumber;
		}
		return this.number
	}
}

class Iterator{
	constructor (currentValue) {
		this.currentValue = currentValue;
	}
	current() {
		const fibonacci = new Fibonacci(this.currentValue)
		return `current ${fibonacci.number}`
	}
	next() {
		const fibonacci = new Fibonacci(this.currentValue+1)
		return `next ${fibonacci.number}`
	}
	rewind() {
		this.currentValue = 0;
		const fibonacci = new Fibonacci(this.currentValue)
		return `current ${fibonacci.number}`

	}

	prevoius() {
		const fibonacci = new Fibonacci(this.currentValue-1)
		return `prevoius ${fibonacci.number}`
	}
	key(){
	  const fibonacci = new Fibonacci(this.currentValue)
	  return `index: ${fibonacci.index}`;
	}

}
const iterator = new Iterator(10);
console.log(iterator.current());
console.log(iterator.next());

console.log(iterator.prevoius());
console.log(iterator.key());
console.log(iterator.rewind());

