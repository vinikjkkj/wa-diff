__d(
  "useCometErrorHandler",
  ["react", "react-compiler-runtime", "useCometReportErrorToHeroTracing"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(3),
        a = r("useCometReportErrorToHeroTracing")(t),
        i;
      return (
        n[0] !== e || n[1] !== a
          ? ((i = function (n, r) {
              (a(n), e == null || e(n, r));
            }),
            (n[0] = e),
            (n[1] = a),
            (n[2] = i))
          : (i = n[2]),
        i
      );
    }
    l.default = u;
  },
  98,
);
