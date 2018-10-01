var redis = require('redis');
var client = redis.createClient(); // This creates a new client

//var client = redis.createClient(port, host); Especificando porta e ip explicitamente

client.on('connect', function(){
	console.log('Redis client connected');
});

client.on('error', function(err){
	console.log('Something went wrong ', err);
});

/*client.set('my test key', 'my test value', redis.print);
client.get('my test key', function(error, result) {
  if (error) throw error;
  console.log('GET result ->', result)
});
*/

//client.set(/*'nome', 'Alexandre',*/ 'email', 'alexandre121996@hotmail.com', redis.print);
/*client.get('email', function(error, result){
	if(error){
		console.log(error);
		throw error;
	}
	console.log('GET result ->', result);
});
*/

client.hset('04384298188', 'nome', 'alexandre', redis.print);
client.hset('04384298188', 'telefone', '62-981824593', redis.print);
client.hset('04384298188', 'idade', '22', redis.print);
client.hset('04384298188', 'curso', 'Sistemas de Informação', redis.print);

client.hgetall('04384298188', function(err, result){
	console.log(JSON.stringify(result));
});