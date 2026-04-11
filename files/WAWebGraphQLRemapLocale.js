__d(
  "WAWebGraphQLRemapLocale",
  ["WALogger", "isPlainObject"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = function (t, n) {
        try {
          var e = JSON.parse(n);
          return r("isPlainObject")(e)
            ? Object.keys(e).find(function (n) {
                var r = e[n];
                return Array.isArray(r) ? r.includes(t) : !1;
              }) || t
            : (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid json locale mapping",
                  ])),
              ),
              t);
        } catch (e) {
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid json locale mapping",
                ])),
            ),
            t
          );
        }
      };
    l.graphQLRemapLocale = c;
  },
  98,
);
