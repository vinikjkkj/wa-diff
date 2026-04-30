__d(
  "WAWebGraphQLRemapLocale",
  ["WALogger", "isPlainObject"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      try {
        var n = JSON.parse(t);
        return r("isPlainObject")(n)
          ? Object.keys(n).find(function (t) {
              var r = n[t];
              return Array.isArray(r) ? r.includes(e) : !1;
            }) || e
          : (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid json locale mapping",
                ])),
            ),
            e);
      } catch (t) {
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid json locale mapping",
              ])),
          ),
          e
        );
      }
    }
    l.graphQLRemapLocale = c;
  },
  98,
);
