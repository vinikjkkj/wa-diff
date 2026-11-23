__d(
  "WAFlowJSONSingleColumnLayoutSchema",
  ["WAFlowJSONChildrenSchema", "WAFlowJSONConstants", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_CHILDREN,
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE,
        ],
        additionalProperties: !1,
        properties: {
          type: {
            const: String(
              o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN,
            ),
          },
          children: o("WAFlowJSONChildrenSchema").getLayoutChildrenSchema(e),
        },
      };
    }
    l.getSingleColumnLayoutSchema = e;
  },
  98,
);
