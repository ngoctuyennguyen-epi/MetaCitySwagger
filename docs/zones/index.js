module.exports = {
    '/zone_getAll': {
        get: {
            tags: ['Zone'],
            description: "Get all zones",
            operationId: 'getZones',
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
    '/zone_create': {
        post: {
            tags: ['Zone'],
            description: "Create zone",
            operationId: 'createZone',
            parameters: [{
                in: 'body',
                name: 'address',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Address'
            }],
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
    }
}