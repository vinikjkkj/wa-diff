__d(
  "useDeferredModuleOnReady",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] !== e
        ? ((n = function () {
            return e.getModuleIfRequireable();
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = c(n),
        a = r[0],
        i = r[1],
        l,
        s;
      return (
        t[2] !== e || t[3] !== a
          ? ((l = function () {
              if (a == null) {
                var t = e.onReady(function (e) {
                  i(function () {
                    return e;
                  });
                });
                return function () {
                  t.remove();
                };
              }
            }),
            (s = [e, a]),
            (t[2] = e),
            (t[3] = a),
            (t[4] = l),
            (t[5] = s))
          : ((l = t[4]), (s = t[5])),
        u(l, s),
        a
      );
    }
    l.default = d;
  },
  98,
);
