__d(
  "MjvContainsValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        typeof t == "object" &&
        t.contains !== void 0 &&
        r("MjvBuiltins").isArray(n)
      )
        if (t.contains === !0)
          n.length === 0 &&
            (e.pushError(
              r("MjvKeywords").CONTAINS.ID,
              r("MjvKeywords").CONTAINS.message(),
              {},
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").CONTAINS.ID),
              { parentSchema: t, schema: t.contains, data: n },
            ),
            (a = !1));
        else if (t.contains === !1)
          (e.pushError(
            r("MjvKeywords").CONTAINS.ID,
            r("MjvKeywords").CONTAINS.message(),
            {},
            e.getParamsWithSchemaPath(t, o, r("MjvKeywords").CONTAINS.ID),
            { parentSchema: t, schema: t.contains, data: n },
          ),
            (a = !1));
        else if (n.length === 0)
          (e.pushError(
            r("MjvKeywords").CONTAINS.ID,
            r("MjvKeywords").CONTAINS.message(),
            {},
            e.getParamsWithSchemaPath(t, o, r("MjvKeywords").CONTAINS.ID),
            { parentSchema: t, schema: t.contains, data: n },
          ),
            (a = !1));
        else {
          for (var i = !1, l = 0; l < n.length; l++) {
            var s;
            if (
              typeof t.contains == "object" &&
              e.validate(
                (s = t.contains) != null ? s : void 0,
                n[l],
                babelHelpers.extends({}, o, {
                  dataPath: o.dataPath + "[" + l + "]",
                  schemaPath: o.schemaPath + "/contains",
                  skipErrors: !0,
                }),
              )
            ) {
              i = !0;
              break;
            }
          }
          i ||
            (e.pushError(
              r("MjvKeywords").CONTAINS.ID,
              r("MjvKeywords").CONTAINS.message(),
              {},
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").CONTAINS.ID),
              { parentSchema: t, schema: t.contains, data: n },
            ),
            (a = !1));
        }
      return a;
    }
    l.validateContains = e;
  },
  98,
);
