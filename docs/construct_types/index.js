module.exports = {
    '/constructType_getAll': {
        get: {
            tags: ['Construct type CRUD operations'],
            description: "Get construct types",
            operationId: 'getConstructTypes',
            responses: {
                '200': {
                    description: "Construct types were obtained",
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
    }
}