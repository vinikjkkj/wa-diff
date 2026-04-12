__d(
  "useWAWebAsyncRetry",
  ["react", "useWAWebAsync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n = c(0),
        o = n[0],
        a = n[1],
        i = u(
          function () {
            a(o + 1);
          },
          [o],
        ),
        l = r("useWAWebAsync")(
          function () {
            return e();
          },
          [].concat(t, [o]),
        );
      return babelHelpers.extends({}, l, { retry: i });
    }
    l.default = d;
  },
  98,
);
