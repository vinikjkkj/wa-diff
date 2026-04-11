__d(
  "BaseDOMContainer.react",
  ["react", "react-compiler-runtime", "useMergeRefs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.node,
        a = e.ref,
        i = d(null),
        l,
        u;
      (t[0] !== n
        ? ((l = function () {
            var e = i.current;
            if (n != null && e != null)
              return (
                e.appendChild(n),
                function () {
                  e.removeChild(n);
                }
              );
          }),
          (u = [n]),
          (t[0] = n),
          (t[1] = l),
          (t[2] = u))
        : ((l = t[1]), (u = t[2])),
        c(l, u));
      var m = r("useMergeRefs")(a, i),
        p;
      return (
        t[3] !== m
          ? ((p = s.jsx("div", { ref: m })), (t[3] = m), (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    var p = s.memo(m);
    l.default = p;
  },
  98,
);
