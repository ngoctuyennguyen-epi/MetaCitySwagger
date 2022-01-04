module.exports = {
    '/userZone_getForUser': {
        get: {
            tags: ['User zone'],
            description: "Get all zones by user",
            operationId: 'getUserZones',
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
    '/userZone_getZoneById': {
        get: {
            tags: ['User zone'],
            description: "Get zone by id",
            operationId: 'getZone',
            parameters: [{
                in: 'path',
                name: 'zone_id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Zone id'
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
    },
    '/userZone_buy': {
        post: {
            tags: ['User zone'],
            description: "Buy zone",
            operationId: 'buyZone',
            parameters: [{
                in: 'body',
                name: 'zone_id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Zone id'
            },
                {
                    in: 'body',
                    name: 'zone_name',
                    required: true,
                    schema: {
                        type: 'string'
                    },
                    description: 'Zone name'
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