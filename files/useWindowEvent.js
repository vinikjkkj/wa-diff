__d(
  "useWindowEvent",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t, n) {
      var r = o("react-compiler-runtime").c(5),
        a = n === void 0 ? window : n,
        i,
        l;
      (r[0] !== t || r[1] !== e || r[2] !== a
        ? ((i = function () {
            return (
              a.addEventListener(e, t),
              function () {
                a.removeEventListener(e, t);
              }
            );
          }),
          (l = [e, t, a]),
          (r[0] = t),
          (r[1] = e),
          (r[2] = a),
          (r[3] = i),
          (r[4] = l))
        : ((i = r[3]), (l = r[4])),
        s(i, l));
    }
    l.default = u;
  },
  98,
);
