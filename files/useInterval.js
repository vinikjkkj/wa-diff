__d(
  "useInterval",
  [
    "clearInterval",
    "react",
    "react-compiler-runtime",
    "setIntervalAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t, n) {
      var a = o("react-compiler-runtime").c(12),
        i;
      a[0] !== n
        ? ((i = n === void 0 ? [] : n), (a[0] = n), (a[1] = i))
        : (i = a[1]);
      var l = i,
        s = c(e),
        d,
        m;
      (a[2] !== e
        ? ((d = function () {
            s.current = e;
          }),
          (m = [e]),
          (a[2] = e),
          (a[3] = d),
          (a[4] = m))
        : ((d = a[3]), (m = a[4])),
        u(d, m));
      var p = e != null,
        _;
      a[5] !== p || a[6] !== t
        ? ((_ = function () {
            if (!(!p || t <= 0)) {
              var e = r("setIntervalAcrossTransitions")(function () {
                var e = s.current;
                e != null && e();
              }, t);
              return function () {
                return r("clearInterval")(e);
              };
            }
          }),
          (a[5] = p),
          (a[6] = t),
          (a[7] = _))
        : (_ = a[7]);
      var f;
      (a[8] !== l || a[9] !== p || a[10] !== t
        ? ((f = [p, t].concat(l)),
          (a[8] = l),
          (a[9] = p),
          (a[10] = t),
          (a[11] = f))
        : (f = a[11]),
        u(_, f));
    }
    l.default = d;
  },
  98,
);
