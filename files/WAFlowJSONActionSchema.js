__d(
  "WAFlowJSONActionSchema",
  ["WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 &&
          (e = [o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE]),
        {
          type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME,
            o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_PAYLOAD,
          ],
          additionalProperties: !1,
          properties: {
            name:
              e.length > 1
                ? {
                    oneOf: e.map(function (e) {
                      return { const: e };
                    }),
                  }
                : { const: e[0] },
            payload: {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
              properties: {},
              additionalProperties: !0,
            },
          },
        }
      );
    }
    function s(t, n) {
      n === void 0 && (n = null);
      var r = e();
      return babelHelpers.extends({}, r, {
        required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME],
        properties: babelHelpers.extends({}, r.properties, {
          name: d(t, n),
          next: m(t),
        }),
        if: {
          properties: {
            name: {
              const: o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
            },
          },
        },
        then: { required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NEXT] },
        else: {
          not: {
            required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NEXT],
          },
        },
      });
    }
    function u(t, n) {
      n === void 0 && (n = null);
      var r = e();
      return babelHelpers.extends({}, r, {
        required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME],
        properties: babelHelpers.extends({}, r.properties, {
          name: d(t, n),
          next: m(t),
          url: o("WAFlowJSONSchemaUtils").getUriStringBindingSchemaType(t),
        }),
        allOf: p(),
      });
    }
    function c(e, t) {
      return (t === void 0 && (t = null), +e < 600 ? s(e, t) : u(e, t));
    }
    function d(e, t) {
      t === void 0 && (t = null);
      var n = [
        o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
        o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
      ];
      if (t !== null)
        switch (t) {
          case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FOOTER: {
            n.push(o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE);
            break;
          }
          case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
            .EMBEDDED_LINK:
          case o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN: {
            +e >= 600 &&
              n.push(o("WAFlowJSONConstants").WAFlowsActionType.OPEN_URL);
            break;
          }
        }
      return o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e, {
        enum: n,
      });
    }
    function m(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME,
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE,
        ],
        additionalProperties: !1,
        properties: {
          name: o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e),
          type: o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e),
        },
      };
    }
    function p() {
      var e,
        t = {
          if: {
            properties: {
              name: {
                const: (e = o("WAFlowJSONConstants")).WAFlowsActionType
                  .NAVIGATE,
              },
            },
          },
          then: { required: [e.WA_FLOW_JSON_SCHEMA_NEXT] },
          else: { not: { required: [e.WA_FLOW_JSON_SCHEMA_NEXT] } },
        },
        n = {
          if: { properties: { name: { const: e.WAFlowsActionType.OPEN_URL } } },
          then: { required: [e.WA_FLOW_JSON_SCHEMA_URL] },
          else: { not: { required: [e.WA_FLOW_JSON_SCHEMA_URL] } },
        },
        r = {
          if: { properties: { name: { const: e.WAFlowsActionType.OPEN_URL } } },
          then: { not: { required: [e.WA_FLOW_JSON_SCHEMA_PAYLOAD] } },
        };
      return [t, n, r];
    }
    ((l.getOnSelectActionSchema = e), (l.getOnClickActionSchema = c));
  },
  98,
);
