module.exports = {
    // '/userConstruct_buy': {
    //     post: {
    //         tags: ['User construct'],
    //         description: "Buy construct",
    //         requestBody: {
    //             required: true,
    //             content: {
    //                 'application/json': {
    //                     schema: {
    //                         type: 'object',
    //                         required: ['zoneId', 'constructDef'],
    //                         properties: {
    //                             zoneId: {
    //                                 type: 'string',
    //                                 description: 'Zone id'
    //                             },
    //                             constructDef: {
    //                                 type: 'integer',
    //                                 description: 'mBuildingDef'
    //                             }
    //                         }
    //                     },
    //                 }
    //             },
    //             description: ''
    //         },
    //         responses: {
    //             '200': {
    //                 content: {
    //                     'application/json': {
    //                         // schema:{
    //                         //     $ref:'#/components/schemas/Todo'
    //                         // }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // },
    '/worldMap_getAll': {
        get: {
            tags: ['World Map'],
            description: "Get all",
            operationId: 'getAllWorldMap',
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
    '/worldMap_getByUsername': {
        get: {
            tags: ['World Map'],
            description: "Get cell by username",
            operationId: 'getCellByUsername',
            parameters: [{
                in: 'query',
                name: 'username',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Username'
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
    '/worldMap_getByUserWallet': {
        get: {
            tags: ['World Map'],
            description: "Get cell by user wallet",
            operationId: 'getCellByUserWallet',
            parameters: [{
                in: 'query',
                name: 'userWallet',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'userWallet'
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
    '/worldMap_buyCell': {
        post: {
            tags: ['World Map'],
            description: "Buy cell",
            operationId: 'buyCell',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['idCell'],
                            properties: {
                                idCell: {
                                    type: 'integer',
                                    description: 'Cell id'
                                },
                                cellIndex: {
                                    type: 'integer',
                                    description: 'Cell index'
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
    '/worldMap_updateCell': {
        post: {
            tags: ['World Map'],
            description: "Update arrCell",
            operationId: 'updateArrCell',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['idCell', 'cellIndex', 'params'],
                            properties: {
                                idCell: {
                                    type: 'integer',
                                    description: 'Cell id'
                                },
                                cellIndex: {
                                    type: 'integer',
                                    description: 'Cell index'
                                },
                                params: {
                                    type: 'object',
                                    description: 'Params',
                                    properties:{
                                        linkIcon:{
                                            type:'string'
                                        },
                                        linkAds:{
                                            type:'string'
                                        },
                                        linkBrand:{
                                            type:'string'
                                        },
                                        titleBrand:{
                                            type:'string'
                                        },
                                        description:{
                                            type:'string'
                                        },
                                        linkVisit:{
                                            type:'string'
                                        },
                                        linkBidding:{
                                            type:'string'
                                        }
                                    }
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
    '/worldMap_updateLinkAds': {
        post: {
            tags: ['World Map'],
            description: "Update link ads",
            operationId: 'updateLinkAds',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['idCell', 'cellIndex', 'linkAds'],
                            properties: {
                                idCell: {
                                    type: 'integer',
                                    description: 'Cell id'
                                },
                                cellIndex: {
                                    type: 'integer',
                                    description: 'Cell index'
                                },
                                linkAds: {
                                    type: 'string',
                                    description: 'Link ads'
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