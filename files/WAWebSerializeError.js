__d(
  "WAWebSerializeError",
  ["WAWebNormalizeStack", "isEmptyObject"],
  function (t, n, r, o, a, i, l) {
    var e = ["message", "name", "stack"];
    function s(t) {
      var n = o("WAWebNormalizeStack").normalizeError(t),
        a = n.message,
        i = n.name,
        l = n.stack,
        s = babelHelpers.objectWithoutPropertiesLoose(n, e),
        u = o("WAWebNormalizeStack").normalizeStack(t, !0),
        c = r("isEmptyObject")(s)
          ? ""
          : " " +
            JSON.stringify(s, function (e, t) {
              return e && typeof t == "object" ? String(t) : t;
            });
      return i + " - " + (a || "") + c + "\n" + u;
    }
    l.default = s;
  },
  98,
);
