__d(
  "useAutoplayRulesEngine",
  ["AutoplayRulesEngine", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = c(e),
        a;
      t[0] !== e
        ? ((a = function () {
            return new (r("AutoplayRulesEngine"))(e);
          }),
          (t[0] = e),
          (t[1] = a))
        : (a = t[1]);
      var i = d(a),
        l = i[0],
        s = i[1],
        m,
        p;
      (t[2] !== e
        ? ((m = function () {
            n.current !== e &&
              s(function () {
                return new (r("AutoplayRulesEngine"))(e);
              });
          }),
          (p = [e]),
          (t[2] = e),
          (t[3] = m),
          (t[4] = p))
        : ((m = t[3]), (p = t[4])),
        u(m, p));
      var _, f;
      return (
        t[5] !== l
          ? ((_ = function () {
              n.current = l.getRules();
            }),
            (f = [l]),
            (t[5] = l),
            (t[6] = _),
            (t[7] = f))
          : ((_ = t[6]), (f = t[7])),
        u(_, f),
        l
      );
    }
    l.default = m;
  },
  98,
);
