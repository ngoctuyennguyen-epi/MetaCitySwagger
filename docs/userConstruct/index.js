module.exports = {
    '/userConstruct_buy': {
        post: {
            tags: ['User construct'],
            description: "Buy construct",
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['zoneId', 'constructDef'],
                            properties: {
                                zoneId: {
                                    type: 'string',
                                    description: 'Zone id'
                                },
                                constructDef: {
                                    type: 'integer',
                                    description: 'mBuildingDef'
                                }
                            }
                        },
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
    '/userConstruct_build': {
        post: {
            tags: ['User construct'],
            description: "Build construct",
            operationId: 'buildConstruct',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['constructId', 'positionX', 'positionY'],
                            properties: {
                                constructId: {
                                    type: 'string',
                                    description: 'Construct id'
                                },
                                positionX: {
                                    type: 'integer',
                                    description: 'X'
                                },
                                positionY: {
                                    type: 'integer',
                                    description: 'Y'
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
    '/userConstruct_getById': {
        get: {
            tags: ['User construct'],
            description: "Get construct by id",
            operationId: 'getConstructById',
            parameters: [{
                in: 'query',
                name: 'constructId',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Construct id'
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