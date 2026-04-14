__d(
  "useWAWebIsTabKeyboardUser",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = c(!1),
        t = e[0],
        n = e[1];
      return (
        u(function () {
          var e = function (t) {
              t.key === "Tab" && n(!0);
            },
            t = function () {
              n(!1);
            };
          return (
            document.addEventListener("keydown", e),
            document.addEventListener("mousedown", t),
            function () {
              (document.removeEventListener("keydown", e),
                document.removeEventListener("mousedown", t));
            }
          );
        }, []),
        t
      );
    }
    l.default = d;
  },
  98,
);
