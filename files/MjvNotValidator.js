__d(
  "MjvNotValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (typeof t != "object" || t == null) return !0;
      var i = t.not;
      return (
        i != null &&
          (typeof i == "object"
            ? e.validate(
                i,
                n,
                babelHelpers.extends({}, o, { skipErrors: !0 }),
              ) &&
              (e.pushError(
                r("MjvKeywords").NOT.ID,
                r("MjvKeywords").NOT.message(),
                void 0,
                e.getParamsWithSchemaPath(i, o, r("MjvKeywords").NOT.ID),
                { parentSchema: t, schema: t.not, data: n },
              ),
              (a = !1))
            : typeof i == "boolean" &&
              i === !0 &&
              (e.pushError(
                r("MjvKeywords").NOT.ID,
                r("MjvKeywords").NOT.message(),
                void 0,
                e.getParamsWithSchemaPath(null, o, r("MjvKeywords").NOT.ID),
                { parentSchema: t, schema: t.not, data: n },
              ),
              (a = !1))),
        a
      );
    }
    l.validateNot = e;
  },
  98,
);
