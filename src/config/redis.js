import redis from 'redis';
const client = redis.createClient();

client.on('connect', () => console.log('Redis Connected'));
client.on('error', (err) => console.error('Redis Error:', err));

export default client;