__d(
  "MjvIfThenElseValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        t != null &&
        typeof t == "object" &&
        t.if != null &&
        (t.then != null || t.else != null) &&
        (typeof t.if == "object" ||
          typeof t.if == "boolean" ||
          typeof t.if == "string")
      ) {
        if (
          e.validate(t.if, n, babelHelpers.extends({}, o, { skipErrors: !0 }))
        ) {
          if (
            t.then != null &&
            (typeof t.then == "object" ||
              typeof t.then == "boolean" ||
              typeof t.then == "string") &&
            !e.validate(
              t.then,
              n,
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").THEN.ID),
            )
          ) {
            var i,
              l = (i = r("MjvKeywords")).THEN.ID;
            (e.pushError(
              i.IF.ID,
              i.IF.message(l),
              { failingKeyword: l },
              e.getParamsWithSchemaPath(t, o, i.IF.ID),
              { parentSchema: t, schema: t.then, data: n },
            ),
              (a = !1));
          }
        } else if (
          t.else != null &&
          (typeof t.else == "object" ||
            typeof t.else == "boolean" ||
            typeof t.else == "string") &&
          !e.validate(t.else, n, o)
        ) {
          var i,
            s = (i = r("MjvKeywords")).ELSE.ID;
          (e.pushError(
            i.IF.ID,
            i.IF.message(s),
            { failingKeyword: s },
            e.getParamsWithSchemaPath(t, o, i.ELSE.ID),
            { parentSchema: t, schema: t.else, data: n },
          ),
            (a = !1));
        }
      }
      return a;
    }
    l.validateIfThenElse = e;
  },
  98,
);
