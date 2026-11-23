__d(
  "WAFlowJSONRootSchema",
  [
    "WAFlowJSONChildrenSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONScreenSchema",
    "WAFlowJSONValidationError",
    "WAFlowsVersionUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAFlowsVersionUtils").intToString(+e);
      return "https://whatsapp.com/flows-template-schema.v"
        .concat(t)
        .concat(".json");
    }
    function s() {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
        format: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_URI,
      };
    }
    function u(e) {
      return +e >= 201;
    }
    function c(e) {
      return u(e)
        ? {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
            const: o("WAFlowsVersionUtils").intToString(+e),
          }
        : {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_INTEGER,
            const: +e,
          };
    }
    function d(e) {
      return +e == 502
        ? {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
            oneOf: [
              { const: o("WAFlowsVersionUtils").intToString(300) },
              { const: o("WAFlowsVersionUtils").intToString(301) },
            ],
          }
        : +e >= 703
          ? {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
              oneOf: [
                { const: o("WAFlowsVersionUtils").intToString(300) },
                { const: o("WAFlowsVersionUtils").intToString(400) },
              ],
            }
          : {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
              const: o("WAFlowsVersionUtils").intToString(300),
            };
    }
    function m(e) {
      var t;
      if (+e >= 700 && r("justknobx")._("3764")) {
        var n, a;
        return {
          type: (a = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          patternProperties:
            ((n = {}),
            (n[a.WA_FLOW_JSON_SCREEN_ID_PATTERN_V700] = {
              type: a.WA_FLOW_JSON_SCHEMA_ARRAY,
              items: {
                type: a.WA_FLOW_JSON_SCHEMA_STRING,
                pattern: a.WA_FLOW_JSON_SCREEN_ID_PATTERN_V700,
              },
            }),
            n),
          propertyNames: { pattern: a.WA_FLOW_JSON_SCREEN_ID_PATTERN_V700 },
        };
      }
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        patternProperties:
          ((t = {}),
          (t[o("WAFlowJSONConstants").WA_FLOW_JSON_SCREEN_ID_PATTERN] = {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
            items: {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
              pattern: o("WAFlowJSONConstants").WA_FLOW_JSON_SCREEN_ID_PATTERN,
            },
          }),
          t),
        propertyNames: {
          pattern: o("WAFlowJSONConstants").WA_FLOW_JSON_SCREEN_ID_PATTERN,
        },
      };
    }
    function p(e) {
      if (+e >= 501)
        return {
          type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
          properties: {
            lead_gen_ai: {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN,
            },
          },
        };
    }
    function _(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
        minItems: 1,
        items: o("WAFlowJSONScreenSchema").getScreenSchema(e),
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
        case 502:
        case 600:
        case 601:
        case 602:
        case 603:
        case 700:
        case 701:
        case 702:
        case 703:
        case 704:
          return [
            o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS,
            o("WAFlowJSONConstants").WA_FLOW_JSON_VERSION,
          ];
      }
    }
    function g(e) {
      return y(e);
    }
    function h(e, t) {
      var n = babelHelpers.extends({}, e, { $defs: { $components: {} } });
      for (var r of o("WAFlowJSONConstants").ComponentRefKey.members()) {
        var a = r.valueOf(),
          i = o("WAFlowJSONChildrenSchema").getComponentSchemaRefByVersion(
            r,
            t,
          );
        i != null && (n.$defs.$components[a] = i);
      }
      return n;
    }
    function y(t) {
      var n,
        r = {
          $schema: (n = o("WAFlowJSONConstants"))
            .WA_FLOW_JSON_SCHEMA_SPECIFICATION,
          $id: e(t),
          title: n.WA_FLOW_JSON_SCHEMA_TITLE,
          description: n.WA_FLOW_JSON_SCHEMA_DESCRIPTION,
          type: n.WA_FLOW_JSON_SCHEMA_OBJECT,
          required: f(t),
          additionalProperties: !1,
          properties: {
            version: c(t),
            data_api_version: d(t),
            routing_model: m(t),
            screens: _(t),
          },
        };
      if (+t >= 501) {
        var a = p(t);
        a != null &&
          (r.properties = babelHelpers.extends({}, r.properties, { meta: a }));
      }
      return h(r, t);
    }
    ((l.getWAFlowsURISchema = s),
      (l.getRoutingModelSchema = m),
      (l.getWAFlowJSONDynamicSchema = g));
  },
  98,
);
