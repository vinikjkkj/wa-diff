__d(
  "MjvConstValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      return (
        typeof t == "object" &&
          t.const !== void 0 &&
          !e.isEqual(n, t.const) &&
          (e.pushError(
            r("MjvKeywords").CONST.ID,
            r("MjvKeywords").CONST.message(),
            { allowedValue: t.const },
            e.getParamsWithSchemaPath(t, o, r("MjvKeywords").CONST.ID),
            { parentSchema: t, schema: t.const, data: n },
          ),
          (a = !1)),
        a
      );
    }
    l.validateConst = e;
  },
  98,
);
