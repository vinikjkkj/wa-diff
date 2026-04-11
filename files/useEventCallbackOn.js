__d(
  "useEventCallbackOn",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t, n) {
      var r = o("react-compiler-runtime").c(5),
        a,
        i;
      (r[0] !== n || r[1] !== t || r[2] !== e
        ? ((a = function () {
            return (
              e.addEventListener(t, n),
              function () {
                e.removeEventListener(t, n);
              }
            );
          }),
          (i = [e, t, n]),
          (r[0] = n),
          (r[1] = t),
          (r[2] = e),
          (r[3] = a),
          (r[4] = i))
        : ((a = r[3]), (i = r[4])),
        s(a, i));
    }
    l.default = u;
  },
  98,
);
