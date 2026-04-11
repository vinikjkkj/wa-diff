__d(
  "useWAWebAggregatedView",
  ["WANullthrows", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useState;
    function p(e, t) {
      var n = f(e, t),
        o = n[0];
      return r("WANullthrows")(o);
    }
    function _(e, t) {
      var n = f(e, t),
        r = n[0];
      return r;
    }
    function f(e, t) {
      var n = m(1),
        r = n[0],
        o = n[1],
        a = u(
          function () {
            return o(function (e) {
              return e + 1;
            });
          },
          [o],
        ),
        i = d(
          function () {
            return t == null ? null : e(t);
          },
          (Array.isArray(t) ? t : [t]).concat([r]),
        );
      return (
        c(
          function () {
            return (
              i == null || i.on("all", a),
              function () {
                i == null || i.off("all", a);
              }
            );
          },
          [i, a],
        ),
        [i, r]
      );
    }
    ((l.useAggregatedView = p),
      (l.useOptionalAggregatedView = _),
      (l.useAggregatedViewImpl = f));
  },
  98,
);
