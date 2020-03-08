console.log('Before');
const user = getUser(2,function(user){
	console.log('User',user)
});
console.log(user)
console.log('After')

function getUser(id,callback){
	setTimeout(()=>{
		console.log('Reading a user from a database');
		callback({id:id,getHubUsername:'mosh'})  
	},2000)
	return 1;
}
