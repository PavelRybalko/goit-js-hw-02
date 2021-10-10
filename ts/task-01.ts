const logItems = function<T>(array: T[]){
 for(let i: number = 0; i<array.length; i +=1){
 	console.log(`${i+1}  -  ${array[i]}`);
 }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);