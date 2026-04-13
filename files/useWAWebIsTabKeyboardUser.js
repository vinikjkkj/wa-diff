__d(
  "useWAWebIsTabKeyboardUser",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = c(!1),
        n = t[0],
        r = t[1],
        a,
        i;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = function () {
              var e = function (t) {
                  t.key === "Tab" && r(!0);
                },
                t = function () {
                  r(!1);
                };
              return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                function () {
                  (document.removeEventListener("keydown", e),
                    document.removeEventListener("mousedown", t));
                }
              );
            }),
            (i = []),
            (e[0] = a),
            (e[1] = i))
          : ((a = e[0]), (i = e[1])),
        u(a, i),
        n
      );
    }
    l.default = d;
  },
  98,
);
