__d(
  "WAFlowJSONCheckboxGroupComponentSchemaV500",
  [
    "$InternalEnum",
    "WAFlowJSONChildrenSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ REGULAR: "regular", LARGE: "large" });
    function s() {
      return [e.REGULAR, e.LARGE];
    }
    function u(e, t) {
      var n,
        r = o("WAFlowJSONChildrenSchema").getOptionListComponentSchemaV500(e),
        a = (n = o("WAFlowJSONSchemaUtils")).getStringBindingSchemaType(e),
        i = babelHelpers.extends({}, r, {
          properties: babelHelpers.extends({}, r.properties, {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .CHECKBOX_GROUP,
            },
            "max-selected-items": n.getNumberBindingSchemaType(e, {
              minimum: 2,
            }),
            "min-selected-items": n.getNumberBindingSchemaType(e, {
              minimum: 0,
            }),
            description: a,
            label: n.getTextFieldSchema(e),
            "media-size": n.getStringBindingSchemaType(e, { enum: s() }),
          }),
        });
      return (
        t ||
          (i = babelHelpers.extends({}, i, {
            properties: babelHelpers.extends({}, i.properties, {
              "init-value": o(
                "WAFlowJSONSchemaUtils",
              ).getArrayPrimitiveStringBindingSchemaType(
                e,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
              ),
              "error-message": a,
            }),
          })),
        i
      );
    }
    ((l.WAFlowJSONMediaSizeType = e),
      (l.getMediaSizeTypes = s),
      (l.getCheckboxGroupComponentSchemaV500 = u));
  },
  98,
);
