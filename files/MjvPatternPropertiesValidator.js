__d(
  "MjvPatternPropertiesValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (typeof t != "object" || t == null) return a;
      var i = t.patternProperties;
      if (
        i != null &&
        typeof i == "object" &&
        typeof n == "object" &&
        n != null &&
        !r("MjvBuiltins").isArray(n)
      ) {
        var l = r("MjvBuiltins").objectKeys(i);
        for (var s in n)
          for (var u of l) {
            var c = i[u];
            if (
              c != null &&
              (typeof c == "object" ||
                typeof c == "string" ||
                typeof c == "boolean") &&
              e.isValidPattern(s, u) &&
              !e.validate(
                c,
                n[s],
                babelHelpers.extends({}, o, {
                  dataPath: o.dataPath + "['" + s + "']",
                  schemaPath: [
                    "" + o.schemaPath,
                    "" + r("MjvKeywords").PATTERN_PROPERTIES.ID,
                    "" + encodeURIComponent(u),
                  ].join("/"),
                }),
              ) &&
              ((a = !1), e.exitOnError())
            )
              break;
          }
      }
      return a;
    }
    l.validatePatternProperties = e;
  },
  98,
);
