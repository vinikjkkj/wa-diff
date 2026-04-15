__d(
  "useWAWebAsyncRetry",
  ["react", "react-compiler-runtime", "useWAWebAsync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(10),
        a = c(0),
        i = a[0],
        l = a[1],
        s;
      n[0] !== i
        ? ((s = function () {
            l(i + 1);
          }),
          (n[0] = i),
          (n[1] = s))
        : (s = n[1]);
      var u = s,
        d;
      n[2] !== e
        ? ((d = function () {
            return e();
          }),
          (n[2] = e),
          (n[3] = d))
        : (d = n[3]);
      var m;
      n[4] !== t || n[5] !== i
        ? ((m = [].concat(t, [i])), (n[4] = t), (n[5] = i), (n[6] = m))
        : (m = n[6]);
      var p = r("useWAWebAsync")(d, m),
        _;
      return (
        n[7] !== p || n[8] !== u
          ? ((_ = babelHelpers.extends({}, p, { retry: u })),
            (n[7] = p),
            (n[8] = u),
            (n[9] = _))
          : (_ = n[9]),
        _
      );
    }
    l.default = d;
  },
  98,
);
