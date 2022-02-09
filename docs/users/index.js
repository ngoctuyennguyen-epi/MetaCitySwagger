const userLogin = require('./login');
const userSignup = require('./signup');

module.exports = {
    // '/users/signup':{
    //     ...userSignup
    // },
    // '/users/login':{
    //     ...userLogin
    // },
    '/user_resetUser': {
        get: {
            tags: ['User'],
            description: "Reset user",
            operationId: 'resetUser',
            responses: {
                '200': {
                    content: {
                        'application/json': {
                            // schema:{
                            //     $ref:'#/components/schemas/Todo'
                            // }
                        }
                    }
                }
            }
        }
    },
}