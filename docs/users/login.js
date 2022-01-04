module.exports = {
    get:{
        tags: ['Users'],
        description: "Login",
        operationId: 'login',
        responses:{
            '200':{
                description:"Login successful",
                // content:{
                //     'application/json':{
                //         schema:{
                //             $ref:'#/components/schemas/Todo'
                //         }
                //     }
                // }
            }
        }
    }
}