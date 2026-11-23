__d(
  "MjvBooleanSchemaValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      return (t || (s(e, r("MjvKeywords").FALSE_SCHEMA, o, t, n), (a = !1)), a);
    }
    function s(e, t, n, r, o) {
      e.pushError(
        t.ID,
        t.message(),
        void 0,
        e.getParamsWithSchemaPath(null, n, t.ID),
        { parentSchema: r, schema: r, data: o },
      );
    }
    l.validateBooleanSchema = e;
  },
  98,
);
