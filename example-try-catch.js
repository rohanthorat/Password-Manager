
function doWork(){
	throw new Error('Unable to do the work');
}


try{
	doWork();

} catch(e){
	console.log('Something went wrong');
	console.log(e.message);
} finally {
	console.log('finally block executed');
}

console.log('try catch ended');