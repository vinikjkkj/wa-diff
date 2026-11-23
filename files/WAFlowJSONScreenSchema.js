__d(
  "WAFlowJSONScreenSchema",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONScreenLayoutSchema",
    "WAFlowJSONScreenSchemaV501",
    "WAFlowJSONScreenSchemaV502",
    "WAFlowJSONValidationError",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT;
    }
    function s(e) {
      var t = [
        o("WAFlowJSONConstants").WA_FLOW_JSON_ID,
        o("WAFlowJSONConstants").WA_FLOW_JSON_TITLE,
      ];
      return (
        +e >= 600 && t.push(o("WAFlowJSONConstants").WA_FLOW_JSON_LAYOUT),
        t
      );
    }
    function u(e) {
      var t = {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
        minLength: 1,
      };
      return +e >= 700 && r("justknobx")._("3764")
        ? babelHelpers.extends({}, t, {
            pattern: o("WAFlowJSONConstants")
              .WA_FLOW_JSON_SCREEN_ID_PATTERN_V700,
          })
        : babelHelpers.extends({}, t, {
            pattern: o("WAFlowJSONConstants").WA_FLOW_JSON_SCREEN_ID_PATTERN,
          });
    }
    function c(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
        pattern:
          +e >= 500
            ? o("WAFlowJSONSchemaUtils")
                .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN
            : void 0,
      };
    }
    function d() {
      var e, t;
      return {
        type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        patternProperties:
          ((e = {}),
          (e[t.WA_FLOW_JSON_DATA_BINDING_PATTERN] = {
            type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
            required: ["__example__", "type"],
          }),
          (e[t.WA_FLOW_JSON_REQUIRED_PATTERN] = {
            type: t.WA_FLOW_JSON_SCHEMA_ARRAY,
          }),
          e),
      };
    }
    function m() {
      return { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN };
    }
    function p() {
      return { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN };
    }
    function _(t) {
      return {
        type: e(),
        required: s(t),
        additionalProperties: !1,
        properties: {
          id: u(t),
          title: c(t),
          data: d(),
          refresh_on_back: m(),
          terminal: p(),
          layout: o("WAFlowJSONScreenLayoutSchema").getScreenLayoutSchema(t),
        },
      };
    }
    function f(e) {
      switch (e) {
        case 100:
        case 101:
        case 110:
        case 120:
        case 200:
        case 201:
        case 202:
        case 299:
        case 300:
        case 301:
        case 302:
        case 400:
        case 401:
        case 500:
          throw o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNSUPPORTED_FLOW_JSON_VERSION.concat(
            ": " + String(e),
          );
        case 501:
        case 600:
        case 601:
        case 602:
        case 603:
        case 700:
        case 701:
        case 702:
        case 703:
        case 704:
          return o("WAFlowJSONScreenSchemaV501").getScreenSchemaV501(e);
        case 502:
          return o("WAFlowJSONScreenSchemaV502").getScreenSchemaV502(e);
      }
    }
    ((l.getCommonScreenSchema = _), (l.getScreenSchema = f));
  },
  98,
);
