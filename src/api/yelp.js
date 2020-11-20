import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer UofRn3Imm5BKouf6vRGUSTq9MstHRl3hOL53Bi8qIlUN4MbgkXoroM89ZNpxhu5tAr8KxtfasvxctdST_VjFHA4v6rre8LZC2LoPqoPXhkDw7EWGyO8D95Ek4Iq1X3Yx'
    }
});