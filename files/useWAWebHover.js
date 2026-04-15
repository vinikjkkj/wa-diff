__d(
  "useWAWebHover",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = c(!1),
        r = n[0],
        a = n[1],
        i,
        l;
      return (
        t[0] !== e
          ? ((i = function () {
              var t = e.current;
              if (t) {
                var n = function () {
                    a(!0);
                  },
                  r = function () {
                    a(!1);
                  };
                return (
                  t.addEventListener("mouseenter", n),
                  t.addEventListener("mouseleave", r),
                  function () {
                    (t.removeEventListener("mouseenter", n),
                      t.removeEventListener("mouseleave", r));
                  }
                );
              }
            }),
            (l = [e]),
            (t[0] = e),
            (t[1] = i),
            (t[2] = l))
          : ((i = t[1]), (l = t[2])),
        u(i, l),
        r
      );
    }
    l.useWAWebHover = d;
  },
  98,
);
