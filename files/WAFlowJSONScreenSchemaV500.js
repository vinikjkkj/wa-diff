__d(
  "WAFlowJSONScreenSchemaV500",
  ["WAFlowJSONConstants", "WAFlowJSONScreenSchema"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN };
    }
    function s() {
      return {
        properties: { terminal: { const: !0 } },
        required: ["terminal"],
      };
    }
    function u() {
      return {
        properties: {
          success: {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN,
          },
        },
      };
    }
    function c() {
      return { properties: { success: { not: {} } } };
    }
    function d(t) {
      return babelHelpers.extends(
        {},
        o("WAFlowJSONScreenSchema").getCommonScreenSchema(t),
        {
          properties: babelHelpers.extends(
            {},
            o("WAFlowJSONScreenSchema").getCommonScreenSchema(t).properties,
            { success: e() },
          ),
          if: s(),
          then: u(),
          else: c(),
        },
      );
    }
    l.getScreenSchemaV500 = d;
  },
  98,
);
