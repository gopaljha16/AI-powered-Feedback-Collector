const redis = require("redis");
const{createClient} = redis;

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST_STRING,
        port: process.env.REDIS_PORT_NO
    }
})

module.exports = redisClient