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
    '/zone_getZoneById': {
        get: {
            tags: ['Zone'],
            description: "Get zone by Id",
            operationId: 'getZoneById',
            parameters: [{
                in: 'query',
                name: 'id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'The Zone Id'
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
    '/zone_getProfile': {
        get: {
            tags: ['Zone'],
            description: "Get zone profile",
            operationId: 'getZoneProfile',
            parameters: [{
                in: 'query',
                name: 'id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'The Zone Id'
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

    '/zone_buy': {
        get: {
            tags: ['Zone'],
            description: "Buy zone",
            operationId: 'buyZone',
            parameters: [{
                in: 'query',
                name: 'id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'The Zone Id'
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
    '/zone_resetProfile': {
        post: {
            tags: ['Zone'],
            description: "Reset profile",
            operationId: 'resetProfile',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['zoneId'],
                            properties: {
                                zoneId: {
                                    type: 'string',
                                    description: 'Zone id'
                                }
                            }
                        }
                    }
                },
                description: ''
            },

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