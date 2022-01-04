module.exports = {
    get:{
        tags: ['Users'],
        description: "Signup",
        operationId: 'signup',
        responses:{
            '200':{
                description:"Signup successful",
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