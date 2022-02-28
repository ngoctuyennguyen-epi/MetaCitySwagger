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
    },
    '/userConstruct_updateRotation': {
        post: {
            tags: ['User construct'],
            description: "Rotate construct",
            operationId: 'rotateConstruct',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['userConstructId', 'constructRotation'],
                            properties: {
                                userConstructId: {
                                    type: 'string',
                                    description: 'Construct id'
                                },
                                constructRotation: {
                                    type: 'integer',
                                    description: 'Construct Rotation'
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
    '/userConstruct_destroy': {
        post: {
            tags: ['User construct'],
            description: "Destroy construct",
            operationId: 'destroyConstruct',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['userConstructId'],
                            properties: {
                                userConstructId: {
                                    type: 'string',
                                    description: 'Construct id'
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
    '/userConstruct_collectGold': {
        post: {
            tags: ['User construct'],
            description: "Collect gold",
            operationId: 'collectGold',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['userConstructId'],
                            properties: {
                                userConstructId: {
                                    type: 'string',
                                    description: 'Construct id'
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
    '/userConstruct_restoreLifeTime': {
        post: {
            tags: ['User construct'],
            description: "Restore life time",
            operationId: 'restoreLifeTime',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['userConstructId'],
                            properties: {
                                userConstructId: {
                                    type: 'string',
                                    description: 'Construct id'
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
    '/userConstruct_updateState': {
        post: {
            tags: ['User construct'],
            description: "Update state",
            operationId: 'updateState',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['userConstructId'],
                            properties: {
                                userConstructId: {
                                    type: 'string',
                                    description: 'Construct id'
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
    }
}