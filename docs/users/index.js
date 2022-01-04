const userLogin = require('./login');
const userSignup = require('./signup');

module.exports = {
    '/users/signup':{
        ...userSignup
    },
    '/users/login':{
        ...userLogin
    }
}