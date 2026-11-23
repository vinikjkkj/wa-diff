__d(
  "MjvKeywordsValidator",
  ["MjvKeywords", "MjvTypeValidator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "type",
      "enum",
      "const",
      "required",
      "properties",
      "additionalProperties",
      "patternProperties",
      "propertyNames",
      "minProperties",
      "maxProperties",
      "dependencies",
      "minLength",
      "maxLength",
      "pattern",
      "format",
      "minimum",
      "maximum",
      "exclusiveMinimum",
      "exclusiveMaximum",
      "multipleOf",
      "items",
      "additionalItems",
      "minItems",
      "maxItems",
      "uniqueItems",
      "contains",
      "allOf",
      "anyOf",
      "oneOf",
      "not",
      "if",
      "then",
      "else",
      "$ref",
      "$id",
      "$schema",
      "definitions",
      "title",
      "description",
      "default",
      "examples",
    ]);
    function s(t, n, o, a) {
      var i = !0;
      if (n != null && typeof n == "object" && t.hasCustomKeywords()) {
        for (var l in n)
          if (
            !e.has(l) &&
            !u(t, n, o, l) &&
            (t.pushError(
              l,
              r("MjvKeywords").KEYWORD.message(l),
              { keyword: l },
              t.getParamsWithSchemaPath(n, a, l),
              { parentSchema: n, schema: l, data: o },
            ),
            (i = !1),
            t.exitOnError())
          )
            break;
      }
      return i;
    }
    function u(e, t, n, r) {
      var a = !0,
        i = e.getKeywordDefinition(r);
      if (
        i != null &&
        typeof t == "object" &&
        t != null &&
        o("MjvTypeValidator").isValidType(i.type, n)
      ) {
        var l = t[r],
          s = [
            function () {
              return i.compile ? i.compile(l)(n) : !0;
            },
            function () {
              return i.validate ? i.validate(l, n) : !0;
            },
          ];
        for (var u of s) if (!u() && ((a = !1), e.exitOnError())) break;
      }
      return a;
    }
    l.validateKeywords = s;
  },
  98,
);
