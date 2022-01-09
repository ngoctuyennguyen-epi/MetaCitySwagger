module.exports = {
    '/construct_getAll': {
        get: {
            tags: ['Construct'],
            description: "Get all construct template",
            operationId: 'getConstructs',
            responses: {
                '200': {
                    description: "Constructs were obtained",
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
    '/construct_getById': {
        get: {
            tags: ['Construct'],
            description: "Get construct by Id",
            operationId: 'getConstructById',
            parameters: [{
                in: 'query',
                name: 'id',
                required: true,
                schema: {
                    type: 'integer'
                },
                description: 'The construct Id'
            }],
            responses: {
                '200': {
                    description: "Construct was obtained",
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
    '/construct_getAllConstructsInShop': {
        get: {
            tags: ['Construct'],
            description: "Get construct in shop",
            operationId: 'getConstructShop',
            responses: {
                '200': {
                    description: "Construct was obtained",
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
    '/construct_getConstructInShopById': {
        get: {
            tags: ['Construct'],
            description: "Get construct in shop by id",
            operationId: 'getConstructShopById',
            parameters: [{
                in: 'query',
                name: 'id',
                required: true,
                schema: {
                    type: 'integer'
                },
                description: 'The construct Id'
            }],
            responses: {
                '200': {
                    description: "Construct was obtained",
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
    // '/construct_create':{
    //     post:{
    //         tags:['Construct CRUD operations'],
    //         description: "Create struct",
    //         operationId: "createStruct",
    //         parameters:[],
    //         // requestBody: {
    //         //     content:{
    //         //         'application/json': {
    //         //             schema:{
    //         //                 $ref:'#/components/schemas/TodoInput'
    //         //             }
    //         //         }
    //         //     }
    //         // },
    //         responses:{
    //             '201':{
    //                 description: "Struct created successfully"
    //             },
    //             '500':{
    //                 description: 'Server error'
    //             }
    //         }
    //     }
    // },
    // '/construct_update/{id}':{
    //     put:{
    //         tags:['Construct CRUD operations'],
    //         description: "Create struct",
    //         operationId: "createStruct",
    //         parameters:[],
    //         // requestBody: {
    //         //     content:{
    //         //         'application/json': {
    //         //             schema:{
    //         //                 $ref:'#/components/schemas/TodoInput'
    //         //             }
    //         //         }
    //         //     }
    //         // },
    //         responses:{
    //             '201':{
    //                 description: "Struct created successfully"
    //             },
    //             '500':{
    //                 description: 'Server error'
    //             }
    //         }
    //     }
    // }
}