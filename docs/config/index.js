module.exports = {
  "/config_import": {
    post: {
      tags: ["Config"],
      description: "Import config",
      operationId: "importConfig",
      requestBody: {
        content: {
          //   "application/octet-stream": {
          //     schema: {
          //       type: "string",
          //       format: "binary",
          //     },
          //   },
          "multipart/form-data": {
            schema: {
              type: "object",
              required: ["importFile"],
              properties: {
                importFile: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },

      responses: {
        200: {
          content: {
            "application/json": {
              // schema:{
              //     $ref:'#/components/schemas/Todo'
              // }
            },
          },
        },
      },
    },
  },
};
