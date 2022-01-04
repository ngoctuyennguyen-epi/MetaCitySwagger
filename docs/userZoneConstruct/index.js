module.exports = {
    '/userZoneConstruct_buy': {
        post: {
            tags: ['User zone construct'],
            description: "Buy construct",
            operationId: 'buyConstruct',
            parameters: [{
                in: 'body',
                name: 'construct_id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Construct template id'
            }, {
                in: 'body',
                name: 'construct_name',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Construct name'
            }, {
                in: 'body',
                name: 'user_zone_id',
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
    '/userZoneConstruct_build': {
        post: {
            tags: ['User zone construct'],
            description: "Build construct",
            operationId: 'buildConstruct',
            parameters: [{
                in: 'body',
                name: 'user_zone_construct_id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Construct id'
            }, {
                in: 'body',
                name: 'nav_point_x',
                required: true,
                schema: {
                    type: 'integer'
                },
                description: 'X'
            }, {
                in: 'body',
                name: 'nav_point_y',
                required: true,
                schema: {
                    type: 'integer'
                },
                description: 'Y'
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
    '/userZoneConstruct_getForUserZone': {
        get: {
            tags: ['User zone construct'],
            description: "Buy zone",
            operationId: 'getForUserZone',
            parameters: [{
                in: 'path',
                name: 'user_zone_construct_id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Construct id'
            },
                {
                    in: 'path',
                    name: 'nav_point_x',
                    required: true,
                    schema: {
                        type: 'string'
                    },
                    description: 'X'
                },
                {
                    in: 'path',
                    name: 'nav_point_y',
                    required: true,
                    schema: {
                        type: 'string'
                    },
                    description: 'Y'
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
    '/userZoneConstruct_getForUserZoneByInventory': {
        get: {
            tags: ['User zone construct'],
            description: "Get all construct in inventory",
            operationId: 'getForUserZoneByInventory',
            parameters: [{
                in: 'path',
                name: 'user_zone_id',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Zone id'
            },
                {
                    in: 'path',
                    name: 'is_built',
                    required: true,
                    schema: {
                        type: 'boolean'
                    },
                    description: 'Is built'
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
    '/userZoneConstruct_getConstructById': {
        get: {
            tags: ['User zone construct'],
            description: "Get construct by id",
            operationId: 'getConstructById',
            parameters: [{
                in: 'path',
                name: 'zone_construct_id',
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