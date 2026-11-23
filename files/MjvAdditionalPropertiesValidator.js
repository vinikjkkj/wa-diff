__d(
  "MjvAdditionalPropertiesValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        typeof t == "object" &&
        t != null &&
        t.additionalProperties != null &&
        typeof n == "object"
      ) {
        var i = e.getSchemaMeta(t),
          l = i.ownPropertyNames;
        if (l == null) {
          var c = t.properties;
          ((l = new Set(
            r("MjvBuiltins").objectKeys(
              typeof c == "object" && c != null ? c : {},
            ),
          )),
            (i.ownPropertyNames = l));
        }
        for (var d in n) {
          var m = !0;
          if (
            (t.additionalProperties === !1
              ? (m = s(e, t, n, o, d, l))
              : typeof t.additionalProperties == "object" &&
                (m = u(e, t, o, n, d, l)),
            a && !m && (a = !1),
            !a && e.exitOnError())
          )
            break;
        }
      }
      return a;
    }
    function s(e, t, n, o, a, i) {
      var l = !0;
      return (
        !i.has(a) &&
          !c(e, t, a) &&
          !r("MjvBuiltins").isArray(n) &&
          typeof t == "object" &&
          t != null &&
          (e.pushError(
            r("MjvKeywords").ADDITIONAL_PROPERTIES.ID,
            r("MjvKeywords").ADDITIONAL_PROPERTIES.message(),
            { additionalProperty: a },
            e.getParamsWithSchemaPath(
              t,
              o,
              r("MjvKeywords").ADDITIONAL_PROPERTIES.ID,
            ),
            { parentSchema: t, schema: t.additionalProperties, data: n },
          ),
          (l = !1)),
        l
      );
    }
    function u(e, t, n, o, a, i) {
      var l = !0,
        s = t.additionalProperties;
      return (
        !i.has(a) &&
          typeof s == "object" &&
          s != null &&
          typeof o == "object" &&
          o != null &&
          !c(e, t, a) &&
          !e.validate(
            s,
            o[a],
            babelHelpers.extends({}, n, {
              dataPath: n.dataPath + "['" + a + "']",
              schemaPath:
                n.schemaPath + "/" + r("MjvKeywords").ADDITIONAL_PROPERTIES.ID,
            }),
          ) &&
          (l = !1),
        l
      );
    }
    function c(e, t, n) {
      if (
        typeof t != "object" ||
        t == null ||
        t.patternProperties == null ||
        typeof t.patternProperties != "object"
      )
        return !1;
      for (var o of r("MjvBuiltins").objectKeys(t.patternProperties))
        if (e.isValidPattern(n, o)) return !0;
      return !1;
    }
    l.validateAdditionalProperties = e;
  },
  98,
);
